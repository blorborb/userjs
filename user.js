//////////////////
//////////////////
//// security ////
//////////////////
//////////////////

// enforce smartblock shims
user_pref("extensions.webcompat.enable_shims", true);

// change navigator properties
//user_pref("general.buildID.override", "");

// enable samesite lax
user_pref("network.cookie.sameSite.laxByDefault", true);
user_pref("network.cookie.sameSite.schemeful", true);

// disable prefetching
user_pref("network.early-hints.enabled", false);
user_pref("network.early-hints.over-http-v1-1.enabled", false);
user_pref("network.early-hints.preconnect.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.preconnect", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// isolate content script resources
user_pref("privacy.antitracking.isolateContentScriptResources", true);

// enable query stripping
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// enable state partitioning for recently visited, redirect and window open
user_pref("privacy.restrict3rdpartystorage.heuristic.recently_visited", true);
user_pref("privacy.restrict3rdpartystorage.heuristic.redirect", true);
user_pref("privacy.restrict3rdpartystorage.heuristic.window_open", true);

// disable csp reporting
user_pref("security.csp.reporting.enabled", false);

// disable ssl session identifiers
user_pref("security.ssl.disable_session_identifiers", true);

// disable vulnerable cipher suites (passive fingerprinting possible?)
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false);
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false);
user_pref("security.ssl3.rsa_aes_256_sha", false);

// change accept headers to chromes accept headers
user_pref("network.http.accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
user_pref("image.http.accept", "image/avif,image/webp,image/apng,image/*,*/*;q=0.8");

// disable webgl (enable if you need)
user_pref("webgl.disabled", true);

/////////////////////
/////////////////////
//// performance ////
/////////////////////
/////////////////////

// enable zstd compression for streams of data
user_pref("dom.compression_streams.zstd.enabled", true);

// enable h265
user_pref("dom.media.webcodecs.h265.enabled", true);

// increase canvas cache size
user_pref("gfx.canvas.accelerated.cache-size", 512);

// increase skia cache size
user_pref("gfx.content.skia-font-cache-size", 20);

// force reusing of decoder device
user_pref("gfx.direct3d11.reuse-decoder-device-force-enabled", true);

// enable skia dithering
user_pref("gfx.skia.dithering", true);

//// enable webrender ////
user_pref("gfx.webrender.all", true);

// forcing webrender compositor crashes in full-screen videos on firefox 143
user_pref("gfx.webrender.compositor", true);

// enable webrender dithering for gradients
user_pref("gfx.webrender.dithering", true);

// enable precaching
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);

// enable svg filter effects
user_pref("gfx.webrender.svg-filter-effects.feconvolvematrix", true);
user_pref("gfx.webrender.svg-filter-effects.fediffuselighting", true);
user_pref("gfx.webrender.svg-filter-effects.fedisplacementmap", true);
user_pref("gfx.webrender.svg-filter-effects.feimage", true);
user_pref("gfx.webrender.svg-filter-effects.femorphology", true);
user_pref("gfx.webrender.svg-filter-effects.fespecularlighting", true);
user_pref("gfx.webrender.svg-filter-effects.fetile", true);
user_pref("gfx.webrender.svg-filter-effects.feturbulence", true);

// increase chunk size for image decoders
user_pref("image.mem.decode_bytes_at_a_time", 65536);

// enable css masonry layout
user_pref("layout.css.grid-template-masonry-value.enabled", true);

// force hardware acceleration
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.hardware-video-encoding.force-enabled", true);

// enable vp9 for webrtc
user_pref("media.webrtc.simulcast.vp9.enabled", true);

// increase network buffers
user_pref("network.buffer.cache.count", 48);
user_pref("network.buffer.cache.size", 65535);

// increase max connections for http
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);

// increase ssl token capacity
user_pref("network.ssl_tokens_cache_capacity", 10240);

// enable certificate compression
user_pref("security.tls.enable_certificate_compression_abridged", true);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//// unneeded for me (remove any of these if you need to use them) ////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// disable accessibility (could increase performance?)
user_pref("accessibility.ARIAElementReflection.enabled", false);
user_pref("accessibility.accesskeycausesactivation", false);
user_pref("accessibility.browsewithcaret_shortcut.enabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("accessibility.typeaheadfind.enablesound", false);
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("accessibility.typeaheadfind.manual", false);
user_pref("accessibility.typeaheadfind.prefillwithselection", false);
user_pref("browser.urlbar.accessibility.tabToSearch.announceResults", false);
user_pref("devtools.accessibility.enabled", false);

// disable safe browsing
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.id", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.only_top_level", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryName", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.pver", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.pver", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "");
user_pref("browser.safebrowsing.provider.mozilla.pver", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// disable translations
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);
user_pref("browser.translations.select.enable", false);

// pocket (probably going to be removed soon)
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.bffApi", "");
user_pref("extensions.pocket.bffRecentSaves", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.oAuthConsumerKeyBff", "");
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.site", "");

// disable mozilla accounts
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.commands.missed.fetch_interval", 0);
user_pref("identity.fxaccounts.commands.remoteTabManagement.enabled", false);
user_pref("identity.fxaccounts.contextParam", "");
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.oauth.enabled", false);
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("identity.fxaccounts.remote.oauth.uri", "");
user_pref("identity.fxaccounts.remote.pairing.uri", "");
user_pref("identity.fxaccounts.remote.profile.uri", "");
user_pref("identity.fxaccounts.remote.root", "");
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
user_pref("identity.fxaccounts.toolbar.defaultVisible", false);
user_pref("identity.fxaccounts.toolbar.enabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.monitorEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.relayEnabled", false);
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false);

// disable picture in picture
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// disable middleclick pasting
user_pref("middlemouse.paste", false);

// disable reader
user_pref("reader.parse-on-load.enabled", false);

// hide sidebar
user_pref("sidebar.visibility", "hide-sidebar");

// disable key for menu bar
user_pref("ui.key.menuAccessKeyFocuses", false);

//////////////////////////////
//////////////////////////////
//// personal preferences ////
//////////////////////////////
//////////////////////////////

// dont show about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// disable firefox labs
user_pref("browser.preferences.experimental.hidden", true);
user_pref("browser.preferences.experimental", false);

// disable more from mozilla
user_pref("browser.preferences.moreFromMozilla", true);

// fades out unloaded tabs
user_pref("browser.tabs.fadeOutUnloadedTabs", true);

// disable home page
user_pref("browser.newtabpage.enabled", false);

// set home and new tab page to about:blank
user_pref("browser.startup.homepage", "about:blank");

// resume previous session
user_pref("browser.startup.page", 3);

// only show bookmarks on a new tab
user_pref("browser.toolbars.bookmarks.visibility", "newtab");

// disable suggestions
user_pref("browser.urlbar.shortcuts.actions", false);
user_pref("browser.urlbar.shortcuts.bookmarks", false);
user_pref("browser.urlbar.shortcuts.history", false);
user_pref("browser.urlbar.shortcuts.tabs", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);

// enable highlighting all in findbar
user_pref("findbar.highlightAll", true);

// enable autoscroll
user_pref("general.autoScroll", true);

// disable scrollbars
user_pref("layout.testing.scrollbars.always-hidden", true);

// autoplay videos
user_pref("media.autoplay.default", 0);

// enable drm content
user_pref("media.eme.enabled", true);

// telemetry
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.dap.helper.hpke", "");
user_pref("toolkit.telemetry.dap.helper.url", "");
user_pref("toolkit.telemetry.dap.leader.hpke", "");
user_pref("toolkit.telemetry.dap.leader.url", "");
user_pref("toolkit.telemetry.dap.logLevel", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.translations.logLevel", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.user_characteristics_ping.logLevel", "");

////////////////////
////////////////////
//// annoyances ////
////////////////////
////////////////////

// make firefox show the close tab button with more tabs opened
user_pref("browser.tabs.tabClipWidth", 64);
user_pref("browser.tabs.tabMinWidth", 32);

// disable fullscreen warning
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

/////////////////
/////////////////
//// useless ////
/////////////////
/////////////////

// ai
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.checkForMemory", false);
user_pref("browser.ml.linkPreview.blockListEnabled", false);
user_pref("browser.ml.linkPreview.ignoreMs", 0);
user_pref("browser.ml.linkPreview.longPress", false);
user_pref("browser.ml.linkPreview.longPressMs", 0);
user_pref("browser.ml.linkPreview.outputSentences", 0);
user_pref("browser.ml.linkPreview.recentTypingMs", 0);
user_pref("browser.ml.minimumPhysicalMemory", 0);
user_pref("browser.ml.modelCacheMaxSize", 0);
user_pref("browser.ml.modelCacheTimeout", 0);
user_pref("browser.ml.modelHubRootUrl", "");
user_pref("browser.ml.modelHubUrlTemplate", "");
user_pref("browser.tabs.groups.smart.searchTopicEnabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("extensions.ml.enabled", false);

/////////////////////////////////
/////////////////////////////////
//// firefox recommendations ////
/////////////////////////////////
/////////////////////////////////

// disable recommendation pane in about:addons (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false)

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//// features that are on chrome thats not enabled by default ////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// enable vibrator
user_pref("dom.vibrator.enabled", true);

// enable view transitions
user_pref("dom.viewTransitions.enabled", true);

// enable webshare
user_pref("dom.webshare.enabled", true);

///////////////////////////////////
///////////////////////////////////
//// testing/not in a category ////
///////////////////////////////////
///////////////////////////////////
