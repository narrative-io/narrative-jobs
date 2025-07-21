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

### Setup ~/.zshrc.d

Apple now uses ZSH as the default shell in macOS Catalina, so instructions in this guide and in the various READMEs assume zsh. 

To confirm that you are using zsh:

  ```bash
  echo "$SHELL"
  ```

Run the instructions for your default shell.

The goal is to make it easier to customize environment variables by adding/overwriting files in the `~/.bashrc.d` (Bash) and `~/.zshrc.d` (ZSH)
directories. Most setup instructions depend on all files in one of these directories to be automatically sourced when the shell (zsh or bash) is started.

  ```bash
  cat > ~/.zshrc << 'EOF'
  # See https://unix.stackexchange.com/a/71258
  # https://zsh.sourceforge.io/Doc/Release/Files.html#Startup_002fShutdown-Files
  setopt interactivecomments
  for f in $(find $HOME/.zshrc.d -type f  | egrep -v '.swp$' | egrep -v '.disabled$' | sort) ; do
    source "$f"
  done
  EOF
  mkdir -p ~/.zshrc.d
  ```

### Homebrew

[Homebrew](https://brew.sh/) is the de-facto package manager for Mac OS X. Most other setup instructions
depend on having brew installed.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc.d/00_homebrew
```

### Zsh Andidote Plugin Manager

[Antidote](https://getantidote.github.io) is a Zsh plugin manager that is fast. It allows loading plugins from various sources, including from [Oh My Zsh](https://ohmyz.sh). Here is how to set it up with a few plugins, including the zsh-completions plugin.

None of the plugins in the suggested list are specific to Narrative, but the list can serve as a starting point depending on your own preferences.

```bash
brew install antidote

cat > ~/.zshrc.d/antidote << 'EOF'
source $(brew --prefix)/opt/antidote/share/antidote/antidote.zsh
antidote load
EOF

cat > ~/.zsh_plugins.txt << 'EOF'
# Some of these plugins presented in:
# https://travis.media/top-10-oh-my-zsh-plugins-for-productive-developers/

# Full list of Oh My ZSH plugins
# https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins

# Oh-My-ZSH Plugins
ohmyzsh/ohmyzsh path:lib
ohmyzsh/ohmyzsh path:plugins/colored-man-pages
ohmyzsh/ohmyzsh path:plugins/command-not-found
ohmyzsh/ohmyzsh path:plugins/copybuffer
ohmyzsh/ohmyzsh path:plugins/copypath
ohmyzsh/ohmyzsh path:plugins/copyfile
ohmyzsh/ohmyzsh path:plugins/dirhistory
# ohmyzsh/ohmyzsh path:plugins/docker
ohmyzsh/ohmyzsh path:plugins/extract
ohmyzsh/ohmyzsh path:plugins/git
ohmyzsh/ohmyzsh path:plugins/git-extras
ohmyzsh/ohmyzsh path:plugins/history
ohmyzsh/ohmyzsh path:plugins/jsontools
# ohmyzsh/ohmyzsh path:plugins/ls
ohmyzsh/ohmyzsh path:plugins/macos
ohmyzsh/ohmyzsh path:plugins/magic-enter
ohmyzsh/ohmyzsh path:plugins/npm
ohmyzsh/ohmyzsh path:plugins/node
# ohmyzsh/ohmyzsh path:plugins/osx
ohmyzsh/ohmyzsh path:plugins/python
ohmyzsh/ohmyzsh path:plugins/pip
ohmyzsh/ohmyzsh path:plugins/ruby
ohmyzsh/ohmyzsh path:plugins/sbt
# ohmyzsh/ohmyzsh path:plugins/scala
# ohmyzsh/ohmyzsh path:plugins/ssh-agent
ohmyzsh/ohmyzsh path:plugins/sudo
ohmyzsh/ohmyzsh path:plugins/tig
ohmyzsh/ohmyzsh path:plugins/wd
ohmyzsh/ohmyzsh path:plugins/web-search
ohmyzsh/ohmyzsh path:plugins/yarn
# ohmyzsh/ohmyzsh path:plugins/zsh_reload

# Oh-My-ZSH Theme
ohmyzsh/ohmyzsh path:themes/robbyrussell.zsh-theme

# zsh-users plugins 
zsh-users/zsh-syntax-highlighting
zsh-users/zsh-autosuggestions
zsh-users/zsh-history-substring-search
zsh-users/zsh-completions
EOF

# clear out the shell's autocompletion cache. See next section if issues
rm -f ~/.zcompdump && compinit
```

### Shell completion

Most commands provide advanced tab-completions to make your life easier.  To make use of this mechanism, it needs to be
activated.

The `zsh-users/zsh-completions` Antidote plugin takes care of setting up the Shell completion. However, if you do not use this plugin for whatever reason, 
you will need to take care of a few extra steps.

```bash
brew install zsh-completions
cat > ~/.zshrc.d/01_completion_brew << 'EOF'
if type brew &>/dev/null; then
  FPATH=$(brew --prefix)/share/zsh-completions:$FPATH

  autoload -Uz compinit
  compinit
fi
EOF

# apply the shell completions
source ~/.zshrc.d/01_completion_brew
```

#### Troubleshooting
In case you have warnings like "Ignore insecure directories and continue [y] or abort compinit [n]?":

```bash
compaudit | xargs chmod g-w
```

In order to rebuild the completions

```bash
rm -f ~/.zcompdump && compinit
```

### asdf-vm for tools and languages that are widely used in the projects

asdf-vm is a CLI tool that can manage multiple language runtime versions on a per-project basis. It is like gvm, nvm, rbenv & pyenv (and more) all in one!

Each project manages its own `.tool-versions` and specifies the required versions it depends on, but let's install default versions for the major languages
we depend on.

The following instructions provide a way to install the JVMs you need, but if you are interested in exploring other options, it is also possible to use:
- Homebrew
- [Coursier Java](https://get-coursier.io/docs/cli-java)
- [SDK Man](https://sdkman.io/)
- [Jabba](https://github.com/shyiko/jabba)

```bash
# Install asdf, formerly asdf.sh was available at $(brew --prefix asdf)/asdf.sh (no libexec in the path)
brew install asdf
echo "source $(brew --prefix asdf)/libexec/asdf.sh" > ~/.zshrc.d/zz_asdf
source $(brew --prefix asdf)/libexec/asdf.sh
echo "legacy_version_file = yes" > ~/.asdfrc

# Install Python plugin
brew install xz
asdf plugin add python https://github.com/danhper/asdf-python.git
asdf install python 3.11.3
asdf set -u python 3.11.3

# Install pipx plugin
asdf plugin add pipx https://github.com/yozachar/asdf-pipx.git
asdf install pipx 1.7.1
asdf set -u pipx 1.7.1 

# Install Node plugin
brew install coreutils gpg
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs 20.3.1
asdf set -u nodejs 20.3.1

# Install terraform plugin
asdf plugin add terraform https://github.com/Banno/asdf-hashicorp.git
asdf install terraform 1.5.1
asdf set -u terraform 1.5.1

# Install k9s plugin
asdf plugin add k9s https://github.com/looztra/asdf-k9s
asdf install k9s 0.27.3
asdf set -u k9s 0.27.3

# install argocd plugin
asdf plugin add argocd https://github.com/beardix/asdf-argocd.git
asdf install argocd 2.7.2
asdf set -u argocd 2.7.2

# Install java plugin
asdf plugin add java https://github.com/halcyon/asdf-java.git

# The 3 JVMs that may be of interest to us: 
# - We target the JVM 11 release in our builds
# - We run our software using JVM 11 (EMR) and 17 (Fargate, Lambda, Jenkins) in prod 
# - We execute the CI builds using JVM 17
# - Local setup differs between developers
# check asdf list-all java
asdf install java temurin-11.0.19+7
asdf install java temurin-17.0.7+7
asdf install java temurin-20.0.1+9
asdf set -u java temurin-20.0.1+9
# JVMs can be found in
# ~/.asdf/installs/java
```

For some reason, the `asdf-scala` plugin does not provide recent Scala versions, so a different mechanism must be used instead.

<base-code-group>
  <base-code-block label="Homebrew">

  ```bash
  brew install scala
  ```

  </base-code-block>
  <base-code-block label="Coursier" active>

  ```bash
  brew install coursier
  cat  > ~/.zshrc.d/coursier << 'EOF'
  fpath=(~/.zsh/completion $fpath)
  autoload -Uz compinit ; compinit
  export PATH="$PATH:~/Library/Application Support/Coursier/bin"
  eval "$(cs java --jvm 20 --env)"
  EOF
  source ~/.zshrc.d/coursier
  cs install scala
  ```

  </base-code-block>
  <base-code-block label="SDKMAN">

  ```bash
  curl -s "https://get.sdkman.io" | bash
  cat  > ~/.zshrc.d/sdkman << 'EOF'
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  EOF
  source ~/.zshrc.d/sdkman
  sdk install scala
  ```

  </base-code-block>
</base-code-group>


### Docker for desktop

[Docker for desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac) is used to run local PostgreSQL instances.

```bash
brew install --cask --no-quarantine docker
```

Once it is installed, 
- Use the recommended settings
- Click on the Resources/Advanced and make sure you have at least 4 CPU and 8 Gig of memory. 
- Login to your account

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

Then manually upload `~/.ssh/id_rsa.pub` to [github](http://www.github.com) (Settings -> SSH and GPG Keys)

Install hub

[Hub](https://hub.github.com/) provides github-related shortcuts

```bash
brew install hub
echo 'alias git=hub' > ~/.zshrc.d/hub
source ~/.zshrc.d/hub
```

## AWS Tools

### AWS Command-Line Tools

Install `awscli`

```bash
brew install awscli aws-shell
```

The CLI will be installed, but if you're following this document from top to bottom then you can't access AWS yet.

The next step is to follow the instructions for setting up `awsume` which will point you towards the instructions for
using SSO to fetch AWS credentials.

### Setup awsume and AWS profiles
awsu.me allows temporarily assuming an IAM role. See [the quickstart page](https://awsu.me/general/quickstart.html).

```bash
# Homebrew is not an officially supported method of installing awsume. 
# The officially-recommended way to install awsume is via pipx.
pipx install awsume
pipx ensurepath
awsume-configure
```

If `awsume-configure` fails for some reason, you can manually add the following to `~/.zshenv`:

```bash
# alias awsume to source the awsume script
alias awsume="source awsume"

fpath=(~/.awsume/zsh-autocomplete/ $fpath)
```

Restart the shell, then follow the instructions to [connect to the AWS Console using SSO and use the CLI tools](https://github.com/narrative-io/narrative-security?tab=readme-ov-file#usage-how-to-access-the-aws-console-and-aws-cli-sso)

And awsume should list the roles:

```bash
awsume -l
```

At that point you should be able to assume a role:

```bash
awsume -a admin
[sudo] Role credentials will expire 2022-12-16 20:12:30
```

### PostgreSQL Client

We install both [the official PostgreSQL client](https://www.postgresql.org/) to get access to tools like [pg_dump](https://www.postgresql.org/docs/11/app-pgdump.html)
as well as [pgcli](https://github.com/dbcli/pgcli) for a more feature-rich CLI tool.

```bash
brew install postgresql@15 pgcli
echo "path+=($(brew --prefix postgresql@15)/bin)" > ~/.zshrc.d/postgresql
source ~/.zshrc.d/postgresql
```

## Backend Application Dev

Each project has its own setup instructions and may require installing additional tools, but this section serves as a general guide to install
the main tools needed for backend development.


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


### IntelliJ CE

```bash
brew install --cask intellij-idea-ce
```

On first launch:
- Choose Mac OS X 10.5+ keymap
- Install Scala plugin
- Use the newly installed JDK while importing projects



### Thrift

We use [Thrift](https://thrift.apache.org/) + Parquet as a serialization mechanism for some of the backend jobs.

```bash
brew install thrift
```

## Frontend Application Dev

Each project has its own setup instructions and may require installing additional tools, but this section serves as a general guide to install
the main tools needed for backend development.


### Vue.js Devtools

[Vue.js devtools](https://github.com/vuejs/vue-devtools) is a great Chrome extension for debugging Vue Apps.

