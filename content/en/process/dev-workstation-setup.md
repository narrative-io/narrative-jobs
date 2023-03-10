---
title: Dev Workstation Setup
description: ''
position: 12
category: Process
---

This page describes how to setup a Mac OS X workstation to work on Narrative's projects.

## Common System Tools

### Xcode

The Apple development tools takes quite a while (1hr) to download and it will be required later in the installation, so make sure you start the download first, then continue the installation instructions while it is downloading.

Go to the `Apple` in the menu bar and select `App Store...`. In the search field (upper left side) type `XCode` then click on the `GET` button for XCode (Developer Tools).

### Homebrew

[Homebrew](https://brew.sh/) is the de-facto package manager for Mac OS X. Most other setup instructions
depend on having brew installed.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Setup the configuration for your default shell

Apple replaces bash with zsh as the default shell in macOS Catalina. To know which shell is your default shell execute the following command in a terminal

```bash
echo "$SHELL"
```

Run the instructions for your default shell.

<base-code-group>
  <base-code-block label="zsh" active>

  ```bash
  cat > ~/.zshrc << 'EOF'
  setopt interactivecomments
  [[ -r $HOME/.profile ]] && source $HOME/.profile
  EOF
  ```

  </base-code-block>
  <base-code-block label="bash">

  ```bash
  cat > ~/.bash_profile << 'EOF'
  [[ -r $HOME/.profile ]] && source $HOME/.profile
  EOF
  ```

  </base-code-block>
</base-code-group>


### Setup ~/.profile.d

The goal is to make it easier to customize environment variables by adding/overwriting files in the `~/.profile.d`
directory. Most setup instructions depend on all files in the `~/.profile.d` directory to be
automatically sourced when the shell (zsh or bash) is started

```bash
mkdir -p ~/.profile.d
cat > ~/.profile << 'EOF'
for f in $(find $HOME/.profile.d -type f | sort) ; do
  source "$f"
done
EOF
```

### Shell completion  (Optional)

Most commands (git, ...) provide advanced tab-completions to make your life easier.  To make use of this mechanism, it needs to be
activated.

[Programmable completion functions for bash](https://bash-completion.alioth.debian.org/)


<base-code-group>
  <base-code-block label="zsh" active>

  ```bash
  brew install zsh-completion

  cat  > ~/.profile.d/zsh_completion << 'EOF'
  if type brew &>/dev/null; then
    FPATH=$(brew --prefix)/share/zsh-completions:$FPATH

    autoload -Uz compinit
    compinit
  fi
  EOF

  chmod go-w /usr/local/share
  chmod -R go-w '/usr/local/share/zsh'
  rm -f ~/.zcompdump; compinit

  source ~/.profile.d/zsh_completion
  ```

  </base-code-block>
  <base-code-block label="bash">

  ```bash
  brew install bash-completion

  cat  > ~/.profile.d/bash_completion << 'EOF'
  if [ -f `brew --prefix`/etc/bash_completion ]; then
      . `brew --prefix`/etc/bash_completion
  fi
  EOF

  source ~/.profile.d/bash_completion
  ```

  </base-code-block>
</base-code-group>

#### Troubleshooting
In case you have warnings like "Ignore insecure directories and continue [y] or abort compinit [n]?":

```
compaudit | xargs chmod g-w
```

### asdf-vm for Python, Ruby, NodeJS, Terraform

asdf-vm is a CLI tool that can manage multiple language runtime versions on a per-project basis. It is like gvm, nvm, rbenv & pyenv (and more) all in one!

Each project manages its own `.tool-versions` and specifies the required versions it depends on, but let's install default versions for the major languages
we depend on.

```bash
# Install asdf, formerly asdf.sh was available at $(brew --prefix asdf)/asdf.sh (no libexec in the path)
brew install asdf
echo "source $(brew --prefix asdf)/libexec/asdf.sh" > ~/.profile.d/zzz_asdf
source $(brew --prefix asdf)/libexec/asdf.sh
echo "legacy_version_file = yes" > ~/.asdfrc

# Install Python
brew install xz
asdf plugin-add python https://github.com/danhper/asdf-python.git
asdf install python 3.11.1
asdf global python 3.11.1

# Install Ruby: still required for working with Jekyll doc that we
# are phasing out in favor of nuxt-content
asdf plugin-add ruby https://github.com/asdf-vm/asdf-ruby.git
asdf install ruby 2.7.2
asdf global ruby 2.7.2

# Install Node
brew install coreutils gpg
asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring
asdf install nodejs 14.16.0
asdf global nodejs 14.16.0

# Install terraform
asdf plugin-add terraform https://github.com/Banno/asdf-hashicorp.git
# some projects still depend on v0.12, but we are migrating to v0.14
asdf install terraform 0.12.30
asdf install terraform 0.14.7
asdf global terraform 0.14.7
```

### Docker for desktop

[Docker for desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac) is used to run local PostgreSQL instances.

[Click here to download the DMG](https://desktop.docker.com/mac/stable/amd64/Docker.dmg) and install it.
Once it is installed, click on the `preferences` (gear icon on the top right) and check the `Start Docker Desktop when you log in` in the general section. Then click on the Resources/Advanced and make sure you have 4 CPU and 8 Gig of memory. Click on the `Apply & restart` button on the bottom right.

### Git

[Git](https://git-scm.com/) is a distributed version control system

NOTE: Xcode is required at this step, wait until XCode to run this. If it is not finished, you can run the other steps and come back to this one once it's finished.


Install
```bash
sudo xcodebuild -license accept
brew install git
```

Configure

The minimum configuration would look like

```bash
git config --global user.name "Your Name"
git config --global user.email you@narrative.io
```

Generate Github SSH Key

```bash
ssh-keygen
```

Then manually upload `~/.ssh/id_rsa.pub` to [github](http://www.github.com)

Install hub

[Hub](https://hub.github.com/) provides github-related shortcuts

```bash
brew install hub
echo 'alias git=hub' > ~/.profile.d/hub
source ~/.profile.d/hub
```

### direnv

> [direnv](https://direnv.net/) is an environment switcher for the shell. It knows how to hook into bash, zsh, tcsh and fish shell to load or unload environment variables depending on the current directory. This allows project-specific environment variables without cluttering the ~/.profile file.


```bash
brew install direnv
# Load direnv after everything else has been loaded. In particular after `rbenv` and other shell extensions that manipulate the prompt
echo 'eval "$(direnv hook $SHELL)"' > ~/.profile.d/zzz_direnv
source ~/.profile.d/zzz_direnv
```

## AWS Tools

### AWS Command-Line Tools

First create [create AWS credentials](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
via the console, or speak to one of the other devs to have some created for you.

Install `awscli`

```bash
brew install awscli aws-shell
```

Configure `awscli` using the generated Access Key

```bash
$ aws configure
> AWS Access Key ID [None]: <SECRET>
> AWS Secret Access Key [None]: <SECRET>
> Default region name [None]: us-east-1
> Default output format [None]: json
```

Some Hadoop/S3 libraries look for the credentials in the `AWS_*` environment variables instead of `~/.aws/credentials` or `~/.aws_credentials`,
so you may want to define `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

Note: these environment variables do not play well with `assume-role`, so they should not be automatically sourced. Source them at your convenience.

```bash
ln -s ~/.aws/credentials ~/.aws_credentials
cat  > ~/.aws/env_config << 'EOF'
export AWS_ACCESS_KEY_ID=<TO_REPLACE>
export AWS_SECRET_ACCESS_KEY=<TO_REPLACE>
EOF
```

Test the config

```bash
aws ec2 describe-instances
aws s3 ls narrative-artifact-releases
```

### Configure FoxyProxy to access EMR UIs (Optional)

[FoxyProxy](https://chrome.google.com/webstore/detail/foxyproxy-standard/gcknhkkoolaabfmlnjonogaaifnjlfnp?hl=en) lets you use an SSH tunnel as a proxy to
browse the Hadoop/Spark EMR admin tools.

FoxyProxy is optional because EMR now provides a UI

- Browse to the [EMR console](https://console.aws.amazon.com/elasticmapreduce/home?region=us-east-1)
- Click on any cluster
- Click on Enable Web Connections and follow the instructions to configure FoxyProxy

### Install Packer

We use [Packer](https://www.packer.io/) to build custom AWS AMIs.

```bash
brew install packer
```

### assume-role

> [assume-role](https://github.com/remind101/assume-role) will request and set temporary credentials in your shell environment variables for a given (AWS IAM) role.

We use it to temporarily acquire a role while performing certain tasks that require additional permissions.

```bash
brew install remind101/formulae/assume-role
```

#### awsume (in case assume-role doesn't work)
You most likely will meet [segmentation fault](https://github.com/remind101/assume-role/issues/54) error once you use the Apple Silicon chip. Unfortunately, the latest version (0.3.2) is dated 2017; hence, there is a chance that the issue won't be fixed.
[awsume](https://awsu.me/) is quite the same utility.
You can find up-to-date installation instructions on [the quickstart page](https://awsu.me/general/quickstart.html).

Ensure that aws credentials contain the role:
```
cat ~/.aws/credentials
[default]
aws_access_key_id = ID
aws_secret_access_key = KEY


[sudo]
role_arn = arn:aws:iam::NARRATIVE_ACCOUNT_ID:role/sudo
source_profile=default
```

And awsume should list the role:
```
awsume -l
Listing...

=======================AWS Profiles=======================
PROFILE       TYPE  SOURCE   ACCOUNT
default       User  None     Unavailable
sudo          Role  default  NARRATIVE_ACCOUNT_ID
```

At that point you should be able to change the role:
```
awsume sudo
[sudo] Role credentials will expire 2022-12-16 20:12:30
```

## Backend Application Dev

Each project has its own setup instructions and may require installing additional tools, but this section serves as a general guide to install
the main tools needed for backend development.

### Java SDK

<base-code-group>
  <base-code-block label="Homebrew">

  ```bash
  brew tap adoptopenjdk/openjdk
  brew install --cask adoptopenjdk8
  ```

  </base-code-block>
  <base-code-block label="Coursier" active>

  ```bash
  brew install coursier/formulas/coursier
  coursier
  cs java --jvm 8

  cat  > ~/.profile.d/coursier << 'EOF'
  fpath=(~/.zsh/completion $fpath)
  autoload -Uz compinit ; compinit
  export PATH="$PATH:/Users/henri/Library/Application Support/Coursier/bin"
  eval "$(cs java --jvm 8 --env)"
  EOF

  source ~/.profile.d/coursier

  ```

  </base-code-block>
  <base-code-block label="SDKMAN">

  ```bash
  curl -s "https://get.sdkman.io" | bash
  cat  > ~/.profile.d/sdkman << 'EOF'
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  EOF
  source ~/.profile.d/sdkman
  ```

  </base-code-block>
</base-code-group>

#### Apple silicon native JDK
There is no native OpenJDK for ARM chips.
[Liberica JDK](https://bell-sw.com/pages/downloads/#downloads) helps here:
```
brew install liberica-jdk8
```
You can read more about that JDK [here](https://bell-sw.com/announcements/2021/03/12/Liberica-on-Apple-Silicon/).

### sbt

[sbt](http://www.scala-sbt.org/) is the Scala Build Tool

Install

<base-code-group>
  <base-code-block label="Homebrew">

  ```bash
  brew install sbt
  ```
  </base-code-block>
  <base-code-block label="Coursier" active>

  ```bash
  cs install sbt
  ```

  </base-code-block>
  <base-code-block label="SDKMAN">

  ```bash
  sdk install sbt
  ```

  </base-code-block>
</base-code-group>


### Scala Console

The Scala Console REPL is included in the scala toolchain.

<base-code-group>
  <base-code-block label="Homebrew">

  ```bash
  brew install scala
  ```

  </base-code-block>
  <base-code-block label="Coursier" active>

  ```bash
  cs install scala
  ```

  </base-code-block>
  <base-code-block label="SDKMAN">

  ```bash
  sdk install scala
  ```

  </base-code-block>
</base-code-group>


### Coursier

Coursier provides numerous benefits over sbt's default ivy resolvers

- downloading artifacts in parallel
- better offline mode
- non obfuscated cache
- no global lock

It is automatically used by the SBT builds. No need to manually configure it.

### IntelliJ CE

```bash
brew install --cask intellij-idea-ce
```

On first launch:
- Choose Mac OS X 10.5+ keymap
- Install Scala plugin
- Use the newly installed JDK while importing projects
- Navigate to Preferences / Editor / Code Style / Scala
- Import the [Narrative I/O Scala Code Style Scheme](https://github.com/narrative-io/narrative-jobs/blob/master/other/app-resources//NarrativeIO.xml).


### PostgreSQL Client

We install both [the official PostgreSQL client](https://www.postgresql.org/) to get access to tools like [pg_dump](https://www.postgresql.org/docs/11/app-pgdump.html)
as well as [pgcli](https://github.com/dbcli/pgcli) for a more feature-rich CLI tool.

```bash
brew install postgresql pgcli
```

### Redis Client

The [Redis](https://redis.io/) command-line client.

```bash
brew install redis
```

### Thrift

We use [Thrift](https://thrift.apache.org/) + Parquet as a serialization mechanism for some of the backend jobs.

```bash
brew install thrift
```

### Apache Spark

[Apache Spark](https://spark.apache.org/) is a unified analytics engine for large-scale data processing.

```bash
brew install apache-spark
```

## Frontend Application Dev

Each project has its own setup instructions and may require installing additional tools, but this section serves as a general guide to install
the main tools needed for backend development.

### PostgreSQL Client

We install both [the official PostgreSQL client](https://www.postgresql.org/) to get access to tools like [pg_dump](https://www.postgresql.org/docs/11/app-pgdump.html)
as well as [pgcli](https://github.com/dbcli/pgcli) for a more feature-rich CLI tool.

```bash
brew install postgresql pgcli
```

### Install jq
Used by the legacy frontend build

```bash
brew install jq
```

### Vue.js Devtools

[Vue.js devtools](https://github.com/vuejs/vue-devtools) is a great Chrome extension for debugging Vue Apps.

### Augury

[Augury](https://augury.angular.io/) is a great Chrome extension for debugging Angular apps, which we use for the legacy frontend. [Install the chrome extension](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
