---
title: Dev Workstation Setup
description: ''
position: 12
category: Process
---

This page describes how to setup a Mac OS X workstation to work on Narrative's projects. 

## Common System Tools

### Homebrew

[Homebrew](https://brew.sh/) is the de-facto package manager for Mac OS X. Most other setup instructions
depend on having brew installed.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Setup ~/.bash_profile.d

The goal is to make it easier to customize environment variables by adding/overwriting files in the `~/.bash_profile.d`
directory. Most setup instructions depend on all files in the `~/.bash_profile.d` directory to be
automatically sourced when the shell is started

```bash
mkdir -p ~/.bash_profile.d
cat > ~/.bash_profile << 'EOF'
for f in $(find $HOME/.bash_profile.d -type f | sort) ; do
  source "$f"
done
EOF
```

### bash-completion

[Programmable completion functions for bash](https://bash-completion.alioth.debian.org/)

Most commands (git, ...) provide advanced tab-completions to make your life easier.  To make use of this mechanism, it needs to be
activated.

Install

```bash
brew install bash-completion
```

Enable

```bash
cat  > ~/.bash_profile.d/bash_completion << 'EOF'
if [ -f `brew --prefix`/etc/bash_completion ]; then
    . `brew --prefix`/etc/bash_completion
fi
EOF
source ~/.bash_profile.d/bash_completion
```

### asdf-vm for Python, Ruby, NodeJS, Terraform

asdf-vm is a CLI tool that can manage multiple language runtime versions on a per-project basis. It is like gvm, nvm, rbenv & pyenv (and more) all in one!

Each project manages its own `.tool-versions` and specifies the required versions it depends on, but let's install default versions for the major languages
we depend on.

```bash
brew install asdf
echo "source $(brew --prefix asdf)/asdf.sh" > ~/.bash_profile.d/zzz_asdf
source $(brew --prefix asdf)/asdf.sh
echo "legacy_version_file = yes" > ~/.asdfrc

# Install Python
asdf plugin-add python https://github.com/danhper/asdf-python.git
asdf install python 3.9.2
asdf global python 3.9.2

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

### Docker

[Docker](https://www.docker.com/) is used for instance to run local PostgreSQL instances.

```bash
brew install docker docker-compose docker-machine-driver-xhyve
brew cask install virtualbox
sudo chown root:wheel $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
sudo chmod u+s $(brew --prefix)/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
```

PS: docker-machine is now in [maintenance mode](https://github.com/docker/machine/issues/4537), so we need to migrate
to [Docker Desktop](https://www.docker.com/products/docker-desktop) at some point.

### Git

[Git](https://git-scm.com/) is a distributed version control system

Install
```bash
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
echo 'alias git=hub' > ~/.bash_profile.d/hub
source ~/.bash_profile.d/hub
```

### direnv

> [direnv](https://direnv.net/) is an environment switcher for the shell. It knows how to hook into bash, zsh, tcsh and fish shell to load or unload environment variables depending on the current directory. This allows project-specific environment variables without cluttering the ~/.profile file.


```bash
brew install direnv
# Load direnv after everything else has been loaded. In particular after `rbenv` and other shell extensions that manipulate the prompt
echo 'eval "$(direnv hook bash)"' > ~/.bash_profile.d/zzz_direnv
source ~/.bash_profile.d/zzz_direnv
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

### Configure FoxyProxy] to access EMR UIs

[FoxyProxy](https://chrome.google.com/webstore/detail/foxyproxy-standard/gcknhkkoolaabfmlnjonogaaifnjlfnp?hl=en) lets you use an SSH tunnel as a proxy to 
browse the Hadoop/Spark EMR admin tools.

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


## Backend Application Dev

Each project has its own setup instructions and may require installing additional tools, but this section serves as a general guide to install
the main tools needed for backend development.

### Java SDK

```bash
brew install openjdk
```

### sbt

[sbt](http://www.scala-sbt.org/) is the Scala Build Tool

Install

```bash
brew install sbt
```

### Scala Console

The Scala Console REPL is included in the scala toolchain.

```bash
brew install scala
```

### Coursier

Coursier provides numerous benefits over sbt's default ivy resolvers

- downloading artifacts in parallel
- better offline mode
- non obfuscated cache
- no global lock

It is automatically used by the SBT builds. No need to manually configure it.

### IntelliJ CE

```bash
brew cask install intellij-idea-ce
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

### Vue.js Devtools]

[Vue.js devtools](https://github.com/vuejs/vue-devtools) is a great Chrome extension for debugging Vue Apps.

### Augury

[Augury](https://augury.angular.io/) is a great Chrome extension for debugging Angular apps, which we use for the legacy frontend