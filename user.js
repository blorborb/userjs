// version //
user_pref("borb.user.js", "F143");

//////////////////////////
//////////////////////////
//// security/privacy ////
//////////////////////////
//////////////////////////

// assorted telemetry
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
user_pref("app.normandy.logging.level", 0);
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("extensions.dataCollectionPermissions.enabled", false);
user_pref("nimbus.migrations.after-remote-settings-update", 0);
user_pref("nimbus.migrations.after-store-initialized", 0);
user_pref("nimbus.migrations.init-started", 0);
user_pref("nimbus.profilesdatastoreservice.enabled", false);
user_pref("nimbus.telemetry.targetingContextEnabled", false);
user_pref("nimbus.validation.enabled", false);
user_pref("telemetry.fog.init_on_shutdown", false);
user_pref("toolkit.datacollection.infoURL", "");
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

// disable crash reporting
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReporter.memtest", false);
user_pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 0);
user_pref("browser.tabs.crashReporting.sendReport", false);

// enable force media memory cache
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);

// disable safebrowsing
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

// disable serp telemetry
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);

// force https
user_pref("dom.security.https_only_mode", true);

// enforce smartblock shims
user_pref("extensions.webcompat.enable_shims", true);

// change navigator properties
user_pref("general.buildID.override", "");

// change accept headers to chromes accept headers
user_pref("image.http.accept", "image/avif,image/webp,image/apng,image/*,*/*;q=0.8");
user_pref("network.http.accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");

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

// disable javascript in pdfs
user_pref("pdfjs.enableScripting", false);

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

// use quad9 for dns over https
user_pref("network.trr.custom_uri", "https://dns11.quad9.net/dns-query");
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns11.quad9.net/dns-query");

// enable global privacy control
user_pref("privacy.globalprivacycontrol.enabled", true);

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

// enable webrender
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

//////////////////
//////////////////
//// Built in ////
//////////////////
//////////////////

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

// do not show about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// disable welcome page
user_pref("browser.aboutwelcome.enabled", false);

// disable firefox labs
user_pref("browser.preferences.experimental.hidden", true);
user_pref("browser.preferences.experimental", false);

// disable more from mozilla
user_pref("browser.preferences.moreFromMozilla", false);

// disable check for default browser
user_pref("browser.shell.checkDefaultBrowser", false);

// disable translations
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);
user_pref("browser.translations.select.enable", false);

// disable lockwise
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("signon.backup.enabled", false);
user_pref("signon.capture.inputChanges.enabled", false);
user_pref("signon.formRemovalCapture.enabled", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.improvedPasswordRules.enabled", false);
user_pref("signon.includeOtherSubdomainsInLookup", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
user_pref("signon.management.page.sort", "");
user_pref("signon.management.page.vulnerable-passwords.enabled", false);
user_pref("signon.passwordEditCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.recipes.path", "");
user_pref("signon.recipes.remoteRecipes.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.userInputRequiredToCapture.enabled", false);
user_pref("signon.usernameOnlyForm.enabled", false);

// disable recommendations
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("extensions.getAddons.showPane", false)
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.recommendations.themeRecommendationUrl", "");

// pocket (probably going to be removed soon?)
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.bffApi", "");
user_pref("extensions.pocket.bffRecentSaves", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.oAuthConsumerKeyBff", "");
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.site", "");

// disable mozilla accounts
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
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

// disable relay
user_pref("browser.newtabpage.activity-stream.discoverystream.ohttp.relayURL", "");
user_pref("signon.firefoxRelay.base_url", "");
user_pref("signon.firefoxRelay.feature", "");
user_pref("signon.firefoxRelay.firstOfferVersionFallback", "");
user_pref("signon.firefoxRelay.learn_more_url", "");
user_pref("signon.firefoxRelay.manage_url", "");
user_pref("signon.firefoxRelay.privacy_policy_url", "");
user_pref("signon.firefoxRelay.terms_of_service_url", "");
user_pref("toolkit.shopping.ohttpRelayURL", "");

//////////////////////////////
//////////////////////////////
//// personal preferences ////
//////////////////////////////
//////////////////////////////

// show compact mode
user_pref("browser.compactmode.show", true);

// fades out unloaded tabs
user_pref("browser.tabs.fadeOutUnloadedTabs", true);

// newtabpage/homepage
user_pref("browser.newtabpage.activity-stream.discoverystream.contextualContent.fakespot.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.promoCard.visible", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.cards.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.cards.thumbsUpDown.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.user.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.thumbsUpDown.searchTopsitesCompact", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.topicSelection.onboarding.maybeDisplay", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.inferredpersonalizationfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.listsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabmessaging", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.smartshortcutsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.startupcacheinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", true);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.timerfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.trendingsearchfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.wallpaperfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.weatherfeed", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.customColor.enabled", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.enabled", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.system.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
user_pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
user_pref("browser.newtabpage.activity-stream.weather.locationSearchEnabled", false);
user_pref("browser.newtabpage.activity-stream.widgets.focusTimer.enabled", false);
user_pref("browser.newtabpage.activity-stream.widgets.lists.enabled", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.sponsor-protection.enabled", false);

// set home and new tab page to about:blank
user_pref("browser.startup.homepage", "about:blank");
user_pref("startup.homepage_welcome_url", "about:blank");

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
user_pref("browser.urlbar.suggest.trending", false);

// show https in the urlbar
user_pref("browser.urlbar.trimURLs", false);

// disable warn when quitting
user_pref("browser.warnOnQuitShortcut", false);

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

// hide sidebar
user_pref("sidebar.position_start", false);
user_pref("sidebar.animation.enabled", false);
user_pref("sidebar.nimbus", "");

// disable key for menu bar
user_pref("ui.key.menuAccessKeyFocuses", false);

////////////////////
////////////////////
//// annoyances ////
////////////////////
////////////////////

// make firefox show the close tab button with much more tabs opened
user_pref("browser.tabs.tabClipWidth", 64);
user_pref("browser.tabs.tabMinWidth", 32);

// disable fullscreen warning
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// disable promo in about:* pages
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);

/////////////////
/////////////////
//// useless ////
/////////////////
/////////////////

// ai
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.prompt.prefix", "");
user_pref("browser.ml.chat.prompts.0", "");
user_pref("browser.ml.chat.prompts.1", "");
user_pref("browser.ml.chat.prompts.3", "");
user_pref("browser.ml.chat.prompts.4", "");
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
user_pref("browser.newtabpage.activity-stream.images.smart", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.searchTopicEnabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("extensions.ml.enabled", false);

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//// features that are on other browsers that is not enabled by default ////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

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
