


<!DOCTYPE html>
<html lang="en" class="is-copy-enabled">
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>ajaxRequest/README.md at master · adars99/JSONPCrossDomain</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="adars99/JSONPCrossDomain" name="twitter:title" />
      <meta content="Ajax JSONP call using Javascript" name="twitter:description" />
      <meta content="GitHub" property="og:site_name" />
      <meta content="Ajax JSONP call using Javascript" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
     <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="adars99">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


      
  <meta name="description" content="Ajax JSONP call using Javascript">
  <meta name="go-import" content="github.com/adars99/JSONPCrossDomain github.com/adars99/JSONPCrossDomain https://github.com/adars99/JSONPCrossDomain.git">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/adars99/JSONPCrossDomain/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/adars99/JSONPCrossDomain/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:adars99"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new..."
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="adars99/JSONPCrossDomain">This repository</span>
  </div>
    <a class="dropdown-item" href="/adars99/JSONPCrossDomain/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="#"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@adars99" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/11221018?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">adars99</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/adars99" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>


        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="n4oqrnu2F5ZobbK9KsdSV9p8qHBo7ur3xSfSKs/fqRwBuPHmr5AAm38jPuweqTvXesLngk1tTWNbFiS0vK8Q4Q==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zXA8c+8Ouah4Ut3HwtB9scYKRfBAAHPK0poaU0WDssjWGy3uctcDfW1TyQ3l2MlTWfsD37ht51CfoPLQZV+61Q==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="1194207" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/adars99/JSONPCrossDomain/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/adars99/JSONPCrossDomain/watchers">
          5
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/adars99/JSONPCrossDomain/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7chms+1g4HE3YQDJTDFXyefW1e8CzpCklOONlPBnH6phBDFapt3Xbv0QMho0dmBN0plVZP8CcEgIqB22jMKT5g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar adars99/JSONPCrossDomain"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/adars99/JSONPCrossDomain/stargazers">
          41
        </a>
</form>
    <form accept-charset="UTF-8" action="/adars99/JSONPCrossDomain/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QSkRAyMCtGIX5u6OG3XqvIz5KDrl0PKugbrws3f6jOKl6bb/Le7gILyb2VFNC7MzuX36o6S4pMoF9qz1GBvJ3w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star adars99/JSONPCrossDomain"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/adars99/JSONPCrossDomain/stargazers">
          41
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/adars99/JSONPCrossDomain/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dwB83HsN80t5CG/ZeDXUb1h6MOwU29aL/XO+Okxbpz+BU60kvqCbuDRD8vUo50exVWNdUWivLmuPqdhxf3tYBQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of adars99/JSONPCrossDomain to your account"
                aria-label="Fork your own copy of adars99/JSONPCrossDomain to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/adars99/JSONPCrossDomain/network" class="social-count">12</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/adars99" class="url fn" itemprop="url" rel="author"><span itemprop="title">adars99</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/adars99/JSONPCrossDomain" data-pjax="#js-repo-pjax-container">J50Npi</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/adars99/JSONPCrossDomain/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/adars99/JSONPCrossDomain" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /adars99/JSONPCrossDomain">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/adars99/JSONPCrossDomain/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /adars99/JSONPCrossDomain/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/adars99/JSONPCrossDomain/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /adars99/JSONPCrossDomain/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/adars99/JSONPCrossDomain/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /adars99/JSONPCrossDomain/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/adars99/JSONPCrossDomain/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /adars99/JSONPCrossDomain/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/adars99/JSONPCrossDomain/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /adars99/JSONPCrossDomain/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/adars99/JSONPCrossDomain.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:adars99/JSONPCrossDomain.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/adars99/JSONPCrossDomain" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nrV/oaEUtRiPyq9FRl+zf/rx1BJe1Z+ZgRFjRsA+zI73OCQgn9cDFNNPGj8dXYQ/Lg0SJX9Vmga5I6kJOvqQEQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sHpkk3N8ULOossyVhQa9WuoHvpwWAJTet7ErKgK+gWC98De88Bg5HxO5hKvQrTyz/hdxw/bsUF4jR7fTbsaFXw==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="IRjP1Z57needrLNMhPyIjRaKWi1dlLSZkdDfS9GM3rjVjrEGt2cLcARe3aL9aIl8+BEiZtxywwJ8R8vfeTH03A==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>


  <a href="github-windows://openRepo/https://github.com/adars99/JSONPCrossDomain" class="btn btn-sm sidebar-button" title="Save adars99/JSONPCrossDomain to your computer and use it in GitHub Desktop." aria-label="Save adars99/JSONPCrossDomain to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/adars99/JSONPCrossDomain/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of adars99/JSONPCrossDomain as a zip file"
                   title="Download the contents of adars99/JSONPCrossDomain as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/adars99/JSONPCrossDomain/blob/fce0a9db9dd324ca9d3a109771b4b865cf59a8e0/README.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8f9d38be5cc0e64603dbe5dd33df6399 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/adars99/JSONPCrossDomain/blob/gh-pages/README.md"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/adars99/JSONPCrossDomain/blob/master/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/adars99/JSONPCrossDomain/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/adars99/JSONPCrossDomain" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">J50Npi</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@adars99" class="avatar" height="24" src="https://avatars0.githubusercontent.com/u/76379?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/adars99" rel="author">adars99</a></span>
        <time datetime="2013-03-29T03:20:33Z" is="relative-time">Mar 29, 2013</time>
        <div class="commit-title">
            <a href="/adars99/JSONPCrossDomain/commit/fce0a9db9dd324ca9d3a109771b4b865cf59a8e0" class="message" data-pjax="true" title="Update README.md">Update README.md</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>2</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="adars99" href="/adars99/JSONPCrossDomain/commits/master/README.md?author=adars99"><img alt="@adars99" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/76379?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elgalu" href="/adars99/JSONPCrossDomain/commits/master/README.md?author=elgalu"><img alt="@elgalu" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/111569?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@adars99" height="24" src="https://avatars0.githubusercontent.com/u/76379?v=3&amp;s=48" width="24" />
            <a href="/adars99">adars99</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@elgalu" height="24" src="https://avatars0.githubusercontent.com/u/111569?v=3&amp;s=48" width="24" />
            <a href="/elgalu">elgalu</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/adars99/JSONPCrossDomain/raw/master/README.md" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/adars99/JSONPCrossDomain/blame/master/README.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/adars99/JSONPCrossDomain/commits/master/README.md" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/adars99/JSONPCrossDomain?branch=master&amp;filepath=README.md"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/adars99/JSONPCrossDomain/edit/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DCqGpv/mjwsIiT0/iaUqxMCSrKpdRw6yGmartRk5bPaX2ECJdqoC2f1e7bjh/9yz6u4J1Pe/u75OtoTD8/bm+A==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/adars99/JSONPCrossDomain/delete/master/README.md" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kY9pJhVILaZX8bgGgJ2XGcw0E6V+VSlcSqg8mCGIDJcd5XyBrz/6D9WKzw+VUfg7U7DxTnZF//BIk3GF5dnhgQ==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        71 lines (41 sloc)
        <span class="file-info-divider"></span>
      2.359 kB
    </div>
  </div>
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-j50nπ" class="anchor" href="#j50nπ" aria-hidden="true"><span class="octicon octicon-link"></span></a>J50Nπ</h1>

<p>Basic JSONP helper (pure JS)</p>

<h2><a id="user-content-authors" class="anchor" href="#authors" aria-hidden="true"><span class="octicon octicon-link"></span></a>Authors</h2>

<p>Roberto Decurnex (<a href="mailto:nex.development@gmail.com">nex.development@gmail.com</a>)</p>

<h2><a id="user-content-download" class="anchor" href="#download" aria-hidden="true"><span class="octicon octicon-link"></span></a>Download</h2>

<p>You clone the project with Git by running:</p>

<pre><code>$ git clone git://github.com/adars99/JSONPCrossDomain
</code></pre>

<h2><a id="user-content-quick-sample" class="anchor" href="#quick-sample" aria-hidden="true"><span class="octicon octicon-link"></span></a>Quick Sample</h2>

<div class="highlight highlight-javascript"><pre><span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>http://domain/something.jsonp<span class="pl-pds">"</span></span>;
<span class="pl-k">var</span> data <span class="pl-k">=</span> {};
<span class="pl-k">var</span> <span class="pl-en">callback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>){ <span class="pl-c1">alert</span>(data.attribute_name)};

J50Npi.getJSON(url, data, callback);</pre></div>

<p>Note that the given url does not need a callback parameter. It will be set automatically to <strong>J50Npi.success</strong> that will be the one executing the given callback function.</p>

<h2><a id="user-content-notes" class="anchor" href="#notes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Notes</h2>

<p>This library expect your JSON calls to accept a <code>callback</code> parameter on the url and use that function name to wrap the JSON response.</p>

<h3><a id="user-content-example" class="anchor" href="#example" aria-hidden="true"><span class="octicon octicon-link"></span></a>Example</h3>

<p><a href="http://example.com/resource.json">http://example.com/resource.json</a></p>

<pre><code>{"key":"value"}
</code></pre>

<p><a href="http://example.com/resource.json?callback=J50Npi.success">http://example.com/resource.json?callback=J50Npi.success</a></p>

<pre><code>J50Npi.success({"key":"value"});
</code></pre>

<p>Note that you can ignore the callback param and just hardcode your responses to return this <code>J50Npi.success(your_json_here);</code> [but this is a terrible idea :P]. </p>

<h2><a id="user-content-step-by-step-beginners-sample" class="anchor" href="#step-by-step-beginners-sample" aria-hidden="true"><span class="octicon octicon-link"></span></a>Step by Step Beginner's Sample</h2>

<ol>
<li><p>Open your Browser</p></li>
<li><p>Open a non javascript intensive page; e.g. <a href="http://adars99.github.com/">http://adars99.github.com/</a></p></li>
<li><p>Open the console by pressing F12 or whatever key your browser use. You may need to select tab 'Console' (tested on Chrome and Internet Explorer 10)</p></li>
<li><p>Paste the below code (within the console)</p></li>
</ol>

<div class="highlight highlight-javascript"><pre><span class="pl-c">// This line taken from J50Npi.min.js (within this repo)</span>
<span class="pl-k">var</span> J50Npi<span class="pl-k">=</span>{currentScript<span class="pl-k">:</span><span class="pl-c1">null</span>,<span class="pl-en">getJSON</span>:<span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">d</span>,<span class="pl-smi">h</span>){<span class="pl-k">var</span> g<span class="pl-k">=</span>b<span class="pl-k">+</span>(b.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">"</span>?<span class="pl-pds">"</span></span>)<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">"</span>&amp;<span class="pl-pds">"</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>?<span class="pl-pds">"</span></span>);<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">"</span>head<span class="pl-pds">"</span></span>)[<span class="pl-c1">0</span>];<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">"</span>script<span class="pl-pds">"</span></span>);<span class="pl-k">var</span> f<span class="pl-k">=</span>[];<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>;<span class="pl-v">this</span>.success<span class="pl-k">=</span>h;d.callback<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>J50Npi.success<span class="pl-pds">"</span></span>;<span class="pl-k">for</span>(e <span class="pl-k">in</span> d){f.<span class="pl-c1">push</span>(e<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span>=<span class="pl-pds">"</span></span><span class="pl-k">+</span>encodeURIComponent(d[e]))}g<span class="pl-k">+=</span>f.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">"</span>&amp;<span class="pl-pds">"</span></span>);a.<span class="pl-c1">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span>;a.<span class="pl-c1">src</span><span class="pl-k">=</span>g;<span class="pl-k">if</span>(<span class="pl-v">this</span>.currentScript){c.<span class="pl-c1">removeChild</span>(currentScript)}c.<span class="pl-c1">appendChild</span>(a)},success<span class="pl-k">:</span><span class="pl-c1">null</span>};

<span class="pl-c">// This is a WorldIP free geo-location database.</span>
<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>http://api.wipmania.com/jsonp<span class="pl-pds">"</span></span>;

<span class="pl-c">// No specific data need to be sent there</span>
<span class="pl-k">var</span> data <span class="pl-k">=</span> {};

<span class="pl-c">// We need a function callback to be executed after the response is received</span>
<span class="pl-k">var</span> <span class="pl-en">callback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">geodata</span>){ <span class="pl-c1">alert</span>(geodata.address.country); };

<span class="pl-c">// And here is the magic:</span>
J50Npi.getJSON(url, data, callback);</pre></div>

<p>You should see an alert saying your current (ip based location) country name after half a second or so.</p>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
      <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06857s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-ede12d541512d70525789d7832b10f3ffdaaef2af18a8f1569d8c9586dc81874.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-81aac7de70bbbd64c05c5476f2b947a82c2026f01c6814252ca6bde54b3fbc38.js"></script>
      
      
  </body>
</html>

