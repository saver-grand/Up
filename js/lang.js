// For old devices!
if( typeof(NodeList.prototype.forEach) === 'undefined' ) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

var i18n = {
'en': {
	'yes': 'yes', 'no': 'no',

	'm3uSource': 'URL to m3u(8)-file',
	'chooseLang': 'Language',
	'usbLoadLabel': 'Playlist from USB',
	'openUsbButton': 'browse USB',
	'localLoadLabel': 'Local m3u(8)-file',
	'openExplorerButton': 'open explorer',
	'openHistoryButton': 'history',
	'downloadButton': 'load playlist',
	'saveButton': 'save and play',
	'deleteButton': 'delete playlist',
	'generalSettingsButton': 'general settings',
	'advancedSettingsButton': 'advanced settings',

	'closeAppHint': 'Do you want to close this app?',
	'hideModalHint': 'Press any button to close this message.',
	'playlistDownloaded': 'Playlist successfully downloaded.<br>%i channels loaded.',
	'channelsLoaded': 'channels',
	'filterNoResults': 'No channels found for the given filter.',

	'redButtonHint': '<span class="red-button">A</span> search',
	'helpHint': 'Press <span class="red-button">A</span>-button to insert demo channel list.<br><br>Press INFO on the remote control at any time for a user guide.',

	'supportContact': 'For more information, visit https://jeromelaliag.link/en',
	'supportContactLinked': 'For more information, visit <a href="https://jeromelaliag.link/en/" target="_blank">https://jeromelaliag.link/en</a>',
	'donate': 'If you like this app, please support me with a little donation.<br>Visit <b class="NOBR">https://jeromelaliag.link</b><br>or via QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (credit card)',
	'downloadM3uStatus': 'Loading playlist. Please wait a moment.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Network connection lost. Please check your network.',
	'checkM3uError': 'Could not load playlist. HTTP status-code: ',
	'checkM3uFileError': 'Not a valid m3u(8)-playlist. Please check file.',
	'checkM3uDownloadError': 'Could not load playlist. Please check the URL.',
	'checkM3uDownloadSizeError': 'The playlist contains too many channels. Please reduce them to max 20.000 channels.',
	'checkM3uTimeoutError': 'Timeout occurred while loading your playlist. Please try again.',
	'errorNoUsbMounted': 'No USB storage detected. Please connect a USB storage device first.',
	'errorNoM3uUrl': 'Please enter a valid URL to your m3u(8) playlist.',
	'channelLoadConnectionFailed': '(Connection to the stream failed.)',
	'channelNotSupportedFile': 'This channel cannot be loaded due to an incompatible format.',
	'errorNoFavouritesYet': 'You don\'t have any favorite channels yet. Press the YELLOW button to favorite a channel.',
	'errorNoPlaylistHistory': 'No playlist in history yet. Please insert a URL in the field below.',

	// Menu
	'searchPlaceholder': 'Search',
	'allChannels': 'All channels',
	'favourites': '⭐ Favorites',
	'groups': 'Groups',
	'channels': 'Channels',
	'settings_menu': 'Settings',
	'epg_menu': 'EPG',
	'guide_menu': 'Guide',

	'guideControlsHeadline': 'Controls',

	// Advanced Settings
	'tabGeneralSettings': 'General Settings',
	'tabAdvancedSettings': 'Advanced Settings',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Volume up/down',
	'channelSetting': 'Channel forward/back',
	'reloadPlaylistOnStart': 'Download playlist on each start',
	'bufferSetting': 'Buffer',
	'customUserAgentSetting': 'User Agent',

	// Channel Settings
	'loading': 'loading...',
	'audioTrack': 'Audio track',
	'subtitleTrack': 'Subtitle track',
	'channelSettings': 'CHANNEL SETTINGS',
	'channelSettingSubtitle': 'Subtitle / Audio',
	'channelSettingFavs': 'Put in Favorites',
	'channelSettingPlayback': 'Show Controls',
	'channelSettingAudioDefault': 'Default',
	'channelSettingSubNoTrack': 'Unavailable',
	'channelSettingSubOff': 'Off',
	'channelSettingResolution': 'Resolution',

	// EPG
	'epgSource': 'EPG source',
	'usePlaylistEpgUrl': 'Use EPG source from your playlist instead?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'EPG grab interval',
	'downloadEpgButton': 'download EPG now',
	'noEpgForChannel': 'No EPG for this channel',
	'noEpgUrlGiven': 'No EPG URL set',
	'epgQuotaExceededError': 'Not enough free space to save EPG data. Please free up some space. For example by deleting not used apps.',
	'epgNotCompatibleWithPlaylist': 'Your playlist is not compatible with this EGP-URL.',
	'epgIsDownloading': 'Loading EPG ...',
	'epgChannelsProcessed': 'channels: ',
	'epgProgramsProcessed': 'programs: ',
	'epgNow': 'Now',
	'epgAfter': 'After',

},
'es': {
	'yes': 'sÃƒÂ­', 'no': 'no',

	'm3uSource': 'URL del archivo m3u(8)',
	'chooseLang': 'Lenguaje',
	'usbLoadLabel': 'Lista de canales desde USB',
	'openUsbButton': 'navegar por USB',
	'localLoadLabel': 'Archivo m3u(8) local',
	'openExplorerButton': 'abierto explorador',
	'openHistoryButton': 'historia',
	'downloadButton': 'descargar archivo',
	'saveButton': 'guardar y jugar',
	'deleteButton': 'eliminar',
	'generalSettingsButton': 'ajustes generales',
	'advancedSettingsButton': 'avanzado',

	'closeAppHint': 'Ã‚Â¿Quieres cerrar esta aplicaciÃƒÂ³n?',
	'hideModalHint': 'Presione cualquier botÃƒÂ³n para cerrar este mensaje.',
	'playlistDownloaded': 'La lista de reproducciÃƒÂ³n se descargÃƒÂ³ correctamente.<br>%i canales cargados.',
	'channelsLoaded': 'canales',
	'filterNoResults': 'No se encontraron canales para el filtro dado.',

	'redButtonHint': '<span class="red-button">A</span> buscar',
	'helpHint': 'Presione el botÃƒÂ³n <span class="red-button">A</span> para insertar la lista de canales de demostraciÃƒÂ³n.<br><br>Presione INFO en el control remoto en cualquier momento para obtener una guÃƒÂ­a del usuario.',

	'supportContact': 'Para mÃƒÂ¡s informaciÃƒÂ³n, visite https://jeromelaliag.link/es',
	'supportContactLinked': 'Para mÃƒÂ¡s informaciÃƒÂ³n, visite <a href="https://jeromelaliag.link/es/" target="_blank">https://jeromelaliag.link/es</a>',
	'donate': 'Si te gusta esta aplicaciÃƒÂ³n, apÃƒÂ³yame con una pequeÃƒÂ±a donaciÃƒÂ³n.<br>Visita <b class="NOBR">https://jeromelaliag.link</b><br>o a travÃƒÂ©s del cÃƒÂ³digo QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (tarjeta de crÃƒÂ©dito)',
	'downloadM3uStatus': 'Cargando lista de reproducciÃƒÂ³n. Por favor, espere un momento.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Se perdiÃƒÂ³ la conexiÃƒÂ³n de red. Por favor, compruebe su red.',
	'checkM3uError': 'No se pudo cargar la lista de reproducciÃƒÂ³n. CÃƒÂ³digo de estado HTTP: ',
	'checkM3uFileError': 'No es una lista de reproducciÃƒÂ³n m3u(8) vÃƒÂ¡lida. Por favor verifique el archivo.',
	'checkM3uDownloadError': 'No se pudo cargar la lista de reproducciÃƒÂ³n. Por favor, compruebe la URL.',
	'checkM3uDownloadSizeError': 'La playlist contiene demasiados canales. RedÃƒÂºzcalos a un mÃƒÂ¡ximo de 20.000 canales.',
	'checkM3uTimeoutError': 'Se agotÃƒÂ³ el tiempo de espera mientras cargaba su lista de reproducciÃƒÂ³n. IntÃƒÂ©ntalo de nuevo.',
	'errorNoUsbMounted': 'No se detectÃƒÂ³ ninguna memoria USB. Primero conecte una memoria USB.',
	'errorNoM3uUrl': 'Ingrese una URL vÃƒÂ¡lida para su lista de reproducciÃƒÂ³n m3u(8).',
	'channelLoadError': 'Este canal no estÃƒÂ¡ disponible en este momento. Por favor, intÃƒÂ©ntelo de nuevo mÃƒÂ¡s tarde.',
	'channelLoadConnectionFailed': '(Error en la conexiÃƒÂ³n a la transmisiÃƒÂ³n).',
	'channelNotSupportedFile': 'Este canal no se puede cargar debido a un formato incompatible.',
	'errorNoFavouritesYet': 'AÃƒÂºn no tienes ningÃƒÂºn canal favorito. Presiona el botÃƒÂ³n amarillo para marcar un canal como favorito.',
	'errorNoPlaylistHistory': 'No hay lista de reproducciÃƒÂ³n en la historia todavÃƒÂ­a. Por favor inserte una URL en el campo de abajo.',

	// Menu
	'searchPlaceholder': 'BÃƒÂºsqueda',
	'allChannels': 'Todos los canales',
	'favourites': 'Ã¢Â­Â Canales favoritos',
	'groups': 'Grupos',
	'channels': 'Canales',
	'settings_menu': 'Ajustes',
	'epg_menu': 'EPG',
	'guide_menu': 'GuÃƒÂ­a',

	'guideControlsHeadline': 'Control',

	// Advanced Settings
	'tabGeneralSettings': 'ConfiguraciÃƒÂ³n general',
	'tabAdvancedSettings': 'ConfiguraciÃƒÂ³n avanzada',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Subir/bajar volumen',
	'channelSetting': 'Canal arriba/abajo',
	'reloadPlaylistOnStart': 'Descargar lista de reproducciÃƒÂ³n en cada inicio',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'cargando...',
	'audioTrack': 'Pista de audio',
	'subtitleTrack': 'Pista de subtÃƒÂ­tulos',
	'channelSettings': 'ConfiguraciÃƒÂ³n de canales',
	'channelSettingSubtitle': 'subtÃƒÂ­tulos / audio',
	'channelSettingFavs': 'poner canal en favoritos',
	'channelSettingPlayback': 'mostrar controles de reproducciÃƒÂ³n',
	'channelSettingAudioDefault': 'pista predeterminada',
	'channelSettingSubNoTrack': 'no disponible',
	'channelSettingSubOff': 'deshabilitar',
	'channelSettingResolution': 'resoluciÃƒÂ³n',

	// EPG
	'epgSource': 'fuente EPG',
	'usePlaylistEpgUrl': 'Ã‚Â¿Usar la fuente EPG de tu lista de reproducciÃƒÂ³n en su lugar?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Intervalo de captura de EPG',
	'downloadEpgButton': 'descargar EPG ahora',
	'noEpgForChannel': 'No hay EPG para este canal',
	'noEpgUrlGiven': 'No se ha establecido ninguna URL de EPG',
	'epgQuotaExceededError': 'No hay suficiente espacio libre para guardar datos EPG. Libere algo de espacio. Por ejemplo, eliminando aplicaciones no utilizadas.',
	'epgNotCompatibleWithPlaylist': 'Su lista de reproducciÃƒÂ³n no es compatible con este EGP-URL.',
	'epgIsDownloading': 'Cargando EPG ...',
	'epgChannelsProcessed': 'canales: ',
	'epgProgramsProcessed': 'programas: ',
	'epgNow': 'Ahora',
	'epgAfter': 'DespuÃƒÂ©s',

},
'it': {
	'yes': 'sÃƒÂ¬', 'no': 'no',

	'm3uSource': 'URL al file m3u(8)',
	'chooseLang': 'Lingua',
	'usbLoadLabel': 'Lista canali da USB',
	'openUsbButton': 'sfoglia USB',
	'localLoadLabel': 'File m3u(8) locale',
	'openExplorerButton': 'apri esploratore',
	'openHistoryButton': 'storia',
	'downloadButton': 'ottieni il file',
	'saveButton': 'salva e gioca',
	'deleteButton': 'cancella',
	'generalSettingsButton': 'impostazioni generali',
	'advancedSettingsButton': 'avanzato',

	'closeAppHint': 'Vuoi chiudere questa app?',
	'hideModalHint': 'Premere un pulsante qualsiasi per chiudere questo messaggio.',
	'playlistDownloaded': 'Playlist scaricata con successo.<br>%i canali caricati.',
	'channelsLoaded': 'canali',
	'filterNoResults': 'Nessun canale trovato per il filtro fornito.',

	'redButtonHint': '<span class="red-button">A</span> ricerca',
	'helpHint': 'Premi il pulsante <span class="red-button">A</span> per inserire l\'elenco dei canali demo.<br><br>Premere INFO sul telecomando in qualsiasi momento per ottenere una guida per l\'utente.',

	'supportContact': 'Per ulteriori informazioni, visita https://jeromelaliag.link/it',
	'supportContactLinked': 'Per ulteriori informazioni, visita <a href="https://jeromelaliag.link/it/" target="_blank">https://jeromelaliag.link/it</a>',
	'donate': 'Se ti piace questa app, supportami con una piccola donazione.<br>Visita <b class="NOBR">https://jeromelaliag.link</b><br>o tramite QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (carta di credito)',
	'downloadM3uStatus': 'Caricamento playlist. Per favore aspetta un momento.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Connessione di rete persa. Si prega di controllare la rete.',
	'checkM3uError': 'Impossibile caricare la playlist. Codice di stato HTTP: ',
	'checkM3uFileError': 'Non ÃƒÂ¨ una playlist m3u(8) valida. Si prega di controllare il file.',
	'checkM3uDownloadError': 'Impossibile caricare la playlist. Si prega di controllare l\'URL.',
	'checkM3uDownloadSizeError': 'La playlist contiene troppi canali. Si prega di ridurli a un massimo di 20.000 canali.',
	'checkM3uTimeoutError': 'Si ÃƒÂ¨ verificato un timeout durante il caricamento della playlist. Per favore riprova.',
	'errorNoUsbMounted': 'Nessuna memoria USB rilevata. Si prega di collegare prima una memoria USB.',
	'errorNoM3uUrl': 'Inserisci un URL valido per la tua playlist m3u(8).',
	'channelLoadError': 'Questo canale non ÃƒÂ¨ al momento disponibile. Per favore riprova piÃƒÂ¹ tardi.',
	'channelLoadConnectionFailed': '(Connessione al flusso non riuscita.)',
	'channelNotSupportedFile': 'Questo canale non puÃƒÂ² essere caricato a causa di un formato incompatibile.',
	'errorNoFavouritesYet': 'Non hai ancora nessun canale preferito. Premi il pulsante giallo per aggiungere un canale ai preferiti.',
	'errorNoPlaylistHistory': 'Ancora nessuna playlist nella cronologia. Inserisci un URL nel campo sottostante.',

	// Menu
	'searchPlaceholder': 'Ricerca',
	'allChannels': 'Tutti i canali',
	'favourites': 'Ã¢Â­Â Preferiti',
	'groups': 'Gruppi',
	'channels': 'Canali',
	'settings_menu': 'Impostazioni',
	'epg_menu': 'EPG',
	'guide_menu': 'Guida',

	'guideControlsHeadline': 'Controllo',

	// Advanced Settings
	'tabGeneralSettings': 'Impostazioni Generali',
	'tabAdvancedSettings': 'Impostazioni avanzate',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Volume su/giÃƒÂ¹',
	'channelSetting': 'Canale su/giÃƒÂ¹',
	'reloadPlaylistOnStart': 'Scarica playlist a ogni avvio',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'caricamento in corso...',
	'audioTrack': 'Traccia audio',
	'subtitleTrack': 'Traccia sottotitoli',
	'channelSettings': 'Impostazioni canale',
	'channelSettingSubtitle': 'sottotitoli / audio',
	'channelSettingFavs': 'metti il canale nei preferiti',
	'channelSettingPlayback': 'mostra i controlli di riproduzione',
	'channelSettingAudioDefault': 'traccia predefinita',
	'channelSettingSubNoTrack': 'non disponibile',
	'channelSettingSubOff': 'disattiva',
	'channelSettingResolution': 'risoluzione',

	// EPG
	'epgSource': 'Fonte EPG',
	'usePlaylistEpgUrl': 'Utilizzare invece la sorgente EPG dalla tua playlist?',
	'epgTimeShift': 'Timeshift EPG',
	'epgGrabInterval': 'Intervallo di presa EPG',
	'downloadEpgButton': 'scarica subito l\'EPG',
	'noEpgForChannel': 'Nessun EPG per questo canale',
	'noEpgUrlGiven': 'Nessun URL EPG impostato',
	'epgQuotaExceededError': 'Spazio libero insufficiente per salvare i dati EPG. Si prega di liberare spazio. Ad esempio eliminando le app non utilizzate.',
	'epgNotCompatibleWithPlaylist': 'La tua playlist non ÃƒÂ¨ compatibile con questo URL EGP.',
	'epgIsDownloading': 'Caricamento dell\'EPG ...',
	'epgChannelsProcessed': 'canali: ',
	'epgProgramsProcessed': 'programmi: ',
	'epgNow': 'Adesso',
	'epgAfter': 'Dopo di che',

},
'fr': {
	'yes': 'oui', 'no': 'non',

	'm3uSource': 'URL vers le fichier m3u(8)',
	'chooseLang': 'Langue',
	'usbLoadLabel': 'Liste des chaÃƒÂ®nes depuis USB',
	'openUsbButton': 'parcourir USB',
	'localLoadLabel': 'Fichier m3u(8) local',
	'openExplorerButton': 'ouvrir l\'explorateur',
	'openHistoryButton': 'l\'histoire',
	'downloadButton': 'Obtenir le fichier',
	'saveButton': 'enregistrer et jouer',
	'deleteButton': 'effacer',
	'generalSettingsButton': 'rÃƒÂ©glages gÃƒÂ©nÃƒÂ©raux',
	'advancedSettingsButton': 'AvancÃƒÂ©e',

	'closeAppHint': 'Voulez-vous fermer cette application?',
	'hideModalHint': 'Appuyez sur n\'importe quel bouton pour fermer ce message.',
	'playlistDownloaded': 'La liste de lecture a ÃƒÂ©tÃƒÂ© tÃƒÂ©lÃƒÂ©chargÃƒÂ©e avec succÃƒÂ¨s.<br>%i chaÃƒÂ®nes chargÃƒÂ©es.',
	'channelsLoaded': 'chaÃƒÂ®nes',
	'filterNoResults': 'Aucune chaÃƒÂ®ne trouvÃƒÂ©e pour le filtre donnÃƒÂ©.',

	'redButtonHint': '<span class="red-button">A</span> chercher',
	'helpHint': 'Appuyez sur le bouton <span class="red-button">A</span> pour insÃƒÂ©rer la liste des chaÃƒÂ®nes de dÃƒÂ©monstration.<br><br>Appuyez sur INFO sur la tÃƒÂ©lÃƒÂ©commande Ãƒ  tout moment pour un guide de l\'utilisateur.',

	'supportContact': 'Pour plus d\'informations, visitez https://jeromelaliag.link/fr',
	'supportContactLinked': 'Pour plus d\'informations, visitez <a href="https://jeromelaliag.link/fr/" target="_blank">https://jeromelaliag.link/fr</a>',
	'donate': 'Si vous aimez cette application, merci de me soutenir avec un petit don.<br>Visitez <b class="NOBR">https://jeromelaliag.link</b><br>ou via QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (carte de crÃƒÂ©dit)',
	'downloadM3uStatus': 'Chargement de la playlist. Patientez s\'il-vous-plait.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Connexion rÃƒÂ©seau perdue. Veuillez vÃƒÂ©rifier votre rÃƒÂ©seau.',
	'checkM3uError': 'Impossible de charger la playlist. Code d\'ÃƒÂ©tat HTTP: ',
	'checkM3uFileError': 'Liste de lecture m3u(8) non valide. Veuillez vÃƒÂ©rifier le fichier.',
	'checkM3uDownloadError': 'Impossible de charger la playlist. Veuillez vÃƒÂ©rifier l\'URL.',
	'checkM3uDownloadSizeError': 'La playlist contient trop de canaux. Veuillez les rÃƒÂ©duire Ãƒ  20.000 canaux maximum.',
	'checkM3uTimeoutError': 'Un dÃƒÂ©lai d\'attente s\'est produit lors du chargement de votre playlist. Veuillez rÃƒÂ©essayer.',
	'errorNoUsbMounted': 'Aucune mÃƒÂ©moire USB dÃƒÂ©tectÃƒÂ©e. Veuillez d\'abord connecter une mÃƒÂ©moire USB.',
	'errorNoM3uUrl': 'Veuillez saisir une URL valide vers votre liste de lecture m3u(8).',
	'channelLoadError': 'Cette chaÃƒÂ®ne n\'est pas disponible pour le moment. Veuillez rÃƒÂ©essayer plus tard.',
	'channelLoadConnectionFailed': '(La connexion au flux a ÃƒÂ©chouÃƒÂ©.)',
	'channelNotSupportedFile': 'Impossible de charger cette chaÃƒÂ®ne en raison d\'un format incompatible.',
	'errorNoFavouritesYet': 'Vous n\'avez pas encore de chaÃƒÂ®nes prÃƒÂ©fÃƒÂ©rÃƒÂ©es. Appuyez sur le bouton jaune pour ajouter une chaÃƒÂ®ne Ãƒ  vos favoris.',
	'errorNoPlaylistHistory': 'Pas encore de playlist dans l\'historique. Veuillez insÃƒÂ©rer une URL dans le champ ci-dessous.',

	// Menu
	'searchPlaceholder': 'Recherche',
	'allChannels': 'Toutes les chaÃƒÂ®nes',
	'favourites': 'Ã¢Â­Â Favoris',
	'groups': 'Groupes',
	'channels': 'Canaux',
	'settings_menu': 'RÃƒÂ©glages',
	'epg_menu': 'EPG',
	'guide_menu': 'Guide',

	'guideControlsHeadline': 'ContrÃƒÂ´le',

	// Advanced Settings
	'tabGeneralSettings': 'ParamÃƒÂ¨tres gÃƒÂ©nÃƒÂ©raux',
	'tabAdvancedSettings': 'ParamÃƒÂ¨tres avancÃƒÂ©s',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Volume haut/bas',
	'channelSetting': 'ChaÃƒÂ®ne haut/bas',
	'reloadPlaylistOnStart': 'TÃƒÂ©lÃƒÂ©charger la playlist Ãƒ  chaque dÃƒÂ©marrage',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'chargement...',
	'audioTrack': 'Piste audio',
	'subtitleTrack': 'Piste de sous-titres',
	'channelSettings': 'ParamÃƒÂ¨tres de la chaÃƒÂ®ne',
	'channelSettingSubtitle': 'sous-titre / audio',
	'channelSettingFavs': 'mettre la chaÃƒÂ®ne en favoris',
	'channelSettingPlayback': 'afficher les commandes de lecture',
	'channelSettingAudioDefault': 'piste par dÃƒÂ©faut',
	'channelSettingSubNoTrack': 'non disponible',
	'channelSettingSubOff': 'dÃƒÂ©sactiver',
	'channelSettingResolution': 'rÃƒÂ©solution',

	// EPG
	'epgSource': 'Source EPG',
	'usePlaylistEpgUrl': 'Utiliser la source EPG de votre liste de lecture Ãƒ  la placeÃ‚ ?',
	'epgTimeShift': 'DÃƒÂ©calage EPG',
	'epgGrabInterval': 'Intervalle de capture EPG',
	'downloadEpgButton': 'tÃƒÂ©lÃƒÂ©charger EPG maintenant',
	'noEpgForChannel': 'Pas d\'EPG pour cette chaÃƒÂ®ne',
	'noEpgUrlGiven': 'Aucune URL EPG dÃƒÂ©finie',
	'epgQuotaExceededError': 'Espace libre insuffisant pour enregistrer les donnÃƒÂ©es EPG. Veuillez libÃƒÂ©rer de l\'espace. Par exemple en supprimant les applications non utilisÃƒÂ©es.',
	'epgNotCompatibleWithPlaylist': 'Votre liste de lecture n\'est pas compatible avec cette URL EGP.',
	'epgIsDownloading': 'Chargement de l\'EPG ...',
	'epgChannelsProcessed': 'canaux: ',
	'epgProgramsProcessed': 'programmes: ',
	'epgNow': 'Maintenant',
	'epgAfter': 'AprÃƒÂ¨s cela',

},
'de': {
	'yes': 'ja', 'no': 'nein',

	'm3uSource': 'URL zur m3u(8)-Datei',
	'chooseLang': 'Spache',
	'usbLoadLabel': 'Playlist von USB laden',
	'openUsbButton': 'USB durchsuchen',
	'localLoadLabel': 'Lokale m3u(8)-Datei',
	'openExplorerButton': 'Explorer ÃƒÂ¶ffnen',
	'openHistoryButton': 'Verlauf',
	'downloadButton': 'Datei laden',
	'saveButton': 'abspielen',
	'deleteButton': 'lÃƒÂ¶schen',
	'generalSettingsButton': 'Haupteinstellungen',
	'advancedSettingsButton': 'Fortgeschritten',

	'closeAppHint': 'MÃƒÂ¶chtest du die APP beenden?',
	'hideModalHint': 'DrÃƒÂ¼cke eine beliebige Taste um diesen Hinweis zu schlieÃƒÅ¸en.',
	'playlistDownloaded': 'Die Playliste wurde erfolgreich heruntergeladen.<br>%i KanÃƒÂ¤le wurden geladen.',
	'channelsLoaded': 'KanÃƒÂ¤le',
	'filterNoResults': 'Keine KanÃƒÂ¤le fÃƒÂ¼r den angegebenen Filter gefunden.',

	'redButtonHint': '<span class="red-button">A</span> suchen',
	'helpHint': 'DrÃƒÂ¼cke <span class="red-button">A</span> um eine Demo Kanalliste einzufÃƒÂ¼gen.<br><br>DrÃƒÂ¼cke jederzeit INFO auf der Fernbedienung fÃƒÂ¼r eine ausfÃƒÂ¼hrliche Bedienungsanleitung.',

	'supportContact': 'Mehr Informationen unter https://jeromelaliag.link/de',
	'supportContactLinked': 'Mehr Informationen unter <a href="https://jeromelaliag.link/de/" target="_blank">https://jeromelaliag.link/de</a>',
	'donate': 'Wenn dir diese App gefÃƒÂ¤llt, bitte unterstÃƒÂ¼tze mich mit einer kleinen Spende.<br>Besuche <b class="NOBR">https://jeromelaliag.link</b><br>oder ÃƒÂ¼ber QR-Code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (Kreditkarte)',
	'downloadM3uStatus': 'Playlist wird geladen. Bitte warte einen Moment.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Kein Internetzugang. Bitte prÃƒÂ¼fe dein Netzwerk.',
	'checkM3uError': 'Playlist konnte nicht geladen werden. HTTP Status-Code: ',
	'checkM3uFileError': 'Keine gÃƒÂ¼ltige m3u(8)-Playlist. Bitte Datei prÃƒÂ¼fen.',
	'checkM3uDownloadError': 'Playlist konnte nicht geladen werden. Bitte URL prÃƒÂ¼fen.',
	'checkM3uDownloadSizeError': 'Die Playlist enthÃƒÂ¤lt zu viele KanÃƒÂ¤le. Bitte reduziere diese auf maximal 20.000 KanÃƒÂ¤le.',
	'checkM3uTimeoutError': 'ZeitÃƒÂ¼berschreitung beim Laden der Playlist. Bitte erneut versuchen.',
	'errorNoUsbMounted': 'Kein USB Speicher erkannt. Bitte schlieÃƒÅ¸e zuerst ein USB Speicher an.',
	'errorNoM3uUrl': 'Bitte gebe eine gÃƒÂ¼ltige URL zu deiner m3u(8)-Playlist an.',
	'channelLoadError': 'Dieser Kanal ist zurzeit nicht erreichbar. Bitte versuche es spÃƒÂ¤ter nochmal.',
	'channelLoadConnectionFailed': '(Verbindung zum Stream fehlgeschlagen.)',
	'channelNotSupportedFile': 'Dieser Kanal kann wegen eines inkompatiblen Formats nicht geladen werden.',
	'errorNoFavouritesYet': 'Du hast noch keine Kanal-Favoriten. DrÃƒÂ¼cke die gelbe Taste um ein Kanal zu favorisieren.',
	'errorNoPlaylistHistory': 'Noch keine Playliste im Verlauf. Bitte gebe eine URL in das Feld unten ein.',

	// Menu
	'searchPlaceholder': 'Suche',
	'allChannels': 'Alle KanÃƒÂ¤le',
	'favourites': 'Ã¢Â­Â Favoriten',
	'groups': 'Gruppen',
	'channels': 'KanÃƒÂ¤le',
	'settings_menu': 'Einstellungen',
	'epg_menu': 'EPG',
	'guide_menu': 'Anleitung',

	'guideControlsHeadline': 'Steuerung',

	// Advanced Settings
	'tabGeneralSettings': 'Haupteinstellungen',
	'tabAdvancedSettings': 'Fortgeschritten',
	'chooseMousewheel': 'Mausrad',
	'volumeSetting': 'LautstÃƒÂ¤rke leiser/lauter',
	'channelSetting': 'Kanal vor/zurÃƒÂ¼ck',
	'reloadPlaylistOnStart': 'Playlist bei jedem Start herunterladen',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'wird geladen...',
	'audioTrack': 'Audio Tonspur',
	'subtitleTrack': 'Untertitel',
	'channelSettings': 'Kanaleinstellungen',
	'channelSettingSubtitle': 'Untertitel / Audio',
	'channelSettingFavs': 'Kanal zu Favoriten hinzufÃƒÂ¼gen',
	'channelSettingPlayback': 'Wiedergabesteuerung anzeigen',
	'channelSettingAudioDefault': 'Standard',
	'channelSettingSubNoTrack': 'nicht verfÃƒÂ¼gbar',
	'channelSettingSubOff': 'deaktivieren',
	'channelSettingResolution': 'AuflÃƒÂ¶sung',

	// EPG
	'epgSource': 'EPG Quelle',
	'usePlaylistEpgUrl': 'EPG Quelle aus der Playlist stattdessen verwenden?',
	'epgTimeShift': 'EPG Zeitversatz',
	'epgGrabInterval': 'EPG Aktualisierungsintervall',
	'downloadEpgButton': 'EPG jetzt laden',
	'noEpgForChannel': 'Kein EPG fÃƒÂ¼r diesen Kanal',
	'noEpgUrlGiven': 'Keine EPG URL konfiguriert',
	'epgQuotaExceededError': 'Nicht genÃƒÂ¼gend freier Speicherplatz zum Speichern von EPG-Daten vorhanden. Bitte gebe etwas Platz frei. Zum Beispiel durch das LÃƒÂ¶schen nicht genutzter Apps.',
	'epgNotCompatibleWithPlaylist': 'Deine Playlist ist nicht kompatiblel mit dieser EGP-URL.',
	'epgIsDownloading': 'EPG wird geladen...',
	'epgChannelsProcessed': 'KanÃƒÂ¤le: ',
	'epgProgramsProcessed': 'Programme: ',
	'epgNow': 'Jetzt',
	'epgAfter': 'Danach',

},
'ru': {
	'yes': 'ÃÂ´ÃÂ°', 'no': 'ÃÂ½ÃÂµÃ‘â€š',

	'm3uSource': 'URL-ÃÂ°ÃÂ´Ã‘â‚¬ÃÂµÃ‘Â  m3u(8) Ã‘â€žÃÂ°ÃÂ¹ÃÂ»ÃÂ°',
	'chooseLang': 'Ã‘ÂÃÂ·Ã‘â€¹ÃÂº',
	'usbLoadLabel': 'Ãâ€”ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂ¸Ã‘â€šÃ‘Å’ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š Ã‘Â USB',
	'openUsbButton': 'ÃÂ¿Ã‘â‚¬ÃÂ¾Ã‘ÂÃÂ¼ÃÂ¾Ã‘â€šÃ‘â‚¬ÃÂµÃ‘â€šÃ‘Å’ USB',
	'localLoadLabel': 'Ãâ€ºÃÂ¾ÃÂºÃÂ°ÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹ÃÂ¹ Ã‘â€žÃÂ°ÃÂ¹ÃÂ» m3u(8)',
	'openExplorerButton': 'ÃÂ¤ÃÂ°ÃÂ¹ÃÂ»ÃÂ¾ÃÂ²Ã‘â€¹ÃÂ¹ ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ²ÃÂ¾ÃÂ´ÃÂ½ÃÂ¸ÃÂº',
	'openHistoryButton': 'ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘Â',
	'downloadButton': 'ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂ¸Ã‘â€šÃ‘Å’ Ã‘â€žÃÂ°ÃÂ¹ÃÂ»',
	'saveButton': 'Ã‘ÂÃ‘â€šÃÂ°Ã‘â‚¬Ã‘â€šÃÂ¾ÃÂ²ÃÂ°Ã‘â€šÃ‘Å’',
	'deleteButton': 'Ã‘Æ’ÃÂ´ÃÂ°ÃÂ»Ã‘ÂÃ‘â€šÃ‘Å’',
	'generalSettingsButton': 'ÃÅ¾ÃÂ±Ã‘â€°ÃÂ¸ÃÂµ ÃÂ½ÃÂ°Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ¹ÃÂºÃÂ¸',
	'advancedSettingsButton': 'Ãâ€ÃÂ¾ÃÂ¿ÃÂ¾ÃÂ»ÃÂ½ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹ÃÂµ ÃÂ½ÃÂ°Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ¹ÃÂºÃÂ¸',

	'closeAppHint': 'Ãâ€™Ã‘â€¹ Ã‘â€¦ÃÂ¾Ã‘â€šÃÂ¸Ã‘â€šÃÂµ ÃÂ·ÃÂ°ÃÂºÃ‘â‚¬Ã‘â€¹Ã‘â€šÃ‘Å’ Ã‘ÂÃ‘â€šÃÂ¾ ÃÂ¿Ã‘â‚¬ÃÂ¸ÃÂ»ÃÂ¾ÃÂ¶ÃÂµÃÂ½ÃÂ¸ÃÂµ?',
	'hideModalHint': 'ÃÂÃÂ°ÃÂ¶ÃÂ¼ÃÂ¸Ã‘â€šÃÂµ ÃÂ»Ã‘Å½ÃÂ±Ã‘Æ’Ã‘Å½ ÃÂºÃÂ»ÃÂ°ÃÂ²ÃÂ¸Ã‘Ë†Ã‘Æ’, Ã‘â€¡Ã‘â€šÃÂ¾ÃÂ±Ã‘â€¹ ÃÂ·ÃÂ°ÃÂºÃ‘â‚¬Ã‘â€¹Ã‘â€šÃ‘Å’ Ã‘ÂÃ‘â€šÃÂ¾ Ã‘Æ’ÃÂ²ÃÂµÃÂ´ÃÂ¾ÃÂ¼ÃÂ»ÃÂµÃÂ½ÃÂ¸ÃÂµ.',
	'playlistDownloaded': 'ÃÅ¸ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š Ã‘Æ’Ã‘ÂÃÂ¿ÃÂµÃ‘Ë†ÃÂ½ÃÂ¾ ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ¶ÃÂµÃÂ½.<br>Ãâ€”ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ¶ÃÂµÃÂ½ÃÂ¾ %i ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ².',
	'channelsLoaded': 'ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ²',
	'filterNoResults': 'ÃÂÃÂµÃ‘â€š ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ², Ã‘ÂÃÂ¾ÃÂ¾Ã‘â€šÃÂ²ÃÂµÃ‘â€šÃ‘ÂÃ‘â€šÃÂ²Ã‘Æ’Ã‘Å½Ã‘â€°ÃÂ¸Ã‘â€¦ Ã‘Æ’ÃÂºÃÂ°ÃÂ·ÃÂ°ÃÂ½ÃÂ½ÃÂ¾ÃÂ¼Ã‘Æ’ Ã‘â€žÃÂ¸ÃÂ»Ã‘Å’Ã‘â€šÃ‘â‚¬Ã‘Æ’.',

	'redButtonHint': '<span class="red-button">A</span> ÃÅ¸ÃÂ¾ÃÂ¸Ã‘ÂÃÂº',
	'helpHint': 'ÃÂÃÂ°ÃÂ¶ÃÂ¼ÃÂ¸Ã‘â€šÃÂµ ÃÂºÃÂ½ÃÂ¾ÃÂ¿ÃÂºÃ‘Æ’ <span class="red-button">A</span>, Ã‘â€¡Ã‘â€šÃÂ¾ÃÂ±Ã‘â€¹ ÃÂ²Ã‘ÂÃ‘â€šÃÂ°ÃÂ²ÃÂ¸Ã‘â€šÃ‘Å’ Ã‘ÂÃÂ¿ÃÂ¸Ã‘ÂÃÂ¾ÃÂº ÃÂ´ÃÂµÃÂ¼ÃÂ¾ÃÂ½Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ°Ã‘â€ ÃÂ¸ÃÂ¾ÃÂ½ÃÂ½Ã‘â€¹Ã‘â€¦ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ².<br><br>ÃÂÃÂ°ÃÂ¶ÃÂ¼ÃÂ¸Ã‘â€šÃÂµ INFO ÃÂ½ÃÂ° ÃÂ¿Ã‘Æ’ÃÂ»Ã‘Å’Ã‘â€šÃÂµ ÃÂ´ÃÂ¸Ã‘ÂÃ‘â€šÃÂ°ÃÂ½Ã‘â€ ÃÂ¸ÃÂ¾ÃÂ½ÃÂ½ÃÂ¾ÃÂ³ÃÂ¾ Ã‘Æ’ÃÂ¿Ã‘â‚¬ÃÂ°ÃÂ²ÃÂ»ÃÂµÃÂ½ÃÂ¸Ã‘Â ÃÂ² ÃÂ»Ã‘Å½ÃÂ±ÃÂ¾ÃÂ¹ ÃÂ¼ÃÂ¾ÃÂ¼ÃÂµÃÂ½Ã‘â€š, Ã‘â€¡Ã‘â€šÃÂ¾ÃÂ±Ã‘â€¹ ÃÂ¾Ã‘â€šÃÂºÃ‘â‚¬Ã‘â€¹Ã‘â€šÃ‘Å’ Ã‘â‚¬Ã‘Æ’ÃÂºÃÂ¾ÃÂ²ÃÂ¾ÃÂ´Ã‘ÂÃ‘â€šÃÂ²ÃÂ¾ ÃÂ¿ÃÂ¾ÃÂ»Ã‘Å’ÃÂ·ÃÂ¾ÃÂ²ÃÂ°Ã‘â€šÃÂµÃÂ»Ã‘Â.',

	'supportContact': 'Ãâ€ÃÂ»Ã‘Â ÃÂ¿ÃÂ¾ÃÂ»Ã‘Æ’Ã‘â€¡ÃÂµÃÂ½ÃÂ¸Ã‘Â ÃÂ´ÃÂ¾ÃÂ¿ÃÂ¾ÃÂ»ÃÂ½ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½ÃÂ¾ÃÂ¹ ÃÂ¸ÃÂ½Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€ ÃÂ¸ÃÂ¸ ÃÂ¿ÃÂ¾Ã‘ÂÃÂµÃ‘â€šÃÂ¸Ã‘â€šÃÂµ https://jeromelaliag.link/ru',
	'supportContactLinked': 'Ãâ€ÃÂ»Ã‘Â ÃÂ¿ÃÂ¾ÃÂ»Ã‘Æ’Ã‘â€¡ÃÂµÃÂ½ÃÂ¸Ã‘Â ÃÂ´ÃÂ¾ÃÂ¿ÃÂ¾ÃÂ»ÃÂ½ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½ÃÂ¾ÃÂ¹ ÃÂ¸ÃÂ½Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€ ÃÂ¸ÃÂ¸ ÃÂ¿ÃÂ¾Ã‘ÂÃÂµÃ‘â€šÃÂ¸Ã‘â€šÃÂµ <a href="https://jeromelaliag.link/ru/" target="_blank">https://jeromelaliag.link/ru</a>',
	'donate': 'Ãâ€¢Ã‘ÂÃÂ»ÃÂ¸ ÃÂ²ÃÂ°ÃÂ¼ ÃÂ½Ã‘â‚¬ÃÂ°ÃÂ²ÃÂ¸Ã‘â€šÃ‘ÂÃ‘Â Ã‘ÂÃ‘â€šÃÂ¾ ÃÂ¿Ã‘â‚¬ÃÂ¸ÃÂ»ÃÂ¾ÃÂ¶ÃÂµÃÂ½ÃÂ¸ÃÂµ, ÃÂ¿ÃÂ¾ÃÂ´ÃÂ´ÃÂµÃ‘â‚¬ÃÂ¶ÃÂ¸Ã‘â€šÃÂµ ÃÂ¼ÃÂµÃÂ½Ã‘Â ÃÂ½ÃÂµÃÂ±ÃÂ¾ÃÂ»Ã‘Å’Ã‘Ë†ÃÂ¸ÃÂ¼ ÃÂ¿ÃÂ¾ÃÂ¶ÃÂµÃ‘â‚¬Ã‘â€šÃÂ²ÃÂ¾ÃÂ²ÃÂ°ÃÂ½ÃÂ¸ÃÂµÃÂ¼.<br>ÃÅ¸ÃÂ¾Ã‘ÂÃÂµÃ‘â€šÃÂ¸Ã‘â€šÃÂµ <b class="NOBR">https://jeromelaliag.link</b><br>ÃÂ¸ÃÂ»ÃÂ¸ Ã‘Â ÃÂ¿ÃÂ¾ÃÂ¼ÃÂ¾Ã‘â€°Ã‘Å’Ã‘Å½ QR-ÃÂºÃÂ¾ÃÂ´ÃÂ°.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (ÃÂºÃ‘â‚¬ÃÂµÃÂ´ÃÂ¸Ã‘â€šÃÂ½ÃÂ°Ã‘Â ÃÂºÃÂ°Ã‘â‚¬Ã‘â€šÃÂ°)',
	'downloadM3uStatus': 'ÃÅ¸ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ¶ÃÂ°ÃÂµÃ‘â€šÃ‘ÂÃ‘Â. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¿ÃÂ¾ÃÂ´ÃÂ¾ÃÂ¶ÃÂ´ÃÂ¸Ã‘â€šÃÂµ ÃÂ½ÃÂµÃ‘ÂÃÂºÃÂ¾ÃÂ»Ã‘Å’ÃÂºÃÂ¾ Ã‘ÂÃÂµÃÂºÃ‘Æ’ÃÂ½ÃÂ´.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'ÃÅ¸ÃÂ¾Ã‘â€šÃÂµÃ‘â‚¬Ã‘ÂÃÂ½ÃÂ¾ Ã‘ÂÃÂµÃ‘â€šÃÂµÃÂ²ÃÂ¾ÃÂµ Ã‘ÂÃÂ¾ÃÂµÃÂ´ÃÂ¸ÃÂ½ÃÂµÃÂ½ÃÂ¸ÃÂµ. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ²ÃÂµÃ‘â‚¬Ã‘Å’Ã‘â€šÃÂµ Ã‘ÂÃÂ²ÃÂ¾Ã‘Å½ Ã‘ÂÃÂµÃ‘â€šÃ‘Å’.',
	'checkM3uError': 'ÃÂÃÂµ Ã‘Æ’ÃÂ´ÃÂ°ÃÂ»ÃÂ¾Ã‘ÂÃ‘Å’ ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂ¸Ã‘â€šÃ‘Å’ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š. ÃÅ¡ÃÂ¾ÃÂ´ Ã‘ÂÃÂ¾Ã‘ÂÃ‘â€šÃÂ¾Ã‘ÂÃÂ½ÃÂ¸Ã‘Â HTTP: ',
	'checkM3uFileError': 'ÃÂÃÂµÃÂ²ÃÂµÃ‘â‚¬ÃÂ½Ã‘â€¹ÃÂ¹ m3u(8)-ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ²ÃÂµÃ‘â‚¬Ã‘Å’Ã‘â€šÃÂµ Ã‘â€žÃÂ°ÃÂ¹ÃÂ».',
	'checkM3uDownloadError': 'ÃÂÃÂµ Ã‘Æ’ÃÂ´ÃÂ°ÃÂ»ÃÂ¾Ã‘ÂÃ‘Å’ ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂ¸Ã‘â€šÃ‘Å’ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ²ÃÂµÃ‘â‚¬Ã‘Å’Ã‘â€šÃÂµ URL-ÃÂ°ÃÂ´Ã‘â‚¬ÃÂµÃ‘Â',
	'checkM3uDownloadSizeError': 'Ãâ€™ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂµ Ã‘ÂÃÂ»ÃÂ¸Ã‘Ë†ÃÂºÃÂ¾ÃÂ¼ ÃÂ¼ÃÂ½ÃÂ¾ÃÂ³ÃÂ¾ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ². ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, Ã‘Æ’ÃÂ¼ÃÂµÃÂ½Ã‘Å’Ã‘Ë†ÃÂ¸Ã‘â€šÃÂµ ÃÂ¸Ã‘â€¦ ÃÂ´ÃÂ¾ 20.000 ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ².',
	'checkM3uTimeoutError': 'Ãâ€™Ã‘â‚¬ÃÂµÃÂ¼Ã‘Â ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂºÃÂ¸ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ° ÃÂ¸Ã‘ÂÃ‘â€šÃÂµÃÂºÃÂ»ÃÂ¾. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¿ÃÂ¾ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ±Ã‘Æ’ÃÂ¹Ã‘â€šÃÂµ ÃÂµÃ‘â€°ÃÂµ Ã‘â‚¬ÃÂ°ÃÂ·.',
	'errorNoUsbMounted': 'USB-ÃÂ½ÃÂ°ÃÂºÃÂ¾ÃÂ¿ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ ÃÂ½ÃÂµ Ã‘â‚¬ÃÂ°Ã‘ÂÃÂ¿ÃÂ¾ÃÂ·ÃÂ½ÃÂ°ÃÂµÃ‘â€šÃ‘ÂÃ‘Â. ÃÂ¡ÃÂ½ÃÂ°Ã‘â€¡ÃÂ°ÃÂ»ÃÂ° ÃÂ¿ÃÂ¾ÃÂ´ÃÂºÃÂ»Ã‘Å½Ã‘â€¡ÃÂ¸Ã‘â€šÃÂµ USB-ÃÂ½ÃÂ°ÃÂºÃÂ¾ÃÂ¿ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’.',
	'errorNoM3uUrl': 'ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ²ÃÂ²ÃÂµÃÂ´ÃÂ¸Ã‘â€šÃÂµ URL ÃÂ²ÃÂ°Ã‘Ë†ÃÂµÃÂ³ÃÂ¾ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ° m3u(8).',
	'channelLoadError': 'ÃÂ­Ã‘â€šÃÂ¾Ã‘â€š ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» Ã‘ÂÃÂµÃÂ¹Ã‘â€¡ÃÂ°Ã‘Â ÃÂ½ÃÂµÃÂ´ÃÂ¾Ã‘ÂÃ‘â€šÃ‘Æ’ÃÂ¿ÃÂµÃÂ½. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¿ÃÂ¾ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ±Ã‘Æ’ÃÂ¹Ã‘â€šÃÂµ ÃÂ¿ÃÂ¾ÃÂ·ÃÂ¶ÃÂµ.',
	'channelLoadConnectionFailed': '(ÃÂÃÂµ Ã‘Æ’ÃÂ´ÃÂ°ÃÂ»ÃÂ¾Ã‘ÂÃ‘Å’ ÃÂ¿ÃÂ¾ÃÂ´ÃÂºÃÂ»Ã‘Å½Ã‘â€¡ÃÂ¸Ã‘â€šÃ‘Å’Ã‘ÂÃ‘Â ÃÂº ÃÂ¿ÃÂ¾Ã‘â€šÃÂ¾ÃÂºÃ‘Æ’.)',
	'channelNotSupportedFile': 'ÃÂ­Ã‘â€šÃÂ¾Ã‘â€š ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ½ÃÂµ ÃÂ¼ÃÂ¾ÃÂ¶ÃÂµÃ‘â€š ÃÂ±Ã‘â€¹Ã‘â€šÃ‘Å’ ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ¶ÃÂµÃÂ½ ÃÂ¸ÃÂ·-ÃÂ·ÃÂ° ÃÂ½ÃÂµÃ‘ÂÃÂ¾ÃÂ²ÃÂ¼ÃÂµÃ‘ÂÃ‘â€šÃÂ¸ÃÂ¼ÃÂ¾ÃÂ³ÃÂ¾ Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€šÃÂ°.',
	'errorNoFavouritesYet': 'ÃÂ£ ÃÂ²ÃÂ°Ã‘Â ÃÂ¿ÃÂ¾ÃÂºÃÂ° ÃÂ½ÃÂµÃ‘â€š ÃÂ¸ÃÂ·ÃÂ±Ã‘â‚¬ÃÂ°ÃÂ½ÃÂ½Ã‘â€¹Ã‘â€¦ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¾ÃÂ². ÃÂÃÂ°ÃÂ¶ÃÂ¼ÃÂ¸Ã‘â€šÃÂµ Ãâ€“Ãâ€¢Ãâ€ºÃÂ¢ÃÂ£ÃÂ® ÃÂºÃÂ½ÃÂ¾ÃÂ¿ÃÂºÃ‘Æ’, Ã‘â€¡Ã‘â€šÃÂ¾ÃÂ±Ã‘â€¹ ÃÂ´ÃÂ¾ÃÂ±ÃÂ°ÃÂ²ÃÂ¸Ã‘â€šÃ‘Å’ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ² ÃÂ¸ÃÂ·ÃÂ±Ã‘â‚¬ÃÂ°ÃÂ½ÃÂ½ÃÂ¾ÃÂµ.',
	'errorNoPlaylistHistory': 'ÃÅ¸ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ° ÃÂ² ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾Ã‘â‚¬ÃÂ¸ÃÂ¸ ÃÂ¿ÃÂ¾ÃÂºÃÂ° ÃÂ½ÃÂµÃ‘â€š. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ²Ã‘ÂÃ‘â€šÃÂ°ÃÂ²Ã‘Å’Ã‘â€šÃÂµ URL ÃÂ² ÃÂ¿ÃÂ¾ÃÂ»ÃÂµ ÃÂ½ÃÂ¸ÃÂ¶ÃÂµ.',

	// Menu
	'searchPlaceholder': 'ÃÅ¸ÃÂ¾ÃÂ¸Ã‘ÂÃÂº',
	'allChannels': 'Ãâ€™Ã‘ÂÃÂµ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€¹',
	'favourites': 'Ã¢Â­Â ÃÂ¸ÃÂ·ÃÂ±Ã‘â‚¬ÃÂ°ÃÂ½ÃÂ½ÃÂ¾ÃÂµ',
	'groups': 'ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ¿ÃÂ¿Ã‘â€¹',
	'channels': 'ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€¹',
	'settings_menu': 'ÃÂÃÂ°Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ¹ÃÂºÃÂ¸',
	'epg_menu': 'Ã‘â€šÃÂµÃÂ»ÃÂµÃÂ³ÃÂ¸ÃÂ´',
	'guide_menu': 'Ãâ€œÃÂ¸ÃÂ´',

	'guideControlsHeadline': 'ÃÅ¡ÃÂ»ÃÂ°ÃÂ²ÃÂ¸Ã‘Ë†ÃÂ¸',

	// Advanced Settings
	'tabGeneralSettings': 'ÃÅ¾ÃÂ±Ã‘â€°ÃÂ¸ÃÂµ ÃÂ½ÃÂ°Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ¹ÃÂºÃÂ¸',
	'tabAdvancedSettings': 'Ãâ€ÃÂ¾ÃÂ¿ÃÂ¾ÃÂ»ÃÂ½ÃÂ¸Ã‘â€šÃÂµÃÂ»Ã‘Å’ÃÂ½Ã‘â€¹ÃÂµ ÃÂ½ÃÂ°Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ¹ÃÂºÃÂ¸',
	'chooseMousewheel': 'ÃÅ¡ÃÂ¾ÃÂ»ÃÂµÃ‘ÂÃÂ¾ ÃÂ¼Ã‘â€¹Ã‘Ë†ÃÂ¸',
	'volumeSetting': 'ÃÂ£ÃÂ²ÃÂµÃÂ»ÃÂ¸Ã‘â€¡ÃÂµÃÂ½ÃÂ¸ÃÂµ/Ã‘Æ’ÃÂ¼ÃÂµÃÂ½Ã‘Å’Ã‘Ë†ÃÂµÃÂ½ÃÂ¸ÃÂµ ÃÂ³Ã‘â‚¬ÃÂ¾ÃÂ¼ÃÂºÃÂ¾Ã‘ÂÃ‘â€šÃÂ¸',
	'channelSetting': 'ÃÅ¡ÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ²ÃÂ²ÃÂµÃ‘â‚¬Ã‘â€¦/ÃÂ²ÃÂ½ÃÂ¸ÃÂ·',
	'reloadPlaylistOnStart': 'Ãâ€”ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ¶ÃÂ°Ã‘â€šÃ‘Å’ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ¿Ã‘â‚¬ÃÂ¸ ÃÂºÃÂ°ÃÂ¶ÃÂ´ÃÂ¾ÃÂ¼ ÃÂ·ÃÂ°ÃÂ¿Ã‘Æ’Ã‘ÂÃÂºÃÂµ',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'ÃÂ·ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂºÃÂ°...',
	'audioTrack': 'ÃÂÃ‘Æ’ÃÂ´ÃÂ¸ÃÂ¾ÃÂ´ÃÂ¾Ã‘â‚¬ÃÂ¾ÃÂ¶ÃÂºÃÂ°',
	'subtitleTrack': 'Ãâ€ÃÂ¾Ã‘â‚¬ÃÂ¾ÃÂ¶ÃÂºÃÂ° Ã‘ÂÃ‘Æ’ÃÂ±Ã‘â€šÃÂ¸Ã‘â€šÃ‘â‚¬ÃÂ¾ÃÂ²',
	'channelSettings': 'ÃÂÃÂ°Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ¾ÃÂ¹ÃÂºÃÂ¸ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ°',
	'channelSettingSubtitle': 'Ã‘ÂÃ‘Æ’ÃÂ±Ã‘â€šÃÂ¸Ã‘â€šÃ‘â‚¬Ã‘â€¹ / ÃÂ°Ã‘Æ’ÃÂ´ÃÂ¸ÃÂ¾',
	'channelSettingFavs': 'ÃÂ¿ÃÂ¾ÃÂ¼ÃÂµÃ‘ÂÃ‘â€šÃÂ¸Ã‘â€šÃ‘Å’ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ² ÃÂ¸ÃÂ·ÃÂ±Ã‘â‚¬ÃÂ°ÃÂ½ÃÂ½ÃÂ¾ÃÂµ',
	'channelSettingPlayback': 'ÃÂ¿ÃÂ¾ÃÂºÃÂ°ÃÂ·ÃÂ°Ã‘â€šÃ‘Å’ Ã‘Æ’ÃÂ¿Ã‘â‚¬ÃÂ°ÃÂ²ÃÂ»ÃÂµÃÂ½ÃÂ¸ÃÂµ ÃÂ²ÃÂ¾Ã‘ÂÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ¸ÃÂ·ÃÂ²ÃÂµÃÂ´ÃÂµÃÂ½ÃÂ¸ÃÂµÃÂ¼',
	'channelSettingAudioDefault': 'ÃÂ´ÃÂ¾Ã‘â‚¬ÃÂ¾ÃÂ¶ÃÂºÃÂ° ÃÂ¿ÃÂ¾ Ã‘Æ’ÃÂ¼ÃÂ¾ÃÂ»Ã‘â€¡ÃÂ°ÃÂ½ÃÂ¸Ã‘Å½',
	'channelSettingSubNoTrack': 'ÃÂ½ÃÂµÃÂ´ÃÂ¾Ã‘ÂÃ‘â€šÃ‘Æ’ÃÂ¿ÃÂ½ÃÂ¾',
	'channelSettingSubOff': 'ÃÂ¾Ã‘â€šÃÂºÃÂ»Ã‘Å½Ã‘â€¡ÃÂ¸Ã‘â€šÃ‘Å’',
	'channelSettingResolution': 'Ã‘â‚¬ÃÂ°ÃÂ·Ã‘â‚¬ÃÂµÃ‘Ë†ÃÂµÃÂ½ÃÂ¸ÃÂµ',

	// EPG
	'epgSource': 'ÃËœÃ‘ÂÃ‘â€šÃÂ¾Ã‘â€¡ÃÂ½ÃÂ¸ÃÂº ÃÂ­ÃÅ¸ÃÅ¸',
	'usePlaylistEpgUrl': 'Ãâ€™ÃÂ¼ÃÂµÃ‘ÂÃ‘â€šÃÂ¾ Ã‘ÂÃ‘â€šÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¸Ã‘ÂÃÂ¿ÃÂ¾ÃÂ»Ã‘Å’ÃÂ·ÃÂ¾ÃÂ²ÃÂ°Ã‘â€šÃ‘Å’ ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾Ã‘â€¡ÃÂ½ÃÂ¸ÃÂº ÃÂ­ÃÅ¸ÃÅ¸ ÃÂ¸ÃÂ· ÃÂ²ÃÂ°Ã‘Ë†ÃÂµÃÂ³ÃÂ¾ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ°?',
	'epgTimeShift': 'ÃÂ­ÃÅ¸ÃÅ¸ ÃÂ¢ÃÂ°ÃÂ¹ÃÂ¼Ã‘Ë†ÃÂ¸Ã‘â€žÃ‘â€š',
	'epgGrabInterval': 'ÃËœÃÂ½Ã‘â€šÃÂµÃ‘â‚¬ÃÂ²ÃÂ°ÃÂ» ÃÂ·ÃÂ°Ã‘â€¦ÃÂ²ÃÂ°Ã‘â€šÃÂ° ÃÂ­ÃÅ¸ÃÅ¸',
	'downloadEpgButton': 'Ã‘ÂÃÂºÃÂ°Ã‘â€¡ÃÂ°Ã‘â€šÃ‘Å’ ÃÂ­ÃÅ¸ÃÅ¸ Ã‘ÂÃÂµÃÂ¹Ã‘â€¡ÃÂ°Ã‘Â',
	'noEpgForChannel': 'ÃÂÃÂµÃ‘â€š ÃÂ­ÃÅ¸ÃÅ¸ ÃÂ´ÃÂ»Ã‘Â Ã‘ÂÃ‘â€šÃÂ¾ÃÂ³ÃÂ¾ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ°',
	'noEpgUrlGiven': 'ÃÂÃÂµ ÃÂ·ÃÂ°ÃÂ´ÃÂ°ÃÂ½ URL-ÃÂ°ÃÂ´Ã‘â‚¬ÃÂµÃ‘Â ÃÂ­ÃÅ¸ÃÅ¸',
	'epgQuotaExceededError': 'ÃÂÃÂµÃÂ´ÃÂ¾Ã‘ÂÃ‘â€šÃÂ°Ã‘â€šÃÂ¾Ã‘â€¡ÃÂ½ÃÂ¾ Ã‘ÂÃÂ²ÃÂ¾ÃÂ±ÃÂ¾ÃÂ´ÃÂ½ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¼ÃÂµÃ‘ÂÃ‘â€šÃÂ° ÃÂ´ÃÂ»Ã‘Â Ã‘ÂÃÂ¾Ã‘â€¦Ã‘â‚¬ÃÂ°ÃÂ½ÃÂµÃÂ½ÃÂ¸Ã‘Â ÃÂ´ÃÂ°ÃÂ½ÃÂ½Ã‘â€¹Ã‘â€¦ ÃÂ­ÃÅ¸ÃÅ¸. ÃÅ¸ÃÂ¾ÃÂ¶ÃÂ°ÃÂ»Ã‘Æ’ÃÂ¹Ã‘ÂÃ‘â€šÃÂ°, ÃÂ¾Ã‘ÂÃÂ²ÃÂ¾ÃÂ±ÃÂ¾ÃÂ´ÃÂ¸Ã‘â€šÃÂµ ÃÂ¼ÃÂµÃ‘ÂÃ‘â€šÃÂ¾. ÃÂÃÂ°ÃÂ¿Ã‘â‚¬ÃÂ¸ÃÂ¼ÃÂµÃ‘â‚¬, Ã‘Æ’ÃÂ´ÃÂ°ÃÂ»ÃÂ¸ÃÂ² ÃÂ½ÃÂµÃÂ¸Ã‘ÂÃÂ¿ÃÂ¾ÃÂ»Ã‘Å’ÃÂ·Ã‘Æ’ÃÂµÃÂ¼Ã‘â€¹ÃÂµ ÃÂ¿Ã‘â‚¬ÃÂ¸ÃÂ»ÃÂ¾ÃÂ¶ÃÂµÃÂ½ÃÂ¸Ã‘Â.',
	'epgNotCompatibleWithPlaylist': 'Ãâ€™ÃÂ°Ã‘Ë† ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ½ÃÂµÃ‘ÂÃÂ¾ÃÂ²ÃÂ¼ÃÂµÃ‘ÂÃ‘â€šÃÂ¸ÃÂ¼ Ã‘Â Ã‘ÂÃ‘â€šÃÂ¸ÃÂ¼ ÃÂ­ÃÅ¸ÃÅ¸-URL.',
	'epgIsDownloading': 'Ãâ€”ÃÂ°ÃÂ³Ã‘â‚¬Ã‘Æ’ÃÂ·ÃÂºÃÂ° ÃÂ­ÃÅ¸ÃÅ¸...',
	'epgChannelsProcessed': 'ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€¹: ',
	'epgProgramsProcessed': 'ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ³Ã‘â‚¬ÃÂ°ÃÂ¼ÃÂ¼Ã‘â€¹: ',
	'epgNow': 'ÃÂ¡ÃÂµÃÂ¹Ã‘â€¡ÃÂ°Ã‘Â',
	'epgAfter': 'ÃÅ¸ÃÂ¾Ã‘ÂÃÂ»ÃÂµ Ã‘ÂÃ‘â€šÃÂ¾ÃÂ³ÃÂ¾',

},
'tr': {
	'yes': 'evet', 'no': 'hayÃ„Â±r',

	'm3uSource': 'm3u(8)-dosyasÃ„Â±nÃ„Â±n URL\'si',
	'chooseLang': 'Dil',
	'usbLoadLabel': 'USB\'den oynatma listesi',
	'openUsbButton': 'USB\'ye gÃƒÂ¶z at',
	'localLoadLabel': 'Yerel m3u(8)-dosyasÃ„Â±',
	'openExplorerButton': 'gezgini aÃƒÂ§',
	'openHistoryButton': 'Tarih',
	'downloadButton': 'ÃƒÂ§alma listesi indir',
	'saveButton': 'kaydet ve oyna',
	'deleteButton': 'ÃƒÂ§alma listesini sil',
	'generalSettingsButton': 'Genel Ayarlar',
	'advancedSettingsButton': 'GeliÃ…Å¸miÃ…Å¸ Ayarlar',

	'closeAppHint': 'Bu uygulamayÃ„Â± kapatmak istiyor musunuz?',
	'hideModalHint': 'Bu mesajÃ„Â± kapatmak iÃƒÂ§in herhangi bir dÃƒÂ¼Ã„Å¸meye basÃ„Â±n.',
	'playlistDownloaded': 'Oynatma listesi baÃ…Å¸arÃ„Â±yla indirildi.<br>%i kanal yÃƒÂ¼klendi.',
	'channelsLoaded': 'kanallar',
	'filterNoResults': 'Verilen filtre iÃƒÂ§in kanal bulunamadÃ„Â±.',

	'redButtonHint': '<span class="red-button">A</span> aramak',
	'helpHint': 'Demo kanal listesi eklemek iÃƒÂ§in <span class="red-button">A</span>-dÃƒÂ¼Ã„Å¸mesine basÃ„Â±n.<br><br>KullanÃ„Â±cÃ„Â± kÃ„Â±lavuzu iÃƒÂ§in istediÃ„Å¸iniz zaman uzaktan kumandadaki INFO\'a basÃ„Â±n.',

	'supportContact': 'Daha fazla bilgi iÃƒÂ§in https://jeromelaliag.link/tr adresini ziyaret edin.',
	'supportContactLinked': 'Daha fazla bilgi iÃƒÂ§in <a href="https://jeromelaliag.link/tr/" target="_blank">https://jeromelaliag.link/tr</a> adresini ziyaret edin.',
	'donate': 'Bu uygulamayÃ„Â± beÃ„Å¸endiyseniz, lÃƒÂ¼tfen bana kÃƒÂ¼ÃƒÂ§ÃƒÂ¼k bir baÃ„Å¸Ã„Â±Ã…Å¸la destek olun.<br><b class="NOBR">https://jeromelaliag.link</b><br>veya QR kodu ile ziyaret edin.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kredi kartÃ„Â±)',
	'downloadM3uStatus': 'Oynatma listesi yÃƒÂ¼kleniyor. Bir sÃƒÂ¼re bekleyin lÃƒÂ¼tfen.',
	'usbMountedStatus': 'USB takÃ„Â±lÃ„Â±',

	'connectionLost': 'AÃ„Å¸ baÃ„Å¸lantÃ„Â±sÃ„Â± kesildi. LÃƒÂ¼tfen aÃ„Å¸Ã„Â±nÃ„Â±zÃ„Â± kontrol edin.',
	'checkM3uError': 'Oynatma listesi yÃƒÂ¼klenemedi. HTTP durum kodu: ',
	'checkM3uFileError': 'GeÃƒÂ§erli bir m3u(8)-ÃƒÂ§alma listesi deÃ„Å¸il. LÃƒÂ¼tfen dosyayÃ„Â± kontrol edin.',
	'checkM3uDownloadError': 'Oynatma listesi yÃƒÂ¼klenemedi. LÃƒÂ¼tfen URL\'yi kontrol edin.',
	'checkM3uDownloadSizeError': 'Oynatma listesi ÃƒÂ§ok fazla kanal iÃƒÂ§eriyor. LÃƒÂ¼tfen bunlarÃ„Â± maksimum 20.000 kanala dÃƒÂ¼Ã…Å¸ÃƒÂ¼rÃƒÂ¼n.',
	'checkM3uTimeoutError': 'Oynatma listeniz yÃƒÂ¼klenirken zaman aÃ…Å¸Ã„Â±mÃ„Â± oluÃ…Å¸tu. LÃƒÂ¼tfen tekrar deneyin.',
	'errorNoUsbMounted': 'USB depolama algÃ„Â±lanmadÃ„Â±. LÃƒÂ¼tfen ÃƒÂ¶nce bir USB depolama aygÃ„Â±tÃ„Â± baÃ„Å¸layÃ„Â±n.',
	'errorNoM3uUrl': 'LÃƒÂ¼tfen m3u(8) ÃƒÂ§alma listeniz iÃƒÂ§in geÃƒÂ§erli bir URL girin.',
	'channelLoadError': 'Bu kanal Ã…Å¸u anda kullanÃ„Â±lamÃ„Â±yor. LÃƒÂ¼tfen daha sonra tekrar deneyiniz.',
	'channelLoadConnectionFailed': '(AkÃ„Â±Ã…Å¸a baÃ„Å¸lantÃ„Â± baÃ…Å¸arÃ„Â±sÃ„Â±z oldu.)',
	'channelNotSupportedFile': 'Bu kanal, uyumsuz bir biÃƒÂ§im nedeniyle yÃƒÂ¼klenemiyor.',
	'errorNoFavouritesYet': 'HenÃƒÂ¼z favori kanalÃ„Â±nÃ„Â±z yok. Bir kanalÃ„Â± favorilere eklemek iÃƒÂ§in SARI dÃƒÂ¼Ã„Å¸meye basÃ„Â±n.',
	'errorNoPlaylistHistory': 'HenÃƒÂ¼z geÃƒÂ§miÃ…Å¸te oynatma listesi yok. LÃƒÂ¼tfen aÃ…Å¸aÃ„Å¸Ã„Â±daki alana bir URL girin.',

	// Menu
	'searchPlaceholder': 'AraÃ…Å¸tÃ„Â±rma',
	'allChannels': 'TÃƒÂ¼m kanallar',
	'favourites': 'Ã¢Â­Â Favoriler',
	'groups': 'Gruplar',
	'channels': 'Kanallar',
	'settings_menu': 'Ayarlar',
	'epg_menu': 'EPG',
	'guide_menu': 'KÃ„Â±lavuz',

	'guideControlsHeadline': 'Kontroller',

	// Advanced Settings
	'tabGeneralSettings': 'Genel Ayarlar',
	'tabAdvancedSettings': 'GeliÃ…Å¸miÃ…Å¸ Ayarlar',
	'chooseMousewheel': 'Fare tekerleÃ„Å¸i',
	'volumeSetting': 'Sesi artÃ„Â±r/azalt',
	'channelSetting': 'Kanal ileri/geri',
	'reloadPlaylistOnStart': 'Her baÃ…Å¸langÃ„Â±ÃƒÂ§ta ÃƒÂ§alma listesini indir',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'yÃƒÂ¼kleniyor...',
	'audioTrack': 'Ses parÃƒÂ§asÃ„Â±',
	'subtitleTrack': 'AltyazÃ„Â± parÃƒÂ§asÃ„Â±',
	'channelSettings': 'Kanal ayarlarÃ„Â±',
	'channelSettingSubtitle': 'altyazÃ„Â± / ses',
	'channelSettingFavs': 'kanalÃ„Â± favorilere ekle',
	'channelSettingPlayback': 'oynatma kontrollerini gÃƒÂ¶ster',
	'channelSettingAudioDefault': 'varsayÃ„Â±lan parÃƒÂ§a',
	'channelSettingSubNoTrack': 'mevcut deÃ„Å¸il',
	'channelSettingSubOff': 'devre dÃ„Â±Ã…Å¸Ã„Â± bÃ„Â±rak',
	'channelSettingResolution': 'ÃƒÂ§ÃƒÂ¶zÃƒÂ¼nÃƒÂ¼rlÃƒÂ¼k',

	// EPG
	'epgSource': 'EPG kaynaÃ„Å¸Ã„Â±',
	'usePlaylistEpgUrl': 'Bunun yerine oynatma listenizdeki EPG kaynaÃ„Å¸Ã„Â± kullanÃ„Â±lsÃ„Â±n mÃ„Â±?',
	'epgTimeShift': 'EPG Zaman KaymasÃ„Â±',
	'epgGrabInterval': 'EPG yakalama aralÃ„Â±Ã„Å¸Ã„Â±',
	'downloadEpgButton': 'EPG\'yi Ã…Å¸imdi indir',
	'noEpgForChannel': 'Bu kanal iÃƒÂ§in EPG yok',
	'noEpgUrlGiven': 'EPG URL\'si ayarlanmadÃ„Â±',
	'epgQuotaExceededError': 'EPG verilerini kaydetmek iÃƒÂ§in yeterli boÃ…Å¸ alan yok. LÃƒÂ¼tfen biraz yer aÃƒÂ§Ã„Â±n. Ãƒâ€“rneÃ„Å¸in, kullanÃ„Â±lmayan uygulamalarÃ„Â± silerek.',
	'epgNotCompatibleWithPlaylist': 'Ãƒâ€¡alma listeniz bu EGP-URL ile uyumlu deÃ„Å¸il.',
	'epgIsDownloading': 'EPG yÃƒÂ¼kleniyor ...',
	'epgChannelsProcessed': 'kanallar: ',
	'epgProgramsProcessed': 'programlar: ',
	'epgNow': 'Ã…Å¾imdi',
	'epgAfter': 'Daha sonra',

},
'pl': {
	'yes': 'tak', 'no': 'nie',

	'm3uSource': 'URL do pliku m3u(8)',
	'chooseLang': 'JÃ„â„¢zyk',
	'usbLoadLabel': 'Lista odtwarzania z USB',
	'openUsbButton': 'przeglÃ„â€¦daj USB',
	'localLoadLabel': 'Lokalny plik m3u(8)',
	'openExplorerButton': 'otwarty eksplorator',
	'openHistoryButton': 'historia',
	'downloadButton': 'zaÃ…â€šaduj playlistÃ„â„¢',
	'saveButton': 'zapisz i graj',
	'deleteButton': 'usuÃ…â€ž playlistÃ„â„¢',
	'generalSettingsButton': 'Ustawienia gÃ…â€šÃƒÂ³wne',
	'advancedSettingsButton': 'zaawansowane',

	'closeAppHint': 'Czy chcesz zamknÃ„â€¦Ã„â€¡ tÃ„â„¢ aplikacjÃ„â„¢?',
	'hideModalHint': 'NaciÃ…â€ºnij dowolny przycisk, aby zamknÃ„â€¦Ã„â€¡ tÃ„â„¢ wiadomoÃ…â€ºÃ„â€¡.',
	'playlistDownloaded': 'Playlista zostaÃ…â€ša pomyÃ…â€ºlnie pobrana.<br>Wczytano %i kanaÃ…â€šÃƒÂ³w.',
	'channelsLoaded': 'kanaÃ…â€šy',
	'filterNoResults': 'Nie znaleziono kanaÃ…â€šÃƒÂ³w dla podanego filtra.',

	'redButtonHint': '<span class="red-button">A</span> Poszukuje',
	'helpHint': 'NaciÃ…â€ºnij przycisk <span class="red-button">A</span>, aby wstawiÃ„â€¡ listÃ„â„¢ kanaÃ…â€šÃƒÂ³w demonstracyjnych.<br><br>W dowolnym momencie naciÃ…â€ºnij przycisk INFO na pilocie, aby wyÃ…â€ºwietliÃ„â€¡ instrukcjÃ„â„¢ obsÃ…â€šugi.',

	'supportContact': 'Aby uzyskaÃ„â€¡ wiÃ„â„¢cej informacji, odwiedÃ…Âº https://jeromelaliag.link/pl',
	'supportContactLinked': 'Aby uzyskaÃ„â€¡ wiÃ„â„¢cej informacji, odwiedÃ…Âº <a href="https://jeromelaliag.link/pl/" target="_blank">https://jeromelaliag.link/pl</a>',
	'donate': 'JeÃ…â€ºli podoba Ci siÃ„â„¢ ta aplikacja, wesprzyj mnie niewielkÃ„â€¦ darowiznÃ„â€¦.<br>OdwiedÃ…Âº <b class="NOBR">https://jeromelaliag.link</b><br>lub za pomocÃ„â€¦ kodu QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (karta kredytowa)',
	'downloadM3uStatus': 'WczytujÃ„â„¢ listÃ„â„¢ odtwarzania. ProszÃ„â„¢ chwilÃ„â„¢ poczekaÃ„â€¡.',
	'usbMountedStatus': 'USB jest zamontowany',

	'connectionLost': 'Utracono poÃ…â€šÃ„â€¦czenie sieciowe. SprawdÃ…Âº swojÃ„â€¦ sieÃ„â€¡.',
	'checkM3uError': 'Nie udaÃ…â€šo siÃ„â„¢ wczytaÃ„â€¡ playlisty. Kod statusu HTTP: ',
	'checkM3uFileError': 'NieprawidÃ…â€šowa lista odtwarzania m3u(8). ProszÃ„â„¢ sprawdziÃ„â€¡ plik.',
	'checkM3uDownloadError': 'Nie udaÃ…â€šo siÃ„â„¢ wczytaÃ„â€¡ playlisty. SprawdÃ…Âº adres URL.',
	'checkM3uDownloadSizeError': 'Lista odtwarzania zawiera zbyt wiele kanaÃ…â€šÃƒÂ³w. Zmniejsz je do maks. 20.000 kanaÃ…â€šÃƒÂ³w.',
	'checkM3uTimeoutError': 'Przekroczono limit czasu podczas wczytywania listy odtwarzania. ProszÃ„â„¢ sprÃƒÂ³buj ponownie.',
	'errorNoUsbMounted': 'Nie wykryto noÃ…â€ºnika USB. Najpierw podÃ…â€šÃ„â€¦cz urzÃ„â€¦dzenie pamiÃ„â„¢ci USB.',
	'errorNoM3uUrl': 'WprowadÃ…Âº prawidÃ…â€šowy adres URL do swojej listy odtwarzania m3u(8).',
	'channelLoadError': 'Ten kanaÃ…â€š jest obecnie niedostÃ„â„¢pny. SprÃƒÂ³buj ponownie pÃƒÂ³Ã…Âºniej.',
	'channelLoadConnectionFailed': '(Nie udaÃ…â€šo siÃ„â„¢ nawiÃ„â€¦zaÃ„â€¡ poÃ…â€šÃ„â€¦czenia ze strumieniem.)',
	'channelNotSupportedFile': 'Nie moÃ…Â¼na zaÃ…â€šadowaÃ„â€¡ tego kanaÃ…â€šu z powodu niezgodnego formatu.',
	'errorNoFavouritesYet': 'Nie masz jeszcze Ã…Â¼adnych ulubionych kanaÃ…â€šÃƒÂ³w. NaciÃ…â€ºnij Ã…Â»Ãƒâ€œÃ…ÂTY przycisk, aby dodaÃ„â€¡ kanaÃ…â€š do ulubionych.',
	'errorNoPlaylistHistory': 'Brak playlisty w historii. ProszÃ„â„¢ wstawiÃ„â€¡ adres URL w polu poniÃ…Â¼ej.',

	// Menu
	'searchPlaceholder': 'Poszukiwanie',
	'allChannels': 'Wszystkie kanaÃ…â€šy',
	'favourites': 'Ã¢Â­Â Ulubione',
	'groups': 'Grupy',
	'channels': 'KanaÃ…â€šy',
	'settings_menu': 'Ustawienia',
	'epg_menu': 'EPG',
	'guide_menu': 'Przewodnik',

	'guideControlsHeadline': 'Controls',

	// Advanced Settings
	'tabGeneralSettings': 'Ustawienia gÃ…â€šÃƒÂ³wne',
	'tabAdvancedSettings': 'Zaawansowane ustawienia',
	'chooseMousewheel': 'KÃƒÂ³Ã…â€ško w myszce',
	'volumeSetting': 'ZwiÃ„â„¢kszanie/zmniejszanie gÃ…â€šoÃ…â€ºnoÃ…â€ºci',
	'channelSetting': 'PrzejÃ…â€ºcie do przodu/do tyÃ…â€šu kanaÃ…â€šu',
	'reloadPlaylistOnStart': 'Pobierz listÃ„â„¢ odtwarzania przy kaÃ…Â¼dym starcie',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'Ã…â€šadowanie...',
	'audioTrack': 'Ã…Å¡cieÃ…Â¼ka audio',
	'subtitleTrack': 'Ã…Å¡cieÃ…Â¼ka napisÃƒÂ³w',
	'channelSettings': 'Ustawienia kanaÃ…â€šu',
	'channelSettingSubtitle': 'napisy / dÃ…ÂºwiÃ„â„¢k',
	'channelSettingFavs': 'umieÃ…â€ºÃ„â€¡ kanaÃ…â€š w ulubionych',
	'channelSettingPlayback': 'pokaÃ…Â¼ sterowanie odtwarzaniem',
	'channelSettingAudioDefault': 'Ã…â€ºcieÃ…Â¼ka domyÃ…â€ºlna',
	'channelSettingSubNoTrack': 'niedostÃ„â„¢pne',
	'channelSettingSubOff': 'wyÃ…â€šÃ„â€¦cz',
	'channelSettingResolution': 'rozdzielczoÃ…â€ºÃ„â€¡',

	// EPG
	'epgSource': 'Ã…ÂºrÃƒÂ³dÃ…â€šo EPG',
	'usePlaylistEpgUrl': 'Zamiast tego uÃ…Â¼yÃ„â€¡ Ã…ÂºrÃƒÂ³dÃ…â€ša EPG z listy odtwarzania?',
	'epgTimeShift': 'PrzesuniÃ„â„¢cie czasowe EPG',
	'epgGrabInterval': 'InterwaÃ…â€š przechwytywania EPG',
	'downloadEpgButton': 'pobierz EPG teraz',
	'noEpgForChannel': 'Brak EPG dla tego kanaÃ…â€šu',
	'noEpgUrlGiven': 'Nie ustawiono adresu URL EPG',
	'epgQuotaExceededError': 'Za maÃ…â€šo wolnego miejsca, aby zapisaÃ„â€¡ dane EPG. ProszÃ„â„¢ zwolniÃ„â€¡ trochÃ„â„¢ miejsca. Na przykÃ…â€šad usuwajÃ„â€¦c nieuÃ…Â¼ywane aplikacje.',
	'epgNotCompatibleWithPlaylist': 'Twoja lista odtwarzania nie jest zgodna z tym adresem URL EGP.',
	'epgIsDownloading': 'Ã…Âadowanie EPG ...',
	'epgChannelsProcessed': 'kanaÃ…â€šy: ',
	'epgProgramsProcessed': 'programy: ',
	'epgNow': 'Teraz w tv',
	'epgAfter': 'Po tym',

},
'pt': {
	'yes': 'sim', 'no': 'nÃƒÂ£o',

	'm3uSource': 'URL para arquivo m3u(8)',
	'chooseLang': 'LÃƒÂ­ngua',
	'usbLoadLabel': 'Lista de reproduÃƒÂ§ÃƒÂ£o de USB',
	'openUsbButton': 'navegar no USB',
	'localLoadLabel': 'Arquivo m3u(8) local',
	'openExplorerButton': 'abra o explorador',
	'openHistoryButton': 'histÃƒÂ³ria',
	'downloadButton': 'carregar lista de reproduÃƒÂ§ÃƒÂ£o',
	'saveButton': 'salve e jogue',
	'deleteButton': 'excluir lista de reproduÃƒÂ§ÃƒÂ£o',
	'generalSettingsButton': 'ConfiguraÃƒÂ§ÃƒÂµes Gerais',
	'advancedSettingsButton': 'avanÃƒÂ§ado',

	'closeAppHint': 'Deseja fechar este aplicativo?',
	'hideModalHint': 'Pressione qualquer botÃƒÂ£o para fechar esta mensagem.',
	'playlistDownloaded': 'Playlist baixada com sucesso.<br>%i canais carregados.',
	'channelsLoaded': 'canais',
	'filterNoResults': 'Nenhum canal encontrado para o filtro fornecido.',

	'redButtonHint': '<span class="red-button">A</span> busca',
	'helpHint': 'Pressione o botÃƒÂ£o <span class="red-button">A</span> para inserir a lista de canais de demonstraÃƒÂ§ÃƒÂ£o.<br><br>Pressione INFO no controle remoto a qualquer momento para obter um guia do usuÃƒÂ¡rio.',

	'supportContact': 'Para mais informaÃƒÂ§ÃƒÂµes, visite https://jeromelaliag.link/pt',
	'supportContactLinked': 'Para mais informaÃƒÂ§ÃƒÂµes, visite <a href="https://jeromelaliag.link/pt/" target="_blank">https://jeromelaliag.link/pt</a>',
	'donate': 'Se vocÃƒÂª gosta deste aplicativo, por favor, apoie-me com uma pequena doaÃƒÂ§ÃƒÂ£o.<br>Visite <b class="NOBR">https://jeromelaliag.link</b><br>ou via cÃƒÂ³digo QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (cartÃƒÂ£o de crÃƒÂ©dito)',
	'downloadM3uStatus': 'Carregando lista de reproduÃƒÂ§ÃƒÂ£o. Por favor espere um momento.',
	'usbMountedStatus': 'USB montado',

	'connectionLost': 'ConexÃƒÂ£o de rede perdida. Verifique sua rede.',
	'checkM3uError': 'NÃƒÂ£o foi possÃƒÂ­vel carregar a lista de reproduÃƒÂ§ÃƒÂ£o. CÃƒÂ³digo de status HTTP: ',
	'checkM3uFileError': 'NÃƒÂ£o ÃƒÂ© uma lista de reproduÃƒÂ§ÃƒÂ£o m3u(8) vÃƒÂ¡lida. Verifique o arquivo.',
	'checkM3uDownloadError': 'NÃƒÂ£o foi possÃƒÂ­vel carregar a lista de reproduÃƒÂ§ÃƒÂ£o. Verifique o URL.',
	'checkM3uDownloadSizeError': 'A lista de reproduÃƒÂ§ÃƒÂ£o contÃƒÂ©m muitos canais. Reduza-os para um mÃƒÂ¡ximo de 20.000 canais.',
	'checkM3uTimeoutError': 'Ocorreu um tempo limite ao carregar sua lista de reproduÃƒÂ§ÃƒÂ£o. Por favor, tente novamente.',
	'errorNoUsbMounted': 'Nenhum armazenamento USB detectado. Conecte primeiro um dispositivo de armazenamento USB.',
	'errorNoM3uUrl': 'Insira um URL vÃƒÂ¡lido para sua lista de reproduÃƒÂ§ÃƒÂ£o m3u(8).',
	'channelLoadError': 'Este canal nÃƒÂ£o estÃƒÂ¡ disponÃƒÂ­vel no momento. Por favor, tente novamente mais tarde.',
	'channelLoadConnectionFailed': '(Falha na conexÃƒÂ£o com o stream.)',
	'channelNotSupportedFile': 'Este canal nÃƒÂ£o pode ser carregado devido a um formato incompatÃƒÂ­vel.',
	'errorNoFavouritesYet': 'VocÃƒÂª ainda nÃƒÂ£o tem canais favoritos. Pressione o botÃƒÂ£o AMARELO para adicionar um canal aos favoritos.',
	'errorNoPlaylistHistory': 'Nenhuma lista de reproduÃƒÂ§ÃƒÂ£o no histÃƒÂ³rico ainda. Insira um URL no campo abaixo.',

	// Menu
	'searchPlaceholder': 'Busca',
	'allChannels': 'Todos os canais',
	'favourites': 'Ã¢Â­Â Favoritas',
	'groups': 'Grupos',
	'channels': 'Canais',
	'settings_menu': 'ConfiguraÃƒÂ§ÃƒÂµes',
	'epg_menu': 'EPG',
	'guide_menu': 'Guia',

	'guideControlsHeadline': 'Controles',

	// Advanced Settings
	'tabGeneralSettings': 'ConfiguraÃƒÂ§ÃƒÂµes Gerais',
	'tabAdvancedSettings': 'ConfiguraÃƒÂ§ÃƒÂµes avanÃƒÂ§adas',
	'chooseMousewheel': 'Roda do mouse',
	'volumeSetting': 'Aumentar/diminuir o volume',
	'channelSetting': 'Canal para frente/para trÃƒÂ¡s',
	'reloadPlaylistOnStart': 'Baixar lista de reproduÃƒÂ§ÃƒÂ£o em cada inÃƒÂ­cio',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'carregando...',
	'audioTrack': 'Faixa de ÃƒÂ¡udio',
	'subtitleTrack': 'Faixa de legenda',
	'channelSettings': 'ConfiguraÃƒÂ§ÃƒÂµes do canal',
	'channelSettingSubtitle': 'legenda / ÃƒÂ¡udio',
	'channelSettingFavs': 'colocar canal nos favoritos',
	'channelSettingPlayback': 'mostrar controles de reproduÃƒÂ§ÃƒÂ£o',
	'channelSettingAudioDefault': 'faixa padrÃƒÂ£o',
	'channelSettingSubNoTrack': 'nÃƒÂ£o disponÃƒÂ­vel',
	'channelSettingSubOff': 'desabilitar',
	'channelSettingResolution': 'resoluÃƒÂ§ÃƒÂ£o',

	// EPG
	'epgSource': 'fonte EPG',
	'usePlaylistEpgUrl': 'Em vez disso, usar a fonte EPG da sua lista de reproduÃƒÂ§ÃƒÂ£o?',
	'epgTimeShift': 'Timeshift EPG',
	'epgGrabInterval': 'Intervalo de captura de EPG',
	'downloadEpgButton': 'baixar EPG agora',
	'noEpgForChannel': 'Nenhum EPG para este canal',
	'noEpgUrlGiven': 'Nenhum URL EPG definido',
	'epgQuotaExceededError': 'NÃƒÂ£o hÃƒÂ¡ espaÃƒÂ§o livre suficiente para salvar dados EPG. Por favor, libere algum espaÃƒÂ§o. Por exemplo, excluindo aplicativos nÃƒÂ£o usados.',
	'epgNotCompatibleWithPlaylist': 'Sua lista de reproduÃƒÂ§ÃƒÂ£o nÃƒÂ£o ÃƒÂ© compatÃƒÂ­vel com este EGP-URL.',
	'epgIsDownloading': 'Carregando EPG ...',
	'epgChannelsProcessed': 'canais: ',
	'epgProgramsProcessed': 'programas: ',
	'epgNow': 'Agora',
	'epgAfter': 'Depois disso',

},
'cs': {
	'yes': 'Ano', 'no': 'Ne',

	'm3uSource': 'URL k souboru m3u(8).',
	'chooseLang': 'Jazyk',
	'usbLoadLabel': 'Playlist z USB',
	'openUsbButton': 'prochÃƒÂ¡zet USB',
	'localLoadLabel': 'MÃƒÂ­stnÃƒÂ­ soubor m3u(8).',
	'openExplorerButton': 'otevÃ…â„¢ÃƒÂ­t prÃ…Â¯zkumnÃƒÂ­ka',
	'openHistoryButton': 'DÃ„â€ºjiny',
	'downloadButton': 'naÃ„ÂÃƒÂ­st seznam skladeb',
	'saveButton': 'uloÃ…Â¾it a hrÃƒÂ¡t',
	'deleteButton': 'smazat seznam skladeb',
	'generalSettingsButton': 'ObecnÃƒÂ© nastavenÃƒÂ­',
	'advancedSettingsButton': 'pokroÃ„ÂilÃƒÂ½',

	'closeAppHint': 'Chcete tuto aplikaci zavÃ…â„¢ÃƒÂ­t?',
	'hideModalHint': 'StisknutÃƒÂ­m libovolnÃƒÂ©ho tlaÃ„ÂÃƒÂ­tka tuto zprÃƒÂ¡vu zavÃ…â„¢ete.',
	'playlistDownloaded': 'Playlist ÃƒÂºspÃ„â€ºÃ…Â¡nÃ„â€º staÃ…Â¾en.<br>NaÃ„Âteno %i kanÃƒÂ¡lÃ…Â¯.',
	'channelsLoaded': 'kanÃƒÂ¡ly',
	'filterNoResults': 'Pro zadanÃƒÂ½ filtr nebyly nalezeny Ã…Â¾ÃƒÂ¡dnÃƒÂ© kanÃƒÂ¡ly.',

	'redButtonHint': '<span class="red-button">A</span> hledat',
	'helpHint': 'StisknutÃƒÂ­m tlaÃ„ÂÃƒÂ­tka <span class="red-button">A</span> vloÃ…Â¾ÃƒÂ­te seznam ukÃƒÂ¡zkovÃƒÂ½ch kanÃƒÂ¡lÃ…Â¯.<br><br>StisknutÃƒÂ­m tlaÃ„ÂÃƒÂ­tka INFO na dÃƒÂ¡lkovÃƒÂ©m ovladaÃ„Âi kdykoli zobrazÃƒÂ­te uÃ…Â¾ivatelskou pÃ…â„¢ÃƒÂ­ruÃ„Âku.',

	'supportContact': 'Pro vÃƒÂ­ce informacÃƒÂ­ navÃ…Â¡tivte https://jeromelaliag.link/cs',
	'supportContactLinked': 'Pro vÃƒÂ­ce informacÃƒÂ­ navÃ…Â¡tivte <a href="https://jeromelaliag.link/cs/" target="_blank">https://jeromelaliag.link/cs</a>',
	'donate': 'Pokud se vÃƒÂ¡m tato aplikace lÃƒÂ­bÃƒÂ­, podpoÃ…â„¢te mÃ„â€º malÃƒÂ½m darem.<br>NavÃ…Â¡tivte <b class="NOBR">https://jeromelaliag.link</b><br>nebo pomocÃƒÂ­ QR kÃƒÂ³du.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kreditnÃƒÂ­ karta)',
	'downloadM3uStatus': 'NaÃ„ÂÃƒÂ­tÃƒÂ¡nÃƒÂ­ seznamu skladeb. ProsÃƒÂ­m, poÃ„Âkej chvÃƒÂ­li.',
	'usbMountedStatus': 'pÃ…â„¢ipojeno USB',

	'connectionLost': 'SÃƒÂ­Ã…Â¥ovÃƒÂ© pÃ…â„¢ipojenÃƒÂ­ bylo ztraceno. Zkontrolujte prosÃƒÂ­m svou sÃƒÂ­Ã…Â¥.',
	'checkM3uError': 'Nelze naÃ„ÂÃƒÂ­st seznam skladeb. StavovÃƒÂ½ kÃƒÂ³d HTTP: ',
	'checkM3uFileError': 'NeplatnÃƒÂ½ m3u(8)-playlist. Zkontrolujte soubor.',
	'checkM3uDownloadError': 'Nelze naÃ„ÂÃƒÂ­st seznam skladeb. Zkontrolujte prosÃƒÂ­m adresu URL.',
	'checkM3uDownloadSizeError': 'Seznam stop obsahuje pÃ…â„¢ÃƒÂ­liÃ…Â¡ mnoho kanÃƒÂ¡lÃ…Â¯. SniÃ…Â¾te je na max. 20.000 kanÃƒÂ¡lÃ…Â¯.',
	'checkM3uTimeoutError': 'PÃ…â„¢i naÃ„ÂÃƒÂ­tÃƒÂ¡nÃƒÂ­ seznamu skladeb vyprÃ…Â¡el Ã„ÂasovÃƒÂ½ limit. ProsÃƒÂ­m zkuste to znovu.',
	'errorNoUsbMounted': 'Nebylo zjiÃ…Â¡tÃ„â€ºno Ã…Â¾ÃƒÂ¡dnÃƒÂ© ÃƒÂºloÃ…Â¾iÃ…Â¡tÃ„â€º USB. Nejprve pÃ…â„¢ipojte pamÃ„â€ºÃ…Â¥ovÃƒÂ© zaÃ…â„¢ÃƒÂ­zenÃƒÂ­ USB.',
	'errorNoM3uUrl': 'Zadejte prosÃƒÂ­m platnou adresu URL svÃƒÂ©ho seznamu skladeb m3u(8).',
	'channelLoadError': 'Tento kanÃƒÂ¡l nenÃƒÂ­ momentÃƒÂ¡lnÃ„â€º dostupnÃƒÂ½. ProsÃƒÂ­m zkuste to znovu pozdÃ„â€ºji.',
	'channelLoadConnectionFailed': '(PÃ…â„¢ipojenÃƒÂ­ ke streamu se nezdaÃ…â„¢ilo.)',
	'channelNotSupportedFile': 'Tento kanÃƒÂ¡l nelze naÃ„ÂÃƒÂ­st kvÃ…Â¯li nekompatibilnÃƒÂ­mu formÃƒÂ¡tu.',
	'errorNoFavouritesYet': 'ZatÃƒÂ­m nemÃƒÂ¡te Ã…Â¾ÃƒÂ¡dnÃƒÂ© oblÃƒÂ­benÃƒÂ© kanÃƒÂ¡ly. Chcete-li kanÃƒÂ¡l pÃ…â„¢idat mezi oblÃƒÂ­benÃƒÂ©, stisknÃ„â€ºte Ã…Â½LUTÃƒâ€° tlaÃ„ÂÃƒÂ­tko.',
	'errorNoPlaylistHistory': 'V historii zatÃƒÂ­m Ã…Â¾ÃƒÂ¡dnÃƒÂ½ seznam skladeb. VloÃ…Â¾te prosÃƒÂ­m URL do pole nÃƒÂ­Ã…Â¾e.',

	// Menu
	'searchPlaceholder': 'HledÃƒÂ¡nÃƒÂ­',
	'allChannels': 'VÃ…Â¡echny kanÃƒÂ¡ly',
	'favourites': 'Ã¢Â­Â OblÃƒÂ­benÃƒÂ©',
	'groups': 'Skupiny',
	'channels': 'KanÃƒÂ¡ly',
	'settings_menu': 'NastavenÃƒÂ­',
	'epg_menu': 'EPG',
	'guide_menu': 'PrÃ…Â¯vodce',

	'guideControlsHeadline': 'OvlÃƒÂ¡dÃƒÂ¡nÃƒÂ­',

	// Advanced Settings
	'tabGeneralSettings': 'ObecnÃƒÂ© nastavenÃƒÂ­',
	'tabAdvancedSettings': 'PokroÃ„ÂilÃƒÂ© nastavenÃƒÂ­',
	'chooseMousewheel': 'KoleÃ„Âko myÃ…Â¡i',
	'volumeSetting': 'ZvÃƒÂ½Ã…Â¡enÃƒÂ­/snÃƒÂ­Ã…Â¾enÃƒÂ­ hlasitosti',
	'channelSetting': 'KanÃƒÂ¡l dopÃ…â„¢edu/dozadu',
	'reloadPlaylistOnStart': 'StÃƒÂ¡hnÃ„â€ºte si seznam skladeb pÃ…â„¢i kaÃ…Â¾dÃƒÂ©m spuÃ…Â¡tÃ„â€ºnÃƒÂ­',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'naÃ„ÂÃƒÂ­tÃƒÂ¡nÃƒÂ­...',
	'audioTrack': 'ZvukovÃƒÂ¡ stopa',
	'subtitleTrack': 'Stopa s titulky',
	'channelSettings': 'NastavenÃƒÂ­ kanÃƒÂ¡lu',
	'channelSettingSubtitle': 'titulky / zvuk',
	'channelSettingFavs': 'zaÃ…â„¢adit kanÃƒÂ¡l do oblÃƒÂ­benÃƒÂ½ch',
	'channelSettingPlayback': 'zobrazit ovlÃƒÂ¡dacÃƒÂ­ prvky pÃ…â„¢ehrÃƒÂ¡vÃƒÂ¡nÃƒÂ­',
	'channelSettingAudioDefault': 'vÃƒÂ½chozÃƒÂ­ skladba',
	'channelSettingSubNoTrack': 'nenÃƒÂ­ k dispozici',
	'channelSettingSubOff': 'zakÃƒÂ¡zat',
	'channelSettingResolution': 'rozliÃ…Â¡enÃƒÂ­',

	// EPG
	'epgSource': 'zdroj EPG',
	'usePlaylistEpgUrl': 'PouÃ…Â¾ÃƒÂ­t mÃƒÂ­sto toho zdroj EPG ze seznamu skladeb?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Interval zachycenÃƒÂ­ EPG',
	'downloadEpgButton': 'stÃƒÂ¡hnÃ„â€ºte si EPG nynÃƒÂ­',
	'noEpgForChannel': 'Pro tento kanÃƒÂ¡l nenÃƒÂ­ EPG',
	'noEpgUrlGiven': 'NenÃƒÂ­ nastavena Ã…Â¾ÃƒÂ¡dnÃƒÂ¡ adresa URL EPG',
	'epgQuotaExceededError': 'Nedostatek volnÃƒÂ©ho mÃƒÂ­sta pro uloÃ…Â¾enÃƒÂ­ dat EPG. UvolnÃ„â€ºte prosÃƒÂ­m nÃ„â€ºjakÃƒÂ© mÃƒÂ­sto. NapÃ…â„¢ÃƒÂ­klad smazÃƒÂ¡nÃƒÂ­m nepouÃ…Â¾ÃƒÂ­vanÃƒÂ½ch aplikacÃƒÂ­.',
	'epgNotCompatibleWithPlaylist': 'VÃƒÂ¡Ã…Â¡ seznam skladeb nenÃƒÂ­ kompatibilnÃƒÂ­ s touto adresou URL EGP.',
	'epgIsDownloading': 'NaÃ„ÂÃƒÂ­tÃƒÂ¡nÃƒÂ­ EPG ...',
	'epgChannelsProcessed': 'kanÃƒÂ¡ly: ',
	'epgProgramsProcessed': 'programy: ',
	'epgNow': 'NynÃƒÂ­',
	'epgAfter': 'Potom',

},
'ar': {
	'yes': 'Ã™â€ Ã˜Â¹Ã™â€¦', 'no': 'Ã™â€žÃ˜Â§',

	'm3uSource': 'URL Ã˜Â¥Ã™â€žÃ™â€° Ã™â€¦Ã™â€žÃ™Â m3u(8)',
	'chooseLang': 'Ã™â€žÃ˜ÂºÃ˜Â©',
	'usbLoadLabel': 'Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã™â€¦Ã™â€  USB',
	'openUsbButton': 'Ã˜ÂªÃ˜ÂµÃ™ÂÃ˜Â­ USB',
	'localLoadLabel': 'Ã™â€¦Ã™â€žÃ™Â m3u(8) Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã™â€žÃ™Å ',
	'openExplorerButton': 'Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ™Æ’Ã˜Â´Ã™Â Ã˜Â§Ã™â€žÃ™â€¦Ã™ÂÃ˜ÂªÃ™Ë†Ã˜Â­',
	'openHistoryButton': 'Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â§Ã˜Â±Ã™Å Ã˜Â®',
	'downloadButton': 'Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž',
	'saveButton': 'Ã˜Â§Ã˜Â­Ã™ÂÃ˜Â¸ Ã™Ë† Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â¨',
	'deleteButton': 'Ã˜Â­Ã˜Â°Ã™Â Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž',
	'generalSettingsButton': 'Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€¦Ã˜Â©',
	'advancedSettingsButton': 'Ã˜Â§Ã™â€žÃ˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã˜ÂªÃ™â€šÃ˜Â¯Ã™â€¦Ã˜Â©',

	'closeAppHint': 'Ã™â€¡Ã™â€ž Ã˜ÂªÃ˜Â±Ã™Å Ã˜Â¯ Ã˜Â¥Ã˜ÂºÃ™â€žÃ˜Â§Ã™â€š Ã™â€¡Ã˜Â°Ã˜Â§ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€šÃ˜Å¸',
	'hideModalHint': 'Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â£Ã™Å  Ã˜Â²Ã˜Â± Ã™â€žÃ˜Â¥Ã˜ÂºÃ™â€žÃ˜Â§Ã™â€š Ã™â€¡Ã˜Â°Ã™â€¡ Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â³Ã˜Â§Ã™â€žÃ˜Â©.',
	'playlistDownloaded': 'Ã˜ÂªÃ™â€¦ Ã˜ÂªÃ™â€ Ã˜Â²Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã˜Â¨Ã™â€ Ã˜Â¬Ã˜Â§Ã˜Â­. Ã˜ÂªÃ™â€¦ Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž <br>Ã™Âª i Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª.',
	'channelsLoaded': 'Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª',
	'filterNoResults': 'Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ™â€¦ Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â«Ã™Ë†Ã˜Â± Ã˜Â¹Ã™â€žÃ™â€° Ã™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª Ã™â€žÃ™â€žÃ™â€¦Ã˜Â±Ã˜Â´Ã˜Â­ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã˜Â·Ã™â€°.',

	'redButtonHint': '<span class="red-button">A</span> Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â­Ã˜Â«',
	'helpHint': 'Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â²Ã˜Â± <span class="red-button">A</span> Ã™â€žÃ˜Â¥Ã˜Â¯Ã˜Â±Ã˜Â§Ã˜Â¬ Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¬Ã˜Â±Ã™Å Ã˜Â¨Ã™Å Ã˜Â©.<br><br>Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã˜Â¹Ã™â€žÃ™â€° INFO Ã˜Â£Ã™Ë† GUIDE Ã˜Â¨Ã˜Â¬Ã™â€¡Ã˜Â§Ã˜Â² Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™Æ’Ã™â€¦ Ã˜Â¹Ã™â€  Ã˜Â¨Ã™ÂÃ˜Â¹Ã˜Â¯ Ã™ÂÃ™Å  Ã˜Â£Ã™Å  Ã™Ë†Ã™â€šÃ˜Âª Ã™â€žÃ™â€žÃ˜Â­Ã˜ÂµÃ™Ë†Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â¯Ã™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦.',

	'supportContact': 'Ã™â€žÃ™â€¦Ã˜Â²Ã™Å Ã˜Â¯ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Å’ Ã™Å Ã˜Â±Ã˜Â¬Ã™â€° Ã˜Â²Ã™Å Ã˜Â§Ã˜Â±Ã˜Â© https://jeromelaliag.link/ar',
	'supportContactLinked': 'Ã™â€žÃ™â€¦Ã˜Â²Ã™Å Ã˜Â¯ Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜Å’ Ã™Å Ã˜Â±Ã˜Â¬Ã™â€° Ã˜Â²Ã™Å Ã˜Â§Ã˜Â±Ã˜Â© <a href="https://jeromelaliag.link/ar/" target="_blank">https://jeromelaliag.link/ar</a>',
	'donate': 'Ã˜Â¥Ã˜Â°Ã˜Â§ Ã™Æ’Ã™â€ Ã˜Âª Ã˜ÂªÃ˜Â­Ã˜Â¨ Ã™â€¡Ã˜Â°Ã˜Â§ Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€š Ã˜Å’ Ã™ÂÃ˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã˜Â¯Ã˜Â¹Ã™â€¦Ã™â€ Ã™Å  Ã˜Â¨Ã™â€šÃ™â€žÃ™Å Ã™â€ž Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â¨Ã˜Â±Ã˜Â¹. Ã™â€šÃ™â€¦ Ã˜Â¨Ã˜Â²Ã™Å Ã˜Â§Ã˜Â±Ã˜Â© <b class="NOBR">https://jeromelaliag.link</b> Ã˜Â£Ã™Ë† Ã˜Â¹Ã˜Â¨Ã˜Â± Ã˜Â±Ã™â€¦Ã˜Â² Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â³Ã˜ÂªÃ˜Â¬Ã˜Â§Ã˜Â¨Ã˜Â© Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â±Ã™Å Ã˜Â¹Ã˜Â©',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (credit card)',
	'downloadM3uStatus': 'Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž. Ã™ÂÃ˜Â¶Ã™â€žÃ˜Â§ Ã˜Â§Ã™â€ Ã˜ÂªÃ˜Â¸Ã˜Â± Ã™â€žÃ˜Â­Ã˜Â¸Ã˜Â©.',
	'usbMountedStatus': 'Ã˜Â´Ã™â€ Ã˜Âª USB',

	'connectionLost': 'Ã˜Â§Ã™â€ Ã™â€šÃ˜Â·Ã˜Â¹ Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â©. Ã™Å Ã˜Â±Ã˜Â¬Ã™â€° Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ˜Â´Ã˜Â¨Ã™Æ’Ã˜Â©.',
	'checkM3uError': 'Ã˜ÂªÃ˜Â¹Ã˜Â°Ã˜Â± Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž. Ã™Æ’Ã™Ë†Ã˜Â¯ Ã˜Â­Ã˜Â§Ã™â€žÃ˜Â© HTTP: ',
	'checkM3uFileError': 'Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž m3u(8) Ã˜ÂºÃ™Å Ã˜Â± Ã˜ÂµÃ˜Â§Ã™â€žÃ˜Â­Ã˜Â©. Ã™Å Ã˜Â±Ã˜Â¬Ã™â€° Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€¦Ã™â€žÃ™Â.',
	'checkM3uDownloadError': 'Ã˜ÂªÃ˜Â¹Ã˜Â°Ã˜Â± Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž. Ã™Å Ã˜Â±Ã˜Â¬Ã™â€° Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€šÃ™â€š Ã™â€¦Ã™â€  URL.',
	'checkM3uDownloadSizeError': 'Ã˜ÂªÃ˜Â­Ã˜ÂªÃ™Ë†Ã™Å  Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã˜Â¹Ã™â€žÃ™â€° Ã™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª Ã™Æ’Ã˜Â«Ã™Å Ã˜Â±Ã˜Â© Ã˜Â¬Ã˜Â¯Ã™â€¹Ã˜Â§. Ã™Å Ã˜Â±Ã˜Â¬Ã™â€° Ã˜ÂªÃ™â€šÃ™â€žÃ™Å Ã™â€žÃ™â€¡Ã˜Â§ Ã˜Â¥Ã™â€žÃ™â€° 20.000 Ã™â€šÃ™â€ Ã˜Â§Ã˜Â© Ã™Æ’Ã˜Â­Ã˜Â¯ Ã˜Â£Ã™â€šÃ˜ÂµÃ™â€°.',
	'checkM3uTimeoutError': 'Ã˜Â§Ã™â€ Ã˜ÂªÃ™â€¡Ã˜Âª Ã˜Â§Ã™â€žÃ™â€¦Ã™â€¡Ã™â€žÃ˜Â© Ã˜Â£Ã˜Â«Ã™â€ Ã˜Â§Ã˜Â¡ Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã˜ÂµÃ˜Â© Ã˜Â¨Ã™Æ’. Ã˜Â­Ã˜Â§Ã™Ë†Ã™â€ž Ã™â€¦Ã˜Â±Ã˜Â© Ã˜Â§Ã˜Â®Ã˜Â±Ã™â€°.',
	'errorNoUsbMounted': 'Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ™â€¦ Ã˜Â§Ã™â€žÃ™Æ’Ã˜Â´Ã™Â Ã˜Â¹Ã™â€  Ã™Ë†Ã˜Â­Ã˜Â¯Ã˜Â© Ã˜ÂªÃ˜Â®Ã˜Â²Ã™Å Ã™â€  USB. Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã˜ÂªÃ™Ë†Ã˜ÂµÃ™Å Ã™â€ž Ã˜Â¬Ã™â€¡Ã˜Â§Ã˜Â² Ã˜ÂªÃ˜Â®Ã˜Â²Ã™Å Ã™â€  USB Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã™â€¹.',
	'errorNoM3uUrl': 'Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã˜Â¥Ã˜Â¯Ã˜Â®Ã˜Â§Ã™â€ž Ã˜Â¹Ã™â€ Ã™Ë†Ã˜Â§Ã™â€  URL Ã˜ÂµÃ˜Â§Ã™â€žÃ˜Â­ Ã™â€žÃ™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž m3u(8) Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã˜ÂµÃ˜Â© Ã˜Â¨Ã™Æ’.',
	'channelLoadError': 'Ã™â€¡Ã˜Â°Ã™â€¡ Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã˜Â§Ã˜Â© Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â±Ã˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ™Ë†Ã™â€šÃ˜Âª Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â§Ã™â€žÃ™Å . Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã™â€¦Ã˜Â¹Ã˜Â§Ã™Ë†Ã˜Â¯Ã˜Â© Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â§Ã™Ë†Ã™â€žÃ˜Â© Ã™ÂÃ™Å  Ã™Ë†Ã™â€šÃ˜Âª Ã™â€žÃ˜Â§Ã˜Â­Ã™â€š.',
	'channelLoadConnectionFailed': '(Ã™ÂÃ˜Â´Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â§Ã˜ÂªÃ˜ÂµÃ˜Â§Ã™â€ž Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â¯Ã™ÂÃ™â€š.)',
	'channelNotSupportedFile': 'Ã™â€žÃ˜Â§ Ã™Å Ã™â€¦Ã™Æ’Ã™â€  Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã™â€¡Ã˜Â°Ã™â€¡ Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã˜Â§Ã˜Â© Ã˜Â¨Ã˜Â³Ã˜Â¨Ã˜Â¨ Ã˜ÂªÃ™â€ Ã˜Â³Ã™Å Ã™â€š Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã˜Â§Ã™ÂÃ™â€š.',
	'errorNoFavouritesYet': 'Ã™â€žÃ™Å Ã˜Â³ Ã™â€žÃ˜Â¯Ã™Å Ã™Æ’ Ã˜Â£Ã™Å  Ã™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª Ã™â€¦Ã™ÂÃ˜Â¶Ã™â€žÃ˜Â© Ã˜Â­Ã˜ÂªÃ™â€° Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ . Ã˜Â§Ã˜Â¶Ã˜ÂºÃ˜Â· Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â²Ã˜Â± Ã˜Â§Ã™â€žÃ˜Â£Ã˜ÂµÃ™ÂÃ˜Â± Ã™â€žÃ˜ÂªÃ™ÂÃ˜Â¶Ã™Å Ã™â€ž Ã™â€šÃ™â€ Ã˜Â§Ã˜Â©.',
	'errorNoPlaylistHistory': 'Ã™â€žÃ˜Â§ Ã˜ÂªÃ™Ë†Ã˜Â¬Ã˜Â¯ Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â§Ã˜Â±Ã™Å Ã˜Â® Ã˜Â­Ã˜ÂªÃ™â€° Ã˜Â§Ã™â€žÃ˜Â§Ã™â€ . Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã˜Â¥Ã˜Â¯Ã˜Â®Ã˜Â§Ã™â€ž Ã˜Â¹Ã™â€ Ã™Ë†Ã˜Â§Ã™â€  URL Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜Â­Ã™â€šÃ™â€ž Ã˜Â£Ã˜Â¯Ã™â€ Ã˜Â§Ã™â€¡.',

	// Menu
	'searchPlaceholder': 'Ã˜Â¨Ã˜Â­Ã˜Â«',
	'allChannels': 'Ã˜Â¬Ã™â€¦Ã™Å Ã˜Â¹ Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª',
	'favourites': 'Ã¢Â­Â Ã˜Â§Ã™â€žÃ™â€¦Ã™ÂÃ˜Â¶Ã™â€žÃ˜Â©',
	'groups': 'Ã™â€¦Ã˜Â¬Ã™â€¦Ã™Ë†Ã˜Â¹Ã˜Â§Ã˜Âª',
	'channels': 'Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª',
	'settings_menu': 'Ã˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª',
	'epg_menu': 'Ã˜Â¯Ã™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â¬ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å ',
	'guide_menu': 'Ã™â€¦Ã˜Â±Ã˜Â´Ã˜Â¯',

	'guideControlsHeadline': 'Ã˜Â§Ã™â€žÃ˜Â¶Ã™Ë†Ã˜Â§Ã˜Â¨Ã˜Â·',

	// Advanced Settings
	'tabGeneralSettings': 'Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ˜Â¹Ã˜Â§Ã™â€¦Ã˜Â©',
	'tabAdvancedSettings': 'Ã˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã™â€¦Ã˜ÂªÃ™â€šÃ˜Â¯Ã™â€¦Ã˜Â©',
	'chooseMousewheel': 'Ã˜Â¹Ã˜Â¬Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ™ÂÃ˜Â£Ã˜Â±Ã˜Â©',
	'volumeSetting': 'Ã˜Â±Ã™ÂÃ˜Â¹ Ã˜Â§Ã™â€žÃ˜ÂµÃ™Ë†Ã˜Âª / Ã˜Â®Ã™ÂÃ˜Â¶Ã™â€¡',
	'channelSetting': 'Ã™â€šÃ™â€ Ã˜Â§Ã˜Â© Ã˜Â¥Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã˜Â§Ã™â€¦ / Ã˜Â§Ã™â€žÃ˜Â®Ã™â€žÃ™Â',
	'reloadPlaylistOnStart': 'Ã™â€šÃ™â€¦ Ã˜Â¨Ã˜ÂªÃ™â€ Ã˜Â²Ã™Å Ã™â€ž Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã™ÂÃ™Å  Ã™Æ’Ã™â€ž Ã˜Â¨Ã˜Â¯Ã˜Â§Ã™Å Ã˜Â©',
	'bufferSetting': 'Ã˜Â¹Ã˜Â§Ã˜Â²Ã™â€žÃ˜Â© Ã˜Â§Ã™â€žÃ™ÂÃ™Å Ã˜Â¯Ã™Å Ã™Ë†',

	// Channel Settings
	'loading': 'Ã˜Â¬Ã˜Â§Ã˜Â±Ã™Å  Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž...',
	'audioTrack': 'Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â± Ã˜ÂµÃ™Ë†Ã˜ÂªÃ™Å ',
	'subtitleTrack': 'Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â± Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â±Ã˜Â¬Ã™â€¦Ã˜Â©',
	'channelSettings': 'Ã˜Â¥Ã˜Â¹Ã˜Â¯Ã˜Â§Ã˜Â¯Ã˜Â§Ã˜Âª Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã˜Â§Ã˜Â©',
	'channelSettingSubtitle': 'Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€ Ã™Ë†Ã˜Â§Ã™â€  Ã˜Â§Ã™â€žÃ™ÂÃ˜Â±Ã˜Â¹Ã™Å  / Ã˜Â§Ã™â€žÃ˜ÂµÃ™Ë†Ã˜Âª',
	'channelSettingFavs': 'Ã˜Â¶Ã˜Â¹ Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã˜Â§Ã˜Â© Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ™â€¦Ã™ÂÃ˜Â¶Ã™â€žÃ˜Â©',
	'channelSettingPlayback': 'Ã˜Â¥Ã˜Â¸Ã™â€¡Ã˜Â§Ã˜Â± Ã˜Â¹Ã™â€ Ã˜Â§Ã˜ÂµÃ˜Â± Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â­Ã™Æ’Ã™â€¦ Ã™ÂÃ™Å  Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž',
	'channelSettingAudioDefault': 'Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã˜Â± Ã˜Â§Ã™â€žÃ˜Â§Ã™ÂÃ˜ÂªÃ˜Â±Ã˜Â§Ã˜Â¶Ã™Å ',
	'channelSettingSubNoTrack': 'Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã™ÂÃ˜Â±',
	'channelSettingSubOff': 'Ã˜ÂªÃ˜Â¹Ã˜Â·Ã™Å Ã™â€ž',
	'channelSettingResolution': 'Ã˜Â§Ã™â€žÃ˜Â¯Ã™â€šÃ˜Â©',

	// EPG
	'epgSource': 'Ã™â€¦Ã˜ÂµÃ˜Â¯Ã˜Â± EPG',
	'usePlaylistEpgUrl': 'Ã˜Â§Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦ Ã™â€¦Ã˜ÂµÃ˜Â¯Ã˜Â± EPG Ã™â€¦Ã™â€  Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã˜ÂµÃ˜Â© Ã˜Â¨Ã™Æ’ Ã˜Â¨Ã˜Â¯Ã™â€žÃ˜Â§Ã™â€¹ Ã™â€¦Ã™â€  Ã˜Â°Ã™â€žÃ™Æ’Ã˜Å¸',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Ã˜Â§Ã™â€žÃ™ÂÃ˜Â§Ã˜ÂµÃ™â€ž Ã˜Â§Ã™â€žÃ˜Â²Ã™â€¦Ã™â€ Ã™Å  Ã™â€žÃ˜Â³Ã˜Â­Ã˜Â¨ EPG',
	'downloadEpgButton': 'Ã™â€šÃ™â€¦ Ã˜Â¨Ã˜ÂªÃ™â€ Ã˜Â²Ã™Å Ã™â€ž Ã˜Â¯Ã™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â¬ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å  Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ ',
	'noEpgForChannel': 'Ã™â€žÃ˜Â§ Ã™Å Ã™Ë†Ã˜Â¬Ã˜Â¯ Ã˜Â¯Ã™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â¬ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å  Ã™â€žÃ™â€¡Ã˜Â°Ã™â€¡ Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã˜Â§Ã˜Â©',
	'noEpgUrlGiven': 'Ã™â€žÃ™â€¦ Ã™Å Ã˜ÂªÃ™â€¦ Ã˜ÂªÃ˜Â¹Ã™Å Ã™Å Ã™â€  Ã˜Â¹Ã™â€ Ã™Ë†Ã˜Â§Ã™â€  URL Ã™â€žÃ™â‚¬ EPG',
	'epgQuotaExceededError': 'Ã™â€žÃ˜Â§ Ã˜ÂªÃ™Ë†Ã˜Â¬Ã˜Â¯ Ã™â€¦Ã˜Â³Ã˜Â§Ã˜Â­Ã˜Â© Ã˜Â®Ã˜Â§Ã™â€žÃ™Å Ã˜Â© Ã™Æ’Ã˜Â§Ã™ÂÃ™Å Ã˜Â© Ã™â€žÃ˜Â­Ã™ÂÃ˜Â¸ Ã˜Â¨Ã™Å Ã˜Â§Ã™â€ Ã˜Â§Ã˜Âª Ã˜Â¯Ã™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â¬ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å . Ã˜Â§Ã™â€žÃ˜Â±Ã˜Â¬Ã˜Â§Ã˜Â¡ Ã˜Â¥Ã˜Â®Ã™â€žÃ˜Â§Ã˜Â¡ Ã˜Â¨Ã˜Â¹Ã˜Â¶ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜Â§Ã˜Â­Ã˜Â©. Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â³Ã˜Â¨Ã™Å Ã™â€ž Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â«Ã˜Â§Ã™â€ž Ã˜Â¹Ã™â€  Ã˜Â·Ã˜Â±Ã™Å Ã™â€š Ã˜Â­Ã˜Â°Ã™Â Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â·Ã˜Â¨Ã™Å Ã™â€šÃ˜Â§Ã˜Âª Ã˜ÂºÃ™Å Ã˜Â± Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â³Ã˜ÂªÃ˜Â®Ã˜Â¯Ã™â€¦Ã˜Â©.',
	'epgNotCompatibleWithPlaylist': 'Ã™â€šÃ˜Â§Ã˜Â¦Ã™â€¦Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂªÃ˜Â´Ã˜ÂºÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â®Ã˜Â§Ã˜ÂµÃ˜Â© Ã˜Â¨Ã™Æ’ Ã˜ÂºÃ™Å Ã˜Â± Ã™â€¦Ã˜ÂªÃ™Ë†Ã˜Â§Ã™ÂÃ™â€šÃ˜Â© Ã™â€¦Ã˜Â¹ Ã˜Â¹Ã™â€ Ã™Ë†Ã˜Â§Ã™â€  URL Ã™â€¡Ã˜Â°Ã˜Â§.',
	'epgIsDownloading': 'Ã˜ÂªÃ˜Â­Ã™â€¦Ã™Å Ã™â€ž Ã˜Â¯Ã™â€žÃ™Å Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â¬ Ã˜Â§Ã™â€žÃ˜Â¥Ã™â€žÃ™Æ’Ã˜ÂªÃ˜Â±Ã™Ë†Ã™â€ Ã™Å  ...',
	'epgChannelsProcessed': 'Ã˜Â§Ã™â€žÃ™â€šÃ™â€ Ã™Ë†Ã˜Â§Ã˜Âª: ',
	'epgProgramsProcessed': 'Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã˜Â§Ã™â€¦Ã˜Â¬: ',
	'epgNow': 'Ã˜Â§Ã™â€žÃ˜Â¢Ã™â€ ',
	'epgAfter': 'Ã˜Â¨Ã˜Â¹Ã˜Â¯ Ã˜Â°Ã™â€žÃ™Æ’',

},
'fi': {
	'yes': 'joo', 'no': 'ei',

	'm3uSource': 'URL m3u(8)-tiedostoon',
	'chooseLang': 'Kieli',
	'usbLoadLabel': 'Soittolista USB:ltÃƒÂ¤',
	'openUsbButton': 'selata USB:tÃƒÂ¤',
	'localLoadLabel': 'Paikallinen m3u(8)-tiedosto',
	'openExplorerButton': 'avoin tutkimusmatkailija',
	'openHistoryButton': 'historia',
	'downloadButton': 'lataa soittolista',
	'saveButton': 'tallenna ja pelaa',
	'deleteButton': 'poista soittolista',
	'generalSettingsButton': 'Yleiset asetukset',
	'advancedSettingsButton': 'LisÃƒÂ¤asetukset',

	'closeAppHint': 'Haluatko sulkea tÃƒÂ¤mÃƒÂ¤n sovelluksen?',
	'hideModalHint': 'Sulje tÃƒÂ¤mÃƒÂ¤ viesti painamalla mitÃƒÂ¤ tahansa painiketta.',
	'playlistDownloaded': 'Soittolistan lataus onnistui.<br>%i kanavaa ladattu.',
	'channelsLoaded': 'kanavia',
	'filterNoResults': 'Ei lÃƒÂ¶ydetty kanavia annetulle suodattimelle.',

	'redButtonHint': '<span class="red-button">A</span> etsiÃƒÂ¤',
	'helpHint': 'LisÃƒÂ¤ÃƒÂ¤ esittelykanavaluettelo painamalla <span class="red-button">A</span>-painiketta.<br><br>Saat kÃƒÂ¤yttÃƒÂ¶oppaan milloin tahansa painamalla kaukosÃƒÂ¤ÃƒÂ¤timen INFO-painiketta.',

	'supportContact': 'LisÃƒÂ¤tietoja on osoitteessa https://jeromelaliag.link/fi',
	'supportContactLinked': 'LisÃƒÂ¤tietoja on osoitteessa <a href="https://jeromelaliag.link/fi/" target="_blank">https://jeromelaliag.link/fi</a>',
	'donate': 'Jos pidÃƒÂ¤t tÃƒÂ¤stÃƒÂ¤ sovelluksesta, tue minua pienellÃƒÂ¤ lahjoituksella.<br>KÃƒÂ¤y osoitteessa <b class="NOBR">https://jeromelaliag.link</b><br>tai QR-koodin kautta.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (luottokortti)',
	'downloadM3uStatus': 'Ladataan soittolistaa. Odota hetki.',
	'usbMountedStatus': 'USB kiinnitetty',

	'connectionLost': 'Verkkoyhteys katkesi. Tarkista verkkosi.',
	'checkM3uError': 'Soittolistaa ei voitu ladata. HTTP-tilakoodi: ',
	'checkM3uFileError': 'Ei kelvollinen m3u(8)-soittolista. Tarkista tiedosto.',
	'checkM3uDownloadError': 'Soittolistaa ei voitu ladata. Tarkista URL-osoite.',
	'checkM3uDownloadSizeError': 'Soittolista sisÃƒÂ¤ltÃƒÂ¤ÃƒÂ¤ liian monta kanavaa. VÃƒÂ¤hennÃƒÂ¤ ne enintÃƒÂ¤ÃƒÂ¤n 20.000 kanavaan.',
	'checkM3uTimeoutError': 'Aikakatkaisu tapahtui soittolistaasi ladattaessa. YritÃƒÂ¤ uudelleen.',
	'errorNoUsbMounted': 'USB-tallennustilaa ei havaittu. LiitÃƒÂ¤ ensin USB-tallennuslaite.',
	'errorNoM3uUrl': 'Anna kelvollinen URL-osoite m3u(8)-soittolistallesi.',
	'channelLoadError': 'TÃƒÂ¤mÃƒÂ¤ kanava ei ole tÃƒÂ¤llÃƒÂ¤ hetkellÃƒÂ¤ saatavilla. YritÃƒÂ¤ uudelleen myÃƒÂ¶hemmin.',
	'channelLoadConnectionFailed': '(Yhteyden muodostaminen streamiin epÃƒÂ¤onnistui.)',
	'channelNotSupportedFile': 'TÃƒÂ¤tÃƒÂ¤ kanavaa ei voi ladata, koska muoto ei ole yhteensopiva.',
	'errorNoFavouritesYet': 'Sinulla ei ole vielÃƒÂ¤ suosikkikanavia. Paina KELTAISTA painiketta lisÃƒÂ¤tÃƒÂ¤ksesi kanavan suosikkeihin.',
	'errorNoPlaylistHistory': 'Ei vielÃƒÂ¤ soittolistaa historiassa. LisÃƒÂ¤ÃƒÂ¤ URL-osoite alla olevaan kenttÃƒÂ¤ÃƒÂ¤n.',

	// Menu
	'searchPlaceholder': 'EtsintÃƒÂ¤',
	'allChannels': 'Kaikki kanavat',
	'favourites': 'Ã¢Â­Â Suosikit',
	'groups': 'RyhmÃƒÂ¤t',
	'channels': 'Kanavat',
	'settings_menu': 'Asetukset',
	'epg_menu': 'EPG',
	'guide_menu': 'Opas',

	'guideControlsHeadline': 'SÃƒÂ¤ÃƒÂ¤timet',

	// Advanced Settings
	'tabGeneralSettings': 'Yleiset asetukset',
	'tabAdvancedSettings': 'LisÃƒÂ¤asetukset',
	'chooseMousewheel': 'Hiiren rulla',
	'volumeSetting': 'Ãƒâ€žÃƒÂ¤nenvoimakkuus ylÃƒÂ¶s/alas',
	'channelSetting': 'Kanava eteen/taakse',
	'reloadPlaylistOnStart': 'Lataa soittolista jokaisen kÃƒÂ¤ynnistyksen yhteydessÃƒÂ¤',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'ladataan...',
	'audioTrack': 'Ãƒâ€žÃƒÂ¤niraita',
	'subtitleTrack': 'Tekstitysraita',
	'channelSettings': 'Kanavan asetukset',
	'channelSettingSubtitle': 'tekstitys / ÃƒÂ¤ÃƒÂ¤ni',
	'channelSettingFavs': 'laita kanava suosikkeihin',
	'channelSettingPlayback': 'nÃƒÂ¤ytÃƒÂ¤ toistosÃƒÂ¤ÃƒÂ¤timet',
	'channelSettingAudioDefault': 'oletusraita',
	'channelSettingSubNoTrack': 'ei saatavilla',
	'channelSettingSubOff': 'poista kÃƒÂ¤ytÃƒÂ¶stÃƒÂ¤',
	'channelSettingResolution': 'resoluutio',

	// EPG
	'epgSource': 'EPG lÃƒÂ¤hde',
	'usePlaylistEpgUrl': 'KÃƒÂ¤ytÃƒÂ¤tkÃƒÂ¶ sen sijaan EPG-lÃƒÂ¤hdettÃƒÂ¤ soittolistastasi?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'EPG-hakuvÃƒÂ¤li',
	'downloadEpgButton': 'lataa EPG nyt',
	'noEpgForChannel': 'Ei EPG:tÃƒÂ¤ tÃƒÂ¤lle kanavalle',
	'noEpgUrlGiven': 'EPG:n URL-osoitetta ei ole asetettu',
	'epgQuotaExceededError': 'Ei tarpeeksi vapaata tilaa EPG-tietojen tallentamiseen. Vapauta tilaa. Esimerkiksi poistamalla kÃƒÂ¤yttÃƒÂ¤mÃƒÂ¤ttÃƒÂ¶mÃƒÂ¤t sovellukset.',
	'epgNotCompatibleWithPlaylist': 'Soittolistasi ei ole yhteensopiva tÃƒÂ¤mÃƒÂ¤n EGP-URL-osoitteen kanssa.',
	'epgIsDownloading': 'Ladataan EPG:tÃƒÂ¤ ...',
	'epgChannelsProcessed': 'kanavat: ',
	'epgProgramsProcessed': 'ohjelmat: ',
	'epgNow': 'Nyt',
	'epgAfter': 'Sen jÃƒÂ¤lkeen',

},
'ro': {
	'yes': 'da', 'no': 'nu',

	'm3uSource': 'URL la fiÃˆâ„¢ierul m3u(8).',
	'chooseLang': 'Limba',
	'usbLoadLabel': 'Playlist de pe USB',
	'openUsbButton': 'rÃ„Æ’sfoieÃˆâ„¢te USB',
	'localLoadLabel': 'FiÃˆâ„¢ier m3u(8) local',
	'openExplorerButton': 'deschide exploratorul',
	'openHistoryButton': 'istorie',
	'downloadButton': 'ÃƒÂ®ncÃ„Æ’rcaÃˆâ€ºi playlistul',
	'saveButton': 'salvaÃˆâ€ºi Ãˆâ„¢i jucaÃˆâ€ºi',
	'deleteButton': 'Ãˆâ„¢terge lista de redare',
	'generalSettingsButton': 'SetÃ„Æ’ri generale',
	'advancedSettingsButton': 'SetÃ„Æ’ri avansate',

	'closeAppHint': 'DoriÃˆâ€ºi sÃ„Æ’ ÃƒÂ®nchideÃˆâ€ºi aceastÃ„Æ’ aplicaÃˆâ€ºie?',
	'hideModalHint': 'ApÃ„Æ’saÃˆâ€ºi orice buton pentru a ÃƒÂ®nchide acest mesaj.',
	'playlistDownloaded': 'Lista de redare a fost descÃ„Æ’rcatÃ„Æ’ cu succes.<br>%i canale ÃƒÂ®ncÃ„Æ’rcate.',
	'channelsLoaded': 'canale',
	'filterNoResults': 'Nu s-au gÃ„Æ’sit canale pentru filtrul dat.',

	'redButtonHint': '<span class="red-button">A</span> cÃ„Æ’utare',
	'helpHint': 'ApÃ„Æ’saÃˆâ€ºi butonul <span class="red-button">A</span> pentru a insera lista de canale demonstrative.<br><br>ApÃ„Æ’saÃˆâ€ºi ÃƒÂ®n orice moment INFO sau GHID de pe telecomandÃ„Æ’ pentru un ghid al utilizatorului.',

	'supportContact': 'Pentru mai multe informaÃˆâ€ºii, vizitaÃˆâ€ºi https://jeromelaliag.link/ro',
	'supportContactLinked': 'Pentru mai multe informaÃˆâ€ºii, vizitaÃˆâ€ºi <a href="https://jeromelaliag.link/ro/" target="_blank">https://jeromelaliag.link/ro</a>',
	'donate': 'DacÃ„Æ’ vÃ„Æ’ place aceastÃ„Æ’ aplicaÃˆâ€ºie, vÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ mÃ„Æ’ susÃˆâ€ºineÃˆâ€ºi cu o micÃ„Æ’ donaÃˆâ€ºie.<br>VizitaÃˆâ€ºi <b class="NOBR">https://jeromelaliag.link</b><br>sau prin codul QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (Card de credit)',
	'downloadM3uStatus': 'Se ÃƒÂ®ncarcÃ„Æ’ lista de redare. Te rog asteapta un moment.',
	'usbMountedStatus': 'Montat pe USB',

	'connectionLost': 'S-a pierdut conexiunea la reÃˆâ€ºea. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ vÃ„Æ’ verificaÃˆâ€ºi reÃˆâ€ºeaua.',
	'checkM3uError': 'Lista de redare nu a putut fi ÃƒÂ®ncÃ„Æ’rcatÃ„Æ’. Cod de stare HTTP: ',
	'checkM3uFileError': 'Nu este o listÃ„Æ’ de redare m3u(8) validÃ„Æ’. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ verificaÃˆâ€ºi fiÃˆâ„¢ierul.',
	'checkM3uDownloadError': 'Lista de redare nu a putut fi ÃƒÂ®ncÃ„Æ’rcatÃ„Æ’. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ verificaÃˆâ€ºi adresa URL.',
	'checkM3uDownloadSizeError': 'Lista de redare conÃˆâ€ºine prea multe canale. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ le reduceÃˆâ€ºi la maximum 20.000 de canale.',
	'checkM3uTimeoutError': 'Timeout a avut loc la ÃƒÂ®ncÃ„Æ’rcarea listei de redare. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ ÃƒÂ®ncercaÃˆâ€ºi din nou.',
	'errorNoUsbMounted': 'Nu a fost detectatÃ„Æ’ niciun spaÃˆâ€ºiu de stocare USB. ConectaÃˆâ€ºi mai ÃƒÂ®ntÃƒÂ¢i un dispozitiv de stocare USB.',
	'errorNoM3uUrl': 'VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ introduceÃˆâ€ºi o adresÃ„Æ’ URL validÃ„Æ’ pentru lista dvs. de redare m3u(8).',
	'channelLoadError': 'Acest canal nu este disponibil momentan. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ ÃƒÂ®ncercaÃˆâ€ºi din nou mai tÃƒÂ¢rziu.',
	'channelLoadConnectionFailed': '(Conexiunea la flux a eÃˆâ„¢uat.)',
	'channelNotSupportedFile': 'Acest canal nu poate fi ÃƒÂ®ncÃ„Æ’rcat din cauza unui format incompatibil.',
	'errorNoFavouritesYet': 'Nu aveÃˆâ€ºi ÃƒÂ®ncÃ„Æ’ niciun canal preferat. ApÃ„Æ’saÃˆâ€ºi butonul GALBEN pentru a favoriza un canal.',
	'errorNoPlaylistHistory': 'ÃƒÅ½ncÃ„Æ’ nu existÃ„Æ’ playlist ÃƒÂ®n istorie. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ introduceÃˆâ€ºi o adresÃ„Æ’ URL ÃƒÂ®n cÃƒÂ¢mpul de mai jos.',

	// Menu
	'searchPlaceholder': 'CÃ„Æ’utare',
	'allChannels': 'Toate canalele',
	'favourites': 'Ã¢Â­Â Favorite',
	'groups': 'Grupuri',
	'channels': 'Canale',
	'settings_menu': 'SetÃ„Æ’ri',
	'epg_menu': 'EPG',
	'guide_menu': 'Ghid',

	'guideControlsHeadline': 'Controale',

	// Advanced Settings
	'tabGeneralSettings': 'SetÃ„Æ’ri generale',
	'tabAdvancedSettings': 'SetÃ„Æ’ri avansate',
	'chooseMousewheel': 'Roata mouse-ului',
	'volumeSetting': 'Volum sus/jos',
	'channelSetting': 'Canal ÃƒÂ®nainte/ÃƒÂ®napoi',
	'reloadPlaylistOnStart': 'DescÃ„Æ’rcaÃˆâ€ºi lista de redare la fiecare pornire',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'ÃƒÂ®ncÃ„Æ’rcare...',
	'audioTrack': 'PistÃ„Æ’ audio',
	'subtitleTrack': 'PistÃ„Æ’ de subtitrare',
	'channelSettings': 'SetÃ„Æ’ri canal',
	'channelSettingSubtitle': 'subtitrare / audio',
	'channelSettingFavs': 'pun canalul ÃƒÂ®n favorite',
	'channelSettingPlayback': 'afiÃˆâ„¢eazÃ„Æ’ comenzile de redare',
	'channelSettingAudioDefault': 'melodie implicitÃ„Æ’',
	'channelSettingSubNoTrack': 'nu este disponibil',
	'channelSettingSubOff': 'dezactivare',
	'channelSettingResolution': 'rezoluÃˆâ€ºie',

	// EPG
	'epgSource': 'Sursa EPG',
	'usePlaylistEpgUrl': 'FolosiÃˆâ€ºi ÃƒÂ®n schimb sursa EPG din lista dvs. de redare?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Interval de preluare EPG',
	'downloadEpgButton': 'descÃ„Æ’rcaÃˆâ€ºi EPG acum',
	'noEpgForChannel': 'Nu existÃ„Æ’ EPG pentru acest canal',
	'noEpgUrlGiven': 'Nicio adresÃ„Æ’ URL EPG setatÃ„Æ’',
	'epgQuotaExceededError': 'Nu este suficient spaÃˆâ€ºiu liber pentru a salva datele EPG. VÃ„Æ’ rugÃ„Æ’m sÃ„Æ’ eliberaÃˆâ€ºi spaÃˆâ€ºiu. De exemplu, Ãˆâ„¢tergÃƒÂ¢nd aplicaÃˆâ€ºiile neutilizate.',
	'epgNotCompatibleWithPlaylist': 'Lista dvs. de redare nu este compatibilÃ„Æ’ cu aceastÃ„Æ’ adresÃ„Æ’ URL EGP.',
	'epgIsDownloading': 'Se ÃƒÂ®ncarcÃ„Æ’ EPG ...',
	'epgChannelsProcessed': 'canale: ',
	'epgProgramsProcessed': 'programe: ',
	'epgNow': 'Acum',
	'epgAfter': 'Dupa aceea',

},
'no': {
	'yes': 'ja', 'no': 'nei',

	'm3uSource': 'URL til m3u(8)-fil',
	'chooseLang': 'SprÃƒÂ¥k',
	'usbLoadLabel': 'Spilleliste fra USB',
	'openUsbButton': 'bla USB',
	'localLoadLabel': 'Lokal m3u(8)-fil',
	'openExplorerButton': 'ÃƒÂ¥pne filutforsker',
	'openHistoryButton': 'historie',
	'downloadButton': 'last spilleliste',
	'saveButton': 'lagre og spill',
	'deleteButton': 'slette spilleliste',
	'generalSettingsButton': 'hovedinnstillinger',
	'advancedSettingsButton': 'avansert',

	'closeAppHint': 'Vil du lukke denne appen?',
	'hideModalHint': 'Trykk pÃƒÂ¥ en knapp for ÃƒÂ¥ lukke denne meldingen.',
	'playlistDownloaded': 'Spillelisten er lastet ned.<br>%i kanaler er lastet.',
	'channelsLoaded': 'kanaler',
	'filterNoResults': 'Ingen kanaler funnet for angitt filter.',

	'redButtonHint': '<span class="red-button">A</span> gjennomsÃƒÂ¸ke',
	'helpHint': 'Trykk pÃƒÂ¥ <span class="red-button">A</span>-knappen for ÃƒÂ¥ sette inn en demokanalliste.<br><br>Trykk pÃƒÂ¥ INFO eller GUIDE pÃƒÂ¥ fjernkontrollen nÃƒÂ¥r som helst for ÃƒÂ¥ fÃƒÂ¥ en brukerveiledning.',

	'supportContact': 'For mer informasjon, besÃƒÂ¸k https://jeromelaliag.link/no',
	'supportContactLinked': 'For mer informasjon, besÃƒÂ¸k <a href="https://jeromelaliag.link/no/" target="_blank">https://jeromelaliag.link/no</a>',
	'donate': 'Hvis du liker denne appen, vennligst stÃƒÂ¸tte meg med en liten donasjon.<br>BesÃƒÂ¸k <b class="NOBR">https://jeromelaliag.link</b><br>eller via QR-kode.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kredittkort)',
	'downloadM3uStatus': 'Laster spilleliste. Vennligst vent et ÃƒÂ¸yeblikk.',
	'usbMountedStatus': 'USB-montert',

	'connectionLost': 'Nettverkstilkoblingen ble brutt. Vennligst sjekk nettverket ditt.',
	'checkM3uError': 'Kunne ikke laste inn spillelisten. HTTP-statuskode: ',
	'checkM3uFileError': 'Ikke en gyldig m3u(8)-spilleliste. Vennligst sjekk filen.',
	'checkM3uDownloadError': 'Kunne ikke laste inn spillelisten. Vennligst sjekk URL-en.',
	'checkM3uDownloadSizeError': 'Spillelisten inneholder for mange kanaler. Vennligst reduser dem til maks 20.000 kanaler.',
	'checkM3uTimeoutError': 'Tidsavbrudd oppsto under innlasting av spillelisten. VÃƒÂ¦r sÃƒÂ¥ snill, prÃƒÂ¸v pÃƒÂ¥ nytt.',
	'errorNoUsbMounted': 'Ingen USB-lagring oppdaget. Koble til en USB-lagringsenhet fÃƒÂ¸rst.',
	'errorNoM3uUrl': 'Vennligst skriv inn en gyldig URL til m3u(8) spillelisten din.',
	'channelLoadError': 'Denne kanalen er ikke tilgjengelig for ÃƒÂ¸yeblikket. PrÃƒÂ¸v igjen senere.',
	'channelLoadConnectionFailed': '(Tilkobling til strÃƒÂ¸mmen mislyktes.)',
	'channelNotSupportedFile': 'Denne kanalen kan ikke lastes pÃƒÂ¥ grunn av et inkompatibelt format.',
	'errorNoFavouritesYet': 'Du har ingen favorittkanaler ennÃƒÂ¥. Trykk pÃƒÂ¥ den GULE knappen for ÃƒÂ¥ favoritt en kanal.',
	'errorNoPlaylistHistory': 'Ingen spilleliste i historien ennÃƒÂ¥. Vennligst skriv inn en URL i feltet nedenfor.',

	// Menu
	'searchPlaceholder': 'SÃƒÂ¸k',
	'allChannels': 'Alle kanaler',
	'favourites': 'Ã¢Â­Â Favoritter',
	'groups': 'Grupper',
	'channels': 'Kanaler',
	'settings_menu': 'Innstillinger',
	'epg_menu': 'EPG',
	'guide_menu': 'Guide',

	'guideControlsHeadline': 'Kontroller',

	// Advanced Settings
	'tabGeneralSettings': 'Generelle innstillinger',
	'tabAdvancedSettings': 'Avanserte innstillinger',
	'chooseMousewheel': 'Mus hjul',
	'volumeSetting': 'Volum opp/ned',
	'channelSetting': 'Kanal fremover/bakover',
	'reloadPlaylistOnStart': 'Last ned spilleliste ved hver start',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'laster...',
	'audioTrack': 'Lydspor',
	'subtitleTrack': 'Undertekstspor',
	'channelSettings': 'Kanalinnstillinger',
	'channelSettingSubtitle': 'undertekst / lyd',
	'channelSettingFavs': 'sett kanal i favoritter',
	'channelSettingPlayback': 'vis avspillingskontroller',
	'channelSettingAudioDefault': 'standardspor',
	'channelSettingSubNoTrack': 'ikke tilgjengelig',
	'channelSettingSubOff': 'deaktiver',
	'channelSettingResolution': 'resolution',

	// EPG
	'epgSource': 'EPG-kilde',
	'usePlaylistEpgUrl': 'Vil du bruke EPG-kilde fra spillelisten din i stedet?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'EPG-gripeintervall',
	'downloadEpgButton': 'last ned EPG nÃƒÂ¥',
	'noEpgForChannel': 'Ingen EPG for denne kanalen',
	'noEpgUrlGiven': 'Ingen EPG URL satt',
	'epgQuotaExceededError': 'Ikke nok ledig plass til ÃƒÂ¥ lagre EPG-data. Vennligst frigjÃƒÂ¸r litt plass. For eksempel ved ÃƒÂ¥ slette ikke brukte apper.',
	'epgNotCompatibleWithPlaylist': 'Spillelisten din er ikke kompatibel med denne EGP-URL.',
	'epgIsDownloading': 'Laster inn EPG ...',
	'epgChannelsProcessed': 'kanaler: ',
	'epgProgramsProcessed': 'programmer: ',
	'epgNow': 'NÃƒÂ¥',
	'epgAfter': 'Etter det',

},
'el': {
	'yes': 'ÃŽÂÃŽÂ±ÃŽÂ¯', 'no': 'ÃÅ’Ãâ€¡ÃŽÂ¹',

	'm3uSource': 'URL ÃÆ’Ãâ€žÃŽÂ¿ ÃŽÂ±ÃÂÃâ€¡ÃŽÂµÃŽÂ¯ÃŽÂ¿ m3u(8).',
	'chooseLang': 'ÃŽâ€œÃŽÂ»ÃÅ½ÃÆ’ÃÆ’ÃŽÂ±',
	'usbLoadLabel': 'ÃŽâ€ºÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃŽÂ±Ãâ‚¬ÃÅ’ USB',
	'openUsbButton': 'Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃŽÂ®ÃŽÂ³ÃŽÂ·ÃÆ’ÃŽÂ· USB',
	'localLoadLabel': 'ÃŽÂ¤ÃŽÂ¿Ãâ‚¬ÃŽÂ¹ÃŽÂºÃÅ’ ÃŽÂ±ÃÂÃâ€¡ÃŽÂµÃŽÂ¯ÃŽÂ¿ m3u(8).',
	'openExplorerButton': 'ÃŽÂ±ÃŽÂ½ÃŽÂ¿ÃŽÂ¹Ãâ€¡Ãâ€žÃÅ’Ãâ€š ÃŽÂµÃŽÂ¾ÃŽÂµÃÂÃŽÂµÃâ€¦ÃŽÂ½ÃŽÂ·Ãâ€žÃŽÂ®Ãâ€š',
	'openHistoryButton': 'ÃŽÂ¹ÃÆ’Ãâ€žÃŽÂ¿ÃÂÃŽÂ¯ÃŽÂ±',
	'downloadButton': 'Ãâ€ ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š',
	'saveButton': 'ÃŽÂ±Ãâ‚¬ÃŽÂ¿ÃŽÂ¸ÃŽÂ·ÃŽÂºÃŽÂµÃÂÃÆ’Ãâ€žÃŽÂµ ÃŽÂºÃŽÂ±ÃŽÂ¹ Ãâ‚¬ÃŽÂ±ÃŽÂ¯ÃŽÂ¾Ãâ€žÃŽÂµ',
	'deleteButton': 'ÃŽÂ´ÃŽÂ¹ÃŽÂ±ÃŽÂ³ÃÂÃŽÂ±Ãâ€ ÃŽÂ® playlist',
	'generalSettingsButton': 'ÃŽâ€œÃŽÂµÃŽÂ½ÃŽÂ¹ÃŽÂºÃŽÂ­Ãâ€š ÃŽÂ¡Ãâ€¦ÃŽÂ¸ÃŽÂ¼ÃŽÂ¯ÃÆ’ÃŽÂµÃŽÂ¹Ãâ€š',
	'advancedSettingsButton': 'ÃŽ ÃÂÃŽÂ¿ÃŽÂ·ÃŽÂ³ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂµÃâ€š ÃŽÂ¡Ãâ€¦ÃŽÂ¸ÃŽÂ¼ÃŽÂ¯ÃÆ’ÃŽÂµÃŽÂ¹Ãâ€š',

	'closeAppHint': 'ÃŽËœÃŽÂ­ÃŽÂ»ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ½ÃŽÂ± ÃŽÂºÃŽÂ»ÃŽÂµÃŽÂ¯ÃÆ’ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ±Ãâ€¦Ãâ€žÃŽÂ®ÃŽÂ½ Ãâ€žÃŽÂ·ÃŽÂ½ ÃŽÂµÃâ€ ÃŽÂ±ÃÂÃŽÂ¼ÃŽÂ¿ÃŽÂ³ÃŽÂ®;',
	'hideModalHint': 'ÃŽ ÃŽÂ±Ãâ€žÃŽÂ®ÃÆ’Ãâ€žÃŽÂµ ÃŽÂ¿Ãâ‚¬ÃŽÂ¿ÃŽÂ¹ÃŽÂ¿ÃŽÂ´ÃŽÂ®Ãâ‚¬ÃŽÂ¿Ãâ€žÃŽÂµ ÃŽÂºÃŽÂ¿Ãâ€¦ÃŽÂ¼Ãâ‚¬ÃŽÂ¯ ÃŽÂ³ÃŽÂ¹ÃŽÂ± ÃŽÂ½ÃŽÂ± ÃŽÂºÃŽÂ»ÃŽÂµÃŽÂ¯ÃÆ’ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ±Ãâ€¦Ãâ€žÃÅ’ Ãâ€žÃŽÂ¿ ÃŽÂ¼ÃŽÂ®ÃŽÂ½Ãâ€¦ÃŽÂ¼ÃŽÂ±.',
	'playlistDownloaded': 'ÃŽâ€” ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃŽÂ»ÃŽÂ®Ãâ€ ÃŽÂ¸ÃŽÂ·ÃŽÂºÃŽÂµ ÃŽÂ¼ÃŽÂµ ÃŽÂµÃâ‚¬ÃŽÂ¹Ãâ€žÃâ€¦Ãâ€¡ÃŽÂ¯ÃŽÂ±.<br>ÃŽÂ¦ÃŽÂ¿ÃÂÃâ€žÃÅ½ÃŽÂ¸ÃŽÂ·ÃŽÂºÃŽÂ±ÃŽÂ½ %i ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±.',
	'channelsLoaded': 'ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±',
	'filterNoResults': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂ²ÃÂÃŽÂ­ÃŽÂ¸ÃŽÂ·ÃŽÂºÃŽÂ±ÃŽÂ½ ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ± ÃŽÂ³ÃŽÂ¹ÃŽÂ± Ãâ€žÃŽÂ¿ÃŽÂ½ ÃŽÂ´ÃŽÂ¿ÃÆ’ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂ¿ Ãâ€ ÃŽÂ¯ÃŽÂ»Ãâ€žÃÂÃŽÂ¿.',

	'redButtonHint': '<span class="red-button">A</span> ÃË†ÃŽÂ¬Ãâ€¡ÃŽÂ½Ãâ€°',
	'helpHint': 'ÃŽ ÃŽÂ±Ãâ€žÃŽÂ®ÃÆ’Ãâ€žÃŽÂµ Ãâ€žÃŽÂ¿ ÃŽÂºÃŽÂ¿Ãâ€¦ÃŽÂ¼Ãâ‚¬ÃŽÂ¯ <span class="red-button">A</span>-ÃŽÂ³ÃŽÂ¹ÃŽÂ± ÃŽÂ½ÃŽÂ± ÃŽÂµÃŽÂ¹ÃÆ’ÃŽÂ±ÃŽÂ³ÃŽÂ¬ÃŽÂ³ÃŽÂµÃâ€žÃŽÂµ Ãâ€žÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ±ÃŽÂ»ÃŽÂ¹ÃÅ½ÃŽÂ½ ÃŽÂµÃâ‚¬ÃŽÂ¯ÃŽÂ´ÃŽÂµÃŽÂ¹ÃŽÂ¾ÃŽÂ·Ãâ€š.<br><br>ÃŽ ÃŽÂ±Ãâ€žÃŽÂ®ÃÆ’Ãâ€žÃŽÂµ INFO ÃŽÂ® GUIDE ÃÆ’Ãâ€žÃŽÂ¿ Ãâ€žÃŽÂ·ÃŽÂ»ÃŽÂµÃâ€¡ÃŽÂµÃŽÂ¹ÃÂÃŽÂ¹ÃÆ’Ãâ€žÃŽÂ®ÃÂÃŽÂ¹ÃŽÂ¿ ÃŽÂ±ÃŽÂ½ÃŽÂ¬ Ãâ‚¬ÃŽÂ¬ÃÆ’ÃŽÂ± ÃÆ’Ãâ€žÃŽÂ¹ÃŽÂ³ÃŽÂ¼ÃŽÂ® ÃŽÂ³ÃŽÂ¹ÃŽÂ± ÃŽÂ­ÃŽÂ½ÃŽÂ±ÃŽÂ½ ÃŽÂ¿ÃŽÂ´ÃŽÂ·ÃŽÂ³ÃÅ’ Ãâ€¡ÃÂÃŽÂ®ÃÆ’ÃŽÂ·Ãâ€š.',

	'supportContact': 'ÃŽâ€œÃŽÂ¹ÃŽÂ± Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃÆ’ÃÆ’ÃÅ’Ãâ€žÃŽÂµÃÂÃŽÂµÃâ€š Ãâ‚¬ÃŽÂ»ÃŽÂ·ÃÂÃŽÂ¿Ãâ€ ÃŽÂ¿ÃÂÃŽÂ¯ÃŽÂµÃâ€š, ÃŽÂµÃâ‚¬ÃŽÂ¹ÃÆ’ÃŽÂºÃŽÂµÃâ€ Ãâ€žÃŽÂµÃŽÂ¯Ãâ€žÃŽÂµ Ãâ€žÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· https://jeromelaliag.link/gr',
	'supportContactLinked': 'ÃŽâ€œÃŽÂ¹ÃŽÂ± Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃÆ’ÃÆ’ÃÅ’Ãâ€žÃŽÂµÃÂÃŽÂµÃâ€š Ãâ‚¬ÃŽÂ»ÃŽÂ·ÃÂÃŽÂ¿Ãâ€ ÃŽÂ¿ÃÂÃŽÂ¯ÃŽÂµÃâ€š, ÃŽÂµÃâ‚¬ÃŽÂ¹ÃÆ’ÃŽÂºÃŽÂµÃâ€ Ãâ€žÃŽÂµÃŽÂ¯Ãâ€žÃŽÂµ Ãâ€žÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· <a href="https://jeromelaliag.link/gr/" target="_blank">https://jeromelaliag.link/gr</a>',
	'donate': 'ÃŽâ€˜ÃŽÂ½ ÃÆ’ÃŽÂ±Ãâ€š ÃŽÂ±ÃÂÃŽÂ­ÃÆ’ÃŽÂµÃŽÂ¹ ÃŽÂ±Ãâ€¦Ãâ€žÃŽÂ® ÃŽÂ· ÃŽÂµÃâ€ ÃŽÂ±ÃÂÃŽÂ¼ÃŽÂ¿ÃŽÂ³ÃŽÂ®, Ãâ€¦Ãâ‚¬ÃŽÂ¿ÃÆ’Ãâ€žÃŽÂ·ÃÂÃŽÂ¯ÃŽÂ¾Ãâ€žÃŽÂµ ÃŽÂ¼ÃŽÂµ ÃŽÂ¼ÃŽÂµ ÃŽÂ¼ÃŽÂ¹ÃŽÂ± ÃŽÂ¼ÃŽÂ¹ÃŽÂºÃÂÃŽÂ® ÃŽÂ´Ãâ€°ÃÂÃŽÂµÃŽÂ¬.<br>ÃŽâ€¢Ãâ‚¬ÃŽÂ¹ÃÆ’ÃŽÂºÃŽÂµÃâ€ Ãâ€žÃŽÂµÃŽÂ¯Ãâ€žÃŽÂµ Ãâ€žÃŽÂ· <b class="NOBR">https://jeromelaliag.link</b><br>ÃŽÂ® ÃŽÂ¼ÃŽÂ­ÃÆ’Ãâ€° QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (Ãâ‚¬ÃŽÂ¹ÃÆ’Ãâ€žÃâ€°Ãâ€žÃŽÂ¹ÃŽÂºÃŽÂ® ÃŽÂºÃŽÂ¬ÃÂÃâ€žÃŽÂ±)',
	'downloadM3uStatus': 'ÃŽÂ¦ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š. ÃŽ ÃŽÂ±ÃÂÃŽÂ±ÃŽÂºÃŽÂ±ÃŽÂ»ÃÅ½ Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ¼ÃŽÂ¹ÃŽÂ± ÃÆ’Ãâ€žÃŽÂ¹ÃŽÂ³ÃŽÂ¼ÃŽÂ®.',
	'usbMountedStatus': 'ÃŽÂ¤ÃŽÂ¿Ãâ‚¬ÃŽÂ¿ÃŽÂ¸ÃŽÂ­Ãâ€žÃŽÂ·ÃÆ’ÃŽÂ· USB',

	'connectionLost': 'ÃŽâ€” ÃÆ’ÃÂÃŽÂ½ÃŽÂ´ÃŽÂµÃÆ’ÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂºÃâ€žÃÂÃŽÂ¿Ãâ€¦ Ãâ€¡ÃŽÂ¬ÃŽÂ¸ÃŽÂ·ÃŽÂºÃŽÂµ. ÃŽâ€¢ÃŽÂ»ÃŽÂ­ÃŽÂ³ÃŽÂ¾Ãâ€žÃŽÂµ Ãâ€žÃŽÂ¿ ÃŽÂ´ÃŽÂ¯ÃŽÂºÃâ€žÃâ€¦ÃÅ’ ÃÆ’ÃŽÂ±Ãâ€š.',
	'checkM3uError': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂ®Ãâ€žÃŽÂ±ÃŽÂ½ ÃŽÂ´Ãâ€¦ÃŽÂ½ÃŽÂ±Ãâ€žÃŽÂ® ÃŽÂ· Ãâ€ ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ· Ãâ€žÃŽÂ·Ãâ€š ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š. ÃŽÅ¡Ãâ€°ÃŽÂ´ÃŽÂ¹ÃŽÂºÃÅ’Ãâ€š ÃŽÂºÃŽÂ±Ãâ€žÃŽÂ¬ÃÆ’Ãâ€žÃŽÂ±ÃÆ’ÃŽÂ·Ãâ€š HTTP: ',
	'checkM3uFileError': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂµÃŽÂ¯ÃŽÂ½ÃŽÂ±ÃŽÂ¹ ÃŽÂ­ÃŽÂ³ÃŽÂºÃâ€¦ÃÂÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š m3u(8). ÃŽâ€¢ÃŽÂ»ÃŽÂ­ÃŽÂ³ÃŽÂ¾Ãâ€žÃŽÂµ Ãâ€žÃŽÂ¿ ÃŽÂ±ÃÂÃâ€¡ÃŽÂµÃŽÂ¯ÃŽÂ¿.',
	'checkM3uDownloadError': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂ®Ãâ€žÃŽÂ±ÃŽÂ½ ÃŽÂ´Ãâ€¦ÃŽÂ½ÃŽÂ±Ãâ€žÃŽÂ® ÃŽÂ· Ãâ€ ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ· Ãâ€žÃŽÂ·Ãâ€š ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š. ÃŽâ€¢ÃŽÂ»ÃŽÂ­ÃŽÂ³ÃŽÂ¾Ãâ€žÃŽÂµ Ãâ€žÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· URL.',
	'checkM3uDownloadSizeError': 'ÃŽâ€” ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š Ãâ‚¬ÃŽÂµÃÂÃŽÂ¹ÃŽÂ­Ãâ€¡ÃŽÂµÃŽÂ¹ Ãâ‚¬ÃŽÂ¬ÃÂÃŽÂ± Ãâ‚¬ÃŽÂ¿ÃŽÂ»ÃŽÂ»ÃŽÂ¬ ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±. ÃŽÅ“ÃŽÂµÃŽÂ¹ÃÅ½ÃÆ’Ãâ€žÃŽÂµ Ãâ€žÃŽÂ± ÃÆ’ÃŽÂµ 20.000 ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ± Ãâ€žÃŽÂ¿ Ãâ‚¬ÃŽÂ¿ÃŽÂ»ÃÂ.',
	'checkM3uTimeoutError': 'ÃŽ ÃŽÂ±ÃÂÃŽÂ¿Ãâ€¦ÃÆ’ÃŽÂ¹ÃŽÂ¬ÃÆ’Ãâ€žÃŽÂ·ÃŽÂºÃŽÂµ Ãâ€¡ÃÂÃŽÂ¿ÃŽÂ½ÃŽÂ¹ÃŽÂºÃÅ’ ÃÅ’ÃÂÃŽÂ¹ÃŽÂ¿ ÃŽÂºÃŽÂ±Ãâ€žÃŽÂ¬ Ãâ€žÃŽÂ· Ãâ€ ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ· Ãâ€žÃŽÂ·Ãâ€š ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃÆ’ÃŽÂ±Ãâ€š. ÃŽ ÃŽâ€˜ÃŽÂ¡ÃŽâ€˜ÃŽÅ¡ÃŽâ€˜ÃŽâ€ºÃŽÂ© Ãâ‚¬ÃÂÃŽÂ¿ÃÆ’Ãâ‚¬ÃŽÂ±ÃŽÂ¸ÃŽÂ·ÃÆ’ÃŽÂµ ÃŽÂ¾ÃŽÂ±ÃŽÂ½ÃŽÂ±.',
	'errorNoUsbMounted': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂµÃŽÂ½Ãâ€žÃŽÂ¿Ãâ‚¬ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ·ÃŽÂºÃŽÂµ ÃŽÂ±Ãâ‚¬ÃŽÂ¿ÃŽÂ¸ÃŽÂ®ÃŽÂºÃŽÂµÃâ€¦ÃÆ’ÃŽÂ· USB. ÃŽÂ£Ãâ€¦ÃŽÂ½ÃŽÂ´ÃŽÂ­ÃÆ’Ãâ€žÃŽÂµ Ãâ‚¬ÃÂÃÅ½Ãâ€žÃŽÂ± ÃŽÂ¼ÃŽÂ¹ÃŽÂ± ÃÆ’Ãâ€¦ÃÆ’ÃŽÂºÃŽÂµÃâ€¦ÃŽÂ® ÃŽÂ±Ãâ‚¬ÃŽÂ¿ÃŽÂ¸ÃŽÂ®ÃŽÂºÃŽÂµÃâ€¦ÃÆ’ÃŽÂ·Ãâ€š USB.',
	'errorNoM3uUrl': 'ÃŽâ€¢ÃŽÂ¹ÃÆ’ÃŽÂ±ÃŽÂ³ÃŽÂ¬ÃŽÂ³ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ¼ÃŽÂ¹ÃŽÂ± ÃŽÂ­ÃŽÂ³ÃŽÂºÃâ€¦ÃÂÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· URL ÃÆ’Ãâ€žÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š m3u(8).',
	'channelLoadError': 'ÃŽâ€˜Ãâ€¦Ãâ€žÃÅ’ Ãâ€žÃŽÂ¿ ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ ÃŽÂ´ÃŽÂµÃŽÂ½ ÃŽÂµÃŽÂ¯ÃŽÂ½ÃŽÂ±ÃŽÂ¹ ÃŽÂ´ÃŽÂ¹ÃŽÂ±ÃŽÂ¸ÃŽÂ­ÃÆ’ÃŽÂ¹ÃŽÂ¼ÃŽÂ¿ ÃŽÂ±Ãâ€¦Ãâ€žÃŽÂ®ÃŽÂ½ Ãâ€žÃŽÂ· ÃÆ’Ãâ€žÃŽÂ¹ÃŽÂ³ÃŽÂ¼ÃŽÂ®. ÃŽ ÃŽÂ±ÃÂÃŽÂ±ÃŽÂºÃŽÂ±ÃŽÂ»ÃÅ½ ÃŽÂ´ÃŽÂ¿ÃŽÂºÃŽÂ¹ÃŽÂ¼ÃŽÂ¬ÃÆ’Ãâ€žÃŽÂµ ÃŽÂ¾ÃŽÂ±ÃŽÂ½ÃŽÂ¬ ÃŽÂ±ÃÂÃŽÂ³ÃÅ’Ãâ€žÃŽÂµÃÂÃŽÂ±.',
	'channelLoadConnectionFailed': '(ÃŽâ€” ÃÆ’ÃÂÃŽÂ½ÃŽÂ´ÃŽÂµÃÆ’ÃŽÂ· ÃŽÂ¼ÃŽÂµ Ãâ€žÃŽÂ· ÃÂÃŽÂ¿ÃŽÂ® ÃŽÂ±Ãâ‚¬ÃŽÂ­Ãâ€žÃâ€¦Ãâ€¡ÃŽÂµ.)',
	'channelNotSupportedFile': 'ÃŽâ€˜Ãâ€¦Ãâ€žÃÅ’ Ãâ€žÃŽÂ¿ ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ ÃŽÂ´ÃŽÂµÃŽÂ½ ÃŽÂ¼Ãâ‚¬ÃŽÂ¿ÃÂÃŽÂµÃŽÂ¯ ÃŽÂ½ÃŽÂ± Ãâ€ ÃŽÂ¿ÃÂÃâ€žÃâ€°ÃŽÂ¸ÃŽÂµÃŽÂ¯ ÃŽÂ»ÃÅ’ÃŽÂ³Ãâ€° ÃŽÂ¼ÃŽÂ· ÃÆ’Ãâ€¦ÃŽÂ¼ÃŽÂ²ÃŽÂ±Ãâ€žÃŽÂ®Ãâ€š ÃŽÂ¼ÃŽÂ¿ÃÂÃâ€ ÃŽÂ®Ãâ€š.',
	'errorNoFavouritesYet': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂ­Ãâ€¡ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ±ÃŽÂºÃÅ’ÃŽÂ¼ÃŽÂ± ÃŽÂ±ÃŽÂ³ÃŽÂ±Ãâ‚¬ÃŽÂ·ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂ± ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±. ÃŽ ÃŽÂ±Ãâ€žÃŽÂ®ÃÆ’Ãâ€žÃŽÂµ Ãâ€žÃŽÂ¿ ÃŽÅ¡ÃŽâ„¢ÃŽÂ¤ÃŽÂ¡ÃŽâ„¢ÃŽÂÃŽÅ¸ ÃŽÂºÃŽÂ¿Ãâ€¦ÃŽÂ¼Ãâ‚¬ÃŽÂ¯ ÃŽÂ³ÃŽÂ¹ÃŽÂ± ÃŽÂ½ÃŽÂ± ÃŽÂ±ÃŽÂ³ÃŽÂ±Ãâ‚¬ÃŽÂ®ÃÆ’ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ­ÃŽÂ½ÃŽÂ± ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹.',
	'errorNoPlaylistHistory': 'ÃŽâ€ÃŽÂµÃŽÂ½ Ãâ€¦Ãâ‚¬ÃŽÂ¬ÃÂÃâ€¡ÃŽÂµÃŽÂ¹ ÃŽÂ±ÃŽÂºÃÅ’ÃŽÂ¼ÃŽÂ± ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃÆ’Ãâ€žÃŽÂ¿ ÃŽÂ¹ÃÆ’Ãâ€žÃŽÂ¿ÃÂÃŽÂ¹ÃŽÂºÃÅ’. ÃŽâ€¢ÃŽÂ¹ÃÆ’ÃŽÂ±ÃŽÂ³ÃŽÂ¬ÃŽÂ³ÃŽÂµÃâ€žÃŽÂµ ÃŽÂ¼ÃŽÂ¹ÃŽÂ± ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· URL ÃÆ’Ãâ€žÃŽÂ¿ Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂºÃŽÂ¬Ãâ€žÃâ€° Ãâ‚¬ÃŽÂµÃŽÂ´ÃŽÂ¯ÃŽÂ¿.',

	// Menu
	'searchPlaceholder': 'ÃŽâ€˜ÃŽÂ½ÃŽÂ±ÃŽÂ¶ÃŽÂ®Ãâ€žÃŽÂ·ÃÆ’ÃŽÂ·',
	'allChannels': 'ÃŽÅ’ÃŽÂ»ÃŽÂ± Ãâ€žÃŽÂ± ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±',
	'favourites': 'Ã¢Â­Â ÃŽâ€˜ÃŽÂ³ÃŽÂ±Ãâ‚¬ÃŽÂ·ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂ±',
	'groups': 'ÃŽÅ¸ÃŽÂ¼ÃŽÂ¬ÃŽÂ´ÃŽÂµÃâ€š',
	'channels': 'ÃŽÅ¡ÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±',
	'settings_menu': 'ÃŽÂ¡Ãâ€¦ÃŽÂ¸ÃŽÂ¼ÃŽÂ¯ÃÆ’ÃŽÂµÃŽÂ¹Ãâ€š',
	'epg_menu': 'EPG',
	'guide_menu': 'ÃŽÅ¸ÃŽÂ´ÃŽÂ·ÃŽÂ³ÃÅ’Ãâ€š',

	'guideControlsHeadline': 'ÃŽË†ÃŽÂ»ÃŽÂµÃŽÂ³Ãâ€¡ÃŽÂ¿ÃŽÂ¹',

	// Advanced Settings
	'tabGeneralSettings': 'ÃŽâ€œÃŽÂµÃŽÂ½ÃŽÂ¹ÃŽÂºÃŽÂ­Ãâ€š ÃŽÂ¡Ãâ€¦ÃŽÂ¸ÃŽÂ¼ÃŽÂ¯ÃÆ’ÃŽÂµÃŽÂ¹Ãâ€š',
	'tabAdvancedSettings': 'ÃŽ ÃÂÃŽÂ¿ÃŽÂ·ÃŽÂ³ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂµÃâ€š ÃŽÂ¡Ãâ€¦ÃŽÂ¸ÃŽÂ¼ÃŽÂ¯ÃÆ’ÃŽÂµÃŽÂ¹Ãâ€š',
	'chooseMousewheel': 'ÃŽÂ¤ÃÂÃŽÂ¿Ãâ€¡ÃÅ’Ãâ€š Ãâ‚¬ÃŽÂ¿ÃŽÂ½Ãâ€žÃŽÂ¹ÃŽÂºÃŽÂ¹ÃŽÂ¿ÃÂ',
	'volumeSetting': 'ÃŽâ€˜ÃÂÃŽÂ¾ÃŽÂ·ÃÆ’ÃŽÂ·/ÃŽÅ“ÃŽÂµÃŽÂ¯Ãâ€°ÃÆ’ÃŽÂ· ÃŽÂ­ÃŽÂ½Ãâ€žÃŽÂ±ÃÆ’ÃŽÂ·Ãâ€š',
	'channelSetting': 'ÃŽÅ¡ÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ Ãâ‚¬ÃÂÃŽÂ¿Ãâ€š Ãâ€žÃŽÂ± ÃŽÂµÃŽÂ¼Ãâ‚¬ÃÂÃÅ’Ãâ€š/Ãâ‚¬ÃŽÂ¯ÃÆ’Ãâ€°',
	'reloadPlaylistOnStart': 'ÃŽâ€ºÃŽÂ®ÃË†ÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃÆ’ÃŽÂµ ÃŽÂºÃŽÂ¬ÃŽÂ¸ÃŽÂµ ÃŽÂ­ÃŽÂ½ÃŽÂ±ÃÂÃŽÂ¾ÃŽÂ·',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'Ãâ€ ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ·...',
	'audioTrack': 'ÃŽâ€”Ãâ€¡ÃŽÂ·Ãâ€žÃŽÂ¹ÃŽÂºÃÅ’ ÃŽÂºÃŽÂ¿ÃŽÂ¼ÃŽÂ¼ÃŽÂ¬Ãâ€žÃŽÂ¹',
	'subtitleTrack': 'ÃŽÅ¡ÃŽÂ¿ÃŽÂ¼ÃŽÂ¼ÃŽÂ¬Ãâ€žÃŽÂ¹ Ãâ€¦Ãâ‚¬ÃÅ’Ãâ€žÃŽÂ¹Ãâ€žÃŽÂ»Ãâ€°ÃŽÂ½',
	'channelSettings': 'ÃŽÂ¡Ãâ€¦ÃŽÂ¸ÃŽÂ¼ÃŽÂ¯ÃÆ’ÃŽÂµÃŽÂ¹Ãâ€š ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ±ÃŽÂ»ÃŽÂ¹ÃŽÂ¿ÃÂ',
	'channelSettingSubtitle': 'Ãâ€¦Ãâ‚¬ÃÅ’Ãâ€žÃŽÂ¹Ãâ€žÃŽÂ»ÃŽÂ¿Ãâ€š / ÃŽÂ®Ãâ€¡ÃŽÂ¿Ãâ€š',
	'channelSettingFavs': 'ÃŽÂ²ÃŽÂ¬ÃŽÂ»ÃŽÂµ Ãâ€žÃŽÂ¿ ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ³ÃŽÂ±Ãâ‚¬ÃŽÂ·ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂ±',
	'channelSettingPlayback': 'ÃŽÂµÃŽÂ¼Ãâ€ ÃŽÂ¬ÃŽÂ½ÃŽÂ¹ÃÆ’ÃŽÂ· ÃÆ’Ãâ€žÃŽÂ¿ÃŽÂ¹Ãâ€¡ÃŽÂµÃŽÂ¯Ãâ€°ÃŽÂ½ ÃŽÂµÃŽÂ»ÃŽÂ­ÃŽÂ³Ãâ€¡ÃŽÂ¿Ãâ€¦ ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š',
	'channelSettingAudioDefault': 'Ãâ‚¬ÃÂÃŽÂ¿ÃŽÂµÃâ‚¬ÃŽÂ¹ÃŽÂ»ÃŽÂµÃŽÂ³ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂ¿ ÃŽÂºÃŽÂ¿ÃŽÂ¼ÃŽÂ¼ÃŽÂ¬Ãâ€žÃŽÂ¹',
	'channelSettingSubNoTrack': 'ÃŽÂ¼ÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂ±ÃŽÂ¸ÃŽÂ­ÃÆ’ÃŽÂ¹ÃŽÂ¼ÃŽÂ¿',
	'channelSettingSubOff': 'ÃŽÂ±Ãâ‚¬ÃŽÂµÃŽÂ½ÃŽÂµÃÂÃŽÂ³ÃŽÂ¿Ãâ‚¬ÃŽÂ¿ÃŽÂ¯ÃŽÂ·ÃÆ’ÃŽÂ·',
	'channelSettingResolution': 'ÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»Ãâ€¦ÃÆ’ÃŽÂ·',

	// EPG
	'epgSource': 'ÃŽ ÃŽÂ·ÃŽÂ³ÃŽÂ® EPG',
	'usePlaylistEpgUrl': 'ÃŽÂ§ÃÂÃŽÂ·ÃÆ’ÃŽÂ¹ÃŽÂ¼ÃŽÂ¿Ãâ‚¬ÃŽÂ¿ÃŽÂ¹ÃŽÂ®ÃÆ’Ãâ€žÃŽÂµ Ãâ€žÃŽÂ·ÃŽÂ½ Ãâ‚¬ÃŽÂ·ÃŽÂ³ÃŽÂ® EPG ÃŽÂ±Ãâ‚¬ÃÅ’ Ãâ€žÃŽÂ· ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃÆ’ÃŽÂ±Ãâ€š;',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'ÃŽâ€ÃŽÂ¹ÃŽÂ¬ÃÆ’Ãâ€žÃŽÂ·ÃŽÂ¼ÃŽÂ± ÃŽÂ±ÃÂÃâ‚¬ÃŽÂ±ÃŽÂ³ÃŽÂ®Ãâ€š EPG',
	'downloadEpgButton': 'ÃŽÂºÃŽÂ±Ãâ€žÃŽÂµÃŽÂ²ÃŽÂ¬ÃÆ’Ãâ€žÃŽÂµ Ãâ€žÃŽÂ¿ EPG Ãâ€žÃÅ½ÃÂÃŽÂ±',
	'noEpgForChannel': 'ÃŽâ€ÃŽÂµÃŽÂ½ Ãâ€¦Ãâ‚¬ÃŽÂ¬ÃÂÃâ€¡ÃŽÂµÃŽÂ¹ EPG ÃŽÂ³ÃŽÂ¹ÃŽÂ± ÃŽÂ±Ãâ€¦Ãâ€žÃÅ’ Ãâ€žÃŽÂ¿ ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹',
	'noEpgUrlGiven': 'ÃŽâ€ÃŽÂµÃŽÂ½ ÃŽÂ­Ãâ€¡ÃŽÂµÃŽÂ¹ ÃŽÂ¿ÃÂÃŽÂ¹ÃÆ’Ãâ€žÃŽÂµÃŽÂ¯ ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· URL EPG',
	'epgQuotaExceededError': 'ÃŽâ€ÃŽÂµÃŽÂ½ Ãâ€¦Ãâ‚¬ÃŽÂ¬ÃÂÃâ€¡ÃŽÂµÃŽÂ¹ ÃŽÂ±ÃÂÃŽÂºÃŽÂµÃâ€žÃÅ’Ãâ€š ÃŽÂµÃŽÂ»ÃŽÂµÃÂÃŽÂ¸ÃŽÂµÃÂÃŽÂ¿Ãâ€š Ãâ€¡ÃÅ½ÃÂÃŽÂ¿Ãâ€š ÃŽÂ³ÃŽÂ¹ÃŽÂ± Ãâ€žÃŽÂ·ÃŽÂ½ ÃŽÂ±Ãâ‚¬ÃŽÂ¿ÃŽÂ¸ÃŽÂ®ÃŽÂºÃŽÂµÃâ€¦ÃÆ’ÃŽÂ· ÃŽÂ´ÃŽÂµÃŽÂ´ÃŽÂ¿ÃŽÂ¼ÃŽÂ­ÃŽÂ½Ãâ€°ÃŽÂ½ EPG. ÃŽâ€¢ÃŽÂ»ÃŽÂµÃâ€¦ÃŽÂ¸ÃŽÂµÃÂÃÅ½ÃÆ’Ãâ€žÃŽÂµ ÃŽÂ»ÃŽÂ¯ÃŽÂ³ÃŽÂ¿ Ãâ€¡ÃÅ½ÃÂÃŽÂ¿. ÃŽâ€œÃŽÂ¹ÃŽÂ± Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ¬ÃŽÂ´ÃŽÂµÃŽÂ¹ÃŽÂ³ÃŽÂ¼ÃŽÂ±, ÃŽÂ´ÃŽÂ¹ÃŽÂ±ÃŽÂ³ÃÂÃŽÂ¬Ãâ€ ÃŽÂ¿ÃŽÂ½Ãâ€žÃŽÂ±Ãâ€š ÃŽÂ¼ÃŽÂ· Ãâ€¡ÃÂÃŽÂ·ÃÆ’ÃŽÂ¹ÃŽÂ¼ÃŽÂ¿Ãâ‚¬ÃŽÂ¿ÃŽÂ¹ÃŽÂ·ÃŽÂ¼ÃŽÂ­ÃŽÂ½ÃŽÂµÃâ€š ÃŽÂµÃâ€ ÃŽÂ±ÃÂÃŽÂ¼ÃŽÂ¿ÃŽÂ³ÃŽÂ­Ãâ€š.',
	'epgNotCompatibleWithPlaylist': 'ÃŽâ€” ÃŽÂ»ÃŽÂ¯ÃÆ’Ãâ€žÃŽÂ± ÃŽÂ±ÃŽÂ½ÃŽÂ±Ãâ‚¬ÃŽÂ±ÃÂÃŽÂ±ÃŽÂ³Ãâ€°ÃŽÂ³ÃŽÂ®Ãâ€š ÃÆ’ÃŽÂ±Ãâ€š ÃŽÂ´ÃŽÂµÃŽÂ½ ÃŽÂµÃŽÂ¯ÃŽÂ½ÃŽÂ±ÃŽÂ¹ ÃÆ’Ãâ€¦ÃŽÂ¼ÃŽÂ²ÃŽÂ±Ãâ€žÃŽÂ® ÃŽÂ¼ÃŽÂµ ÃŽÂ±Ãâ€¦Ãâ€žÃŽÂ®ÃŽÂ½ Ãâ€žÃŽÂ· ÃŽÂ´ÃŽÂ¹ÃŽÂµÃÂÃŽÂ¸Ãâ€¦ÃŽÂ½ÃÆ’ÃŽÂ· EGP-URL.',
	'epgIsDownloading': 'ÃŽÂ¦ÃÅ’ÃÂÃâ€žÃâ€°ÃÆ’ÃŽÂ· EPG ...',
	'epgChannelsProcessed': 'ÃŽÂºÃŽÂ±ÃŽÂ½ÃŽÂ¬ÃŽÂ»ÃŽÂ¹ÃŽÂ±: ',
	'epgProgramsProcessed': 'Ãâ‚¬ÃÂÃŽÂ¿ÃŽÂ³ÃÂÃŽÂ¬ÃŽÂ¼ÃŽÂ¼ÃŽÂ±Ãâ€žÃŽÂ±: ',
	'epgNow': 'ÃŽÂ¤ÃÅ½ÃÂÃŽÂ±',
	'epgAfter': 'ÃŽÅ¡ÃŽÂ±Ãâ€žÃÅ’Ãâ‚¬ÃŽÂ¹ÃŽÂ½ ÃŽÂ±Ãâ€¦Ãâ€žÃŽÂ¿ÃÂ',

},
'ko': {
	'yes': 'Ã¬ËœË†', 'no': 'Ã¬â€¢â€žÃ«â€¹Ë†Ã¬Å¡â€',

	'm3uSource': 'm3u(8) Ã­Å’Å’Ã¬ÂÂ¼Ã¬ÂËœ URL',
	'chooseLang': 'Ã¬â€“Â¸Ã¬â€“Â´',
	'usbLoadLabel': 'USBÃ¬â€”ÂÃ¬â€žÅ“ Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸',
	'openUsbButton': 'USB Ã¬Â°Â¾Ã¬â€¢â€žÃ«Â³Â´ÃªÂ¸Â°',
	'localLoadLabel': 'Ã«Â¡Å“Ã¬Â»Â¬ m3u(8) Ã­Å’Å’Ã¬ÂÂ¼',
	'openExplorerButton': 'Ã­Æ’ÂÃ¬Æ’â€°ÃªÂ¸Â° Ã¬â€”Â´ÃªÂ¸Â°',
	'openHistoryButton': 'Ã­Å¾Ë†Ã¬Å Â¤Ã­â€  Ã«Â¦Â¬',
	'downloadButton': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ Ã«Â¡Å“Ã«â€œÅ“',
	'saveButton': 'Ã¬ â‚¬Ã¬Å¾Â¥Ã­â€¢ËœÃªÂ³  Ã¬Å¾Â¬Ã¬Æ’Â',
	'deleteButton': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ Ã¬â€šÂ­Ã¬ Å“',
	'generalSettingsButton': 'Ã¬ÂÂ¼Ã«Â°Ëœ Ã¬â€žÂ¤Ã¬ â€¢',
	'advancedSettingsButton': 'ÃªÂ³ ÃªÂ¸â€° Ã¬â€žÂ¤Ã¬ â€¢',

	'closeAppHint': 'Ã¬ÂÂ´ Ã¬â€¢Â±Ã¬Ââ€ž Ã«â€¹Â«Ã¬Å“Â¼Ã¬â€¹Å“ÃªÂ² Ã¬Å ÂµÃ«â€¹Ë†ÃªÂ¹Å’?',
	'hideModalHint': 'Ã¬ÂÂ´ Ã«Â©â€Ã¬â€¹Å“Ã¬Â§â‚¬Ã«Â¥Â¼ Ã«â€¹Â«Ã¬Å“Â¼Ã« Â¤Ã«Â©Â´ Ã¬â€¢â€žÃ«Â¬Â´ Ã«Â²â€žÃ­Å Â¼Ã¬ÂÂ´Ã«â€šËœ Ã«Ë†â€žÃ«Â¥Â´Ã¬â€žÂ¸Ã¬Å¡â€.',
	'playlistDownloaded': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ÃªÂ°â‚¬ Ã¬â€žÂ±ÃªÂ³ÂµÃ¬ ÂÃ¬Å“Â¼Ã«Â¡Å“ Ã«â€¹Â¤Ã¬Å¡Â´Ã«Â¡Å“Ã«â€œÅ“Ã«ÂËœÃ¬â€”Ë†Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤.<br>%i Ã¬Â±â€žÃ«â€žÂ Ã«Â¡Å“Ã«â€œÅ“Ã«ÂÂ¨.',
	'channelsLoaded': 'Ã¬Â±â€žÃ«â€žÂ',
	'filterNoResults': 'Ã¬Â§â‚¬Ã¬ â€¢Ã«ÂÅ“ Ã­â€¢â€žÃ­â€žÂ°Ã¬â€”Â Ã«Å’â‚¬Ã­â€¢Å“ Ã¬Â±â€žÃ«â€žÂÃ¬ÂÂ´ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤.',

	'redButtonHint': '<span class="red-button">A</span> ÃªÂ²â‚¬Ã¬Æ’â€°',
	'helpHint': 'Ã«ÂÂ°Ã«ÂªÂ¨ Ã¬Â±â€žÃ«â€žÂ Ã«ÂªÂ©Ã«Â¡ÂÃ¬Ââ€ž Ã¬â€šÂ½Ã¬Å¾â€¦Ã­â€¢ËœÃ« Â¤Ã«Â©Â´ Ã¬â€“Â¸Ã¬ Å“Ã«â€œ Ã¬Â§â‚¬ <span class="red-button">A</span> Ã«Â²â€žÃ­Å Â¼Ã¬Ââ€ž Ã«Ë†â€žÃ«Â¥Â´Ã¬â€žÂ¸Ã¬Å¡â€.<br><br>Ã¬â€šÂ¬Ã¬Å¡Â©Ã¬Å¾Â ÃªÂ°â‚¬Ã¬ÂÂ´Ã«â€œÅ“Ã«Â¥Â¼ Ã«Â³Â´Ã« Â¤Ã«Â©Â´ Ã¬â€“Â¸Ã¬ Å“Ã«â€œ Ã¬Â§â‚¬ Ã«Â¦Â¬Ã«ÂªÂ¨Ã¬Â»Â¨Ã¬ÂËœ INFO Ã«Â²â€žÃ­Å Â¼Ã¬Ââ€ž Ã«Ë†â€žÃ«Â¥Â´Ã¬â€žÂ¸Ã¬Å¡â€.',

	'supportContact': 'Ã«Ââ€ Ã«Â§Å½Ã¬Ââ‚¬ Ã¬ â€¢Ã«Â³Â´Ã«Â¥Â¼ Ã¬â€ºÂÃ­â€¢ËœÃ¬â€¹Å“Ã«Â©Â´ https://jeromelaliag.link/ko Ã«Â¥Â¼ Ã«Â°Â©Ã«Â¬Â¸Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€',
	'supportContactLinked': 'Ã«Ââ€ Ã«Â§Å½Ã¬Ââ‚¬ Ã¬ â€¢Ã«Â³Â´Ã«Â¥Â¼ Ã¬â€ºÂÃ­â€¢ËœÃ¬â€¹Å“Ã«Â©Â´ <a href="https://jeromelaliag.link/ko/" target="_blank">https://jeromelaliag.link/ko</a>Ã«Â¥Â¼ Ã«Â°Â©Ã«Â¬Â¸Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€',
	'donate': 'Ã¬ÂÂ´ Ã¬â€¢Â±Ã¬Ââ€ž Ã¬Â¢â€¹Ã¬â€¢â€žÃ­â€¢ËœÃ¬â€¹ Ã«â€¹Â¤Ã«Â©Â´ Ã¬Å¾â€˜Ã¬Ââ‚¬ ÃªÂ¸Â°Ã«Â¶â‚¬Ã«Â¡Å“ Ã¬ â‚¬Ã«Â¥Â¼ Ã¬Â§â‚¬Ã¬â€ºÂÃ­â€¢Â´Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.<br><b class="NOBR">https://jeromelaliag.link</b> Ã«ËœÂÃ«Å â€ QR Ã¬Â½â€Ã«â€œÅ“Ã«Â¥Â¼ Ã­â€ ÂµÃ­â€¢Â´ ÃªÂ¸Â°Ã«Â¶â‚¬Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (Ã¬â€¹ Ã¬Å¡Â© Ã¬Â¹Â´Ã«â€œÅ“)',
	'downloadM3uStatus': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ Ã«Â¡Å“Ã«â€Â© Ã¬Â¤â€˜. Ã¬Å¾ Ã¬â€¹Å“ ÃªÂ¸Â°Ã«â€¹Â¤Ã« Â¤Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.',
	'usbMountedStatus': 'USB Ã«Â§Ë†Ã¬Å¡Â´Ã­Å Â¸Ã«ÂÂ¨',

	'connectionLost': 'Ã«â€žÂ¤Ã­Å Â¸Ã¬â€ºÅ’Ã­ÂÂ¬ Ã¬â€”Â°ÃªÂ²Â°Ã¬ÂÂ´ Ã«ÂÅ ÃªÂ²Â¼Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã«â€žÂ¤Ã­Å Â¸Ã¬â€ºÅ’Ã­ÂÂ¬Ã«Â¥Â¼ Ã­â„¢â€¢Ã¬ÂÂ¸Ã­â€¢Â´Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.',
	'checkM3uError': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸Ã«Â¥Â¼ Ã«Â¡Å“Ã«â€œÅ“Ã­â€¢  Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. HTTP Ã¬Æ’ÂÃ­Æ’Å“ Ã¬Â½â€Ã«â€œÅ“: ',
	'checkM3uFileError': 'Ã¬Å“ Ã­Å¡Â¨Ã­â€¢Å“ m3u(8) Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ÃªÂ°â‚¬ Ã¬â€¢â€žÃ«â€¹â„¢Ã«â€¹Ë†Ã«â€¹Â¤. Ã­Å’Å’Ã¬ÂÂ¼Ã¬Ââ€ž Ã­â„¢â€¢Ã¬ÂÂ¸Ã­â€¢Â´Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.',
	'checkM3uDownloadError': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸Ã«Â¥Â¼ Ã«Â¡Å“Ã«â€œÅ“Ã­â€¢  Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. URLÃ¬Ââ€ž Ã­â„¢â€¢Ã¬ÂÂ¸Ã­â€¢Â´Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.',
	'checkM3uDownloadSizeError': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸Ã¬â€”Â Ã«â€žË†Ã«Â¬Â´ Ã«Â§Å½Ã¬Ââ‚¬ Ã¬Â±â€žÃ«â€žÂÃ¬ÂÂ´ Ã­ÂÂ¬Ã­â€¢Â¨Ã«ÂËœÃ¬â€“Â´ Ã¬Å¾Ë†Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã¬ÂµÅ“Ã«Å’â‚¬ 20,000 Ã¬Â±â€žÃ«â€žÂÃ«Â¡Å“ Ã¬Â¤â€žÃ¬â€”Â¬Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.',
	'checkM3uTimeoutError': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ Ã«Â¡Å“Ã«â€Â© Ã¬Â¤â€˜Ã¬â€”Â Ã¬â€¹Å“ÃªÂ°â€ž Ã¬Â´Ë†ÃªÂ³Â¼ÃªÂ°â‚¬ Ã«Â°Å“Ã¬Æ’ÂÃ­â€“Ë†Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã«â€¹Â¤Ã¬â€¹Å“ Ã¬â€¹Å“Ã«Ââ€žÃ­â€¢Â´Ã¬Â£Â¼Ã¬â€žÂ¸Ã¬Å¡â€.',
	'errorNoUsbMounted': 'Ã¬â€”Â°ÃªÂ²Â°Ã«ÂÅ“ USB Ã¬ â‚¬Ã¬Å¾Â¥Ã¬â€ Å’ÃªÂ°â‚¬ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã«Â¨Â¼Ã¬ â‚¬ USB Ã¬ â‚¬Ã¬Å¾Â¥ Ã¬Å¾Â¥Ã¬Â¹ËœÃ«Â¥Â¼ Ã¬â€”Â°ÃªÂ²Â°Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',
	'errorNoM3uUrl': 'Ã¬Å“ Ã­Å¡Â¨Ã­â€¢Å“ m3u(8) Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ URLÃ¬Ââ€ž Ã¬Å¾â€¦Ã« Â¥Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',
	'channelLoadError': 'Ã­Ëœâ€žÃ¬Å¾Â¬ Ã¬ÂÂ´ Ã¬Â±â€žÃ«â€žÂÃ¬Ââ€ž Ã«Â¡Å“Ã«â€œÅ“Ã­â€¢  Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã«â€šËœÃ¬Â¤â€˜Ã¬â€”Â Ã«â€¹Â¤Ã¬â€¹Å“ Ã¬â€¹Å“Ã«Ââ€žÃ­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',
	'channelLoadConnectionFailed': '(Ã¬Å Â¤Ã­Å Â¸Ã«Â¦Â¼Ã¬â€”Â Ã¬â€”Â°ÃªÂ²Â°Ã­â€¢  Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤.)',
	'channelNotSupportedFile': 'Ã¬ÂÂ´ Ã¬Â±â€žÃ«â€žÂÃ¬Ââ‚¬ Ã­ËœÂ¸Ã­â„¢ËœÃ«ÂËœÃ¬Â§â‚¬ Ã¬â€¢Å Ã«Å â€ Ã­Ëœâ€¢Ã¬â€¹ÂÃ¬Å“Â¼Ã«Â¡Å“ Ã¬ÂÂ¸Ã­â€¢Â´ Ã«Â¡Å“Ã«â€œÅ“Ã­â€¢  Ã¬Ë†Ëœ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤.',
	'errorNoFavouritesYet': 'Ã¬â€¢â€žÃ¬Â§Â Ã¬Â¦ÂÃªÂ²Â¨Ã¬Â°Â¾ÃªÂ¸Â°Ã­â€¢Å“ Ã¬Â±â€žÃ«â€žÂÃ¬ÂÂ´ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã«â€¦Â¸Ã«Å¾â‚¬ Ã«Â²â€žÃ­Å Â¼Ã¬Ââ€ž Ã«Ë†Å’Ã«Å¸Â¬ Ã¬Â±â€žÃ«â€žÂÃ¬Ââ€ž Ã¬Â¦ÂÃªÂ²Â¨Ã¬Â°Â¾ÃªÂ¸Â°Ã¬â€”Â Ã¬Â¶â€ÃªÂ°â‚¬Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',
	'errorNoPlaylistHistory': 'Ã¬â€¢â€žÃ¬Â§Â Ã­Å¾Ë†Ã¬Å Â¤Ã­â€  Ã«Â¦Â¬Ã¬â€”Â Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ÃªÂ°â‚¬ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã¬â€¢â€žÃ«Å¾Ëœ Ã­â€¢â€žÃ«â€œÅ“Ã¬â€”Â URLÃ¬Ââ€ž Ã¬Å¾â€¦Ã« Â¥Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',

	// Menu
	'searchPlaceholder': 'ÃªÂ²â‚¬Ã¬Æ’â€°',
	'allChannels': 'Ã«ÂªÂ¨Ã«â€œ  Ã¬Â±â€žÃ«â€žÂ',
	'favourites': 'Ã¢Â­Â Ã¬Â¦ÂÃªÂ²Â¨Ã¬Â°Â¾ÃªÂ¸Â°',
	'groups': 'ÃªÂ·Â¸Ã«Â£Â¹',
	'channels': 'Ã¬Â±â€žÃ«â€žÂ',
	'settings_menu': 'Ã¬â€žÂ¤Ã¬ â€¢',
	'epg_menu': 'EPG',
	'guide_menu': 'ÃªÂ°â‚¬Ã¬ÂÂ´Ã«â€œÅ“',

	'guideControlsHeadline': 'Ã¬Â»Â¨Ã­Å Â¸Ã«Â¡Â¤',

	// Advanced Settings
	'tabGeneralSettings': 'Ã¬ÂÂ¼Ã«Â°Ëœ Ã¬â€žÂ¤Ã¬ â€¢',
	'tabAdvancedSettings': 'ÃªÂ³ ÃªÂ¸â€° Ã¬â€žÂ¤Ã¬ â€¢',
	'chooseMousewheel': 'Ã«Â§Ë†Ã¬Å¡Â°Ã¬Å Â¤ Ã­Å“ ',
	'volumeSetting': 'Ã¬ÂÅ’Ã«Å¸â€° Ã¬Â¡Â°Ã¬ Ë†',
	'channelSetting': 'Ã¬Â±â€žÃ«â€žÂ Ã¬ÂÂ´Ã«Ââ„¢',
	'reloadPlaylistOnStart': 'Ã¬â€¹Å“Ã¬Å¾â€˜ Ã¬â€¹Å“Ã«Â§Ë†Ã«â€¹Â¤ Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ Ã«â€¹Â¤Ã¬Å¡Â´Ã«Â¡Å“Ã«â€œÅ“',
	'bufferSetting': 'Ã«Â²â€žÃ­ÂÂ¼',
	'customUserAgentSetting': 'Ã¬â€šÂ¬Ã¬Å¡Â©Ã¬Å¾Â Ã¬â€”ÂÃ¬ÂÂ´Ã¬ â€žÃ­Å Â¸',

	// Channel Settings
	'loading': 'Ã«Â¡Å“Ã«â€Â© Ã¬Â¤â€˜...',
	'audioTrack': 'Ã¬ËœÂ¤Ã«â€â€Ã¬ËœÂ¤ Ã­Å Â¸Ã«Å¾â„¢',
	'subtitleTrack': 'Ã¬Å¾ÂÃ«Â§â€° Ã­Å Â¸Ã«Å¾â„¢',
	'channelSettings': 'Ã¬Â±â€žÃ«â€žÂ Ã¬â€žÂ¤Ã¬ â€¢',
	'channelSettingSubtitle': 'Ã¬Å¾ÂÃ«Â§â€° / Ã¬ËœÂ¤Ã«â€â€Ã¬ËœÂ¤',
	'channelSettingFavs': 'Ã¬Â±â€žÃ«â€žÂ Ã¬Â¦ÂÃªÂ²Â¨Ã¬Â°Â¾ÃªÂ¸Â°Ã¬â€”Â Ã¬Â¶â€ÃªÂ°â‚¬',
	'channelSettingPlayback': 'Ã¬Å¾Â¬Ã¬Æ’Â Ã¬Â»Â¨Ã­Å Â¸Ã«Â¡Â¤ Ã­â€˜Å“Ã¬â€¹Å“',
	'channelSettingAudioDefault': 'ÃªÂ¸Â°Ã«Â³Â¸ Ã­Å Â¸Ã«Å¾â„¢',
	'channelSettingSubNoTrack': 'Ã¬â€šÂ¬Ã¬Å¡Â© Ã«Â¶Ë†ÃªÂ°â‚¬',
	'channelSettingSubOff': 'Ã«Â¹â€žÃ­â„¢Å“Ã¬â€žÂ±Ã­â„¢â€',
	'channelSettingResolution': 'Ã­â€¢Â´Ã¬Æ’ÂÃ«Ââ€ž',

	// EPG
	'epgSource': 'EPG Ã¬â€ Å’Ã¬Å Â¤',
	'usePlaylistEpgUrl': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸Ã¬ÂËœ EPG Ã¬â€ Å’Ã¬Å Â¤ Ã¬â€šÂ¬Ã¬Å¡Â©',
	'epgTimeShift': 'EPG Ã­Æ’â‚¬Ã¬Å¾â€ž Ã¬â€¹Å“Ã­â€â€žÃ­Å Â¸',
	'epgGrabInterval': 'EPG Ã¬Ë†ËœÃ¬Â§â€˜ ÃªÂ°â€žÃªÂ²Â©',
	'downloadEpgButton': 'Ã¬Â§â‚¬ÃªÂ¸Ë† EPG Ã«â€¹Â¤Ã¬Å¡Â´Ã«Â¡Å“Ã«â€œÅ“',
	'noEpgForChannel': 'Ã¬ÂÂ´ Ã¬Â±â€žÃ«â€žÂÃ¬â€”Â Ã«Å’â‚¬Ã­â€¢Å“ EPG Ã¬â€”â€ Ã¬ÂÅ’',
	'noEpgUrlGiven': 'Ã¬â€žÂ¤Ã¬ â€¢Ã«ÂÅ“ EPG URL Ã¬â€”â€ Ã¬ÂÅ’',
	'epgQuotaExceededError': 'EPG Ã«ÂÂ°Ã¬ÂÂ´Ã­â€žÂ°Ã«Â¥Â¼ Ã¬ â‚¬Ã¬Å¾Â¥Ã­â€¢  Ã¬Â¶Â©Ã«Â¶â€žÃ­â€¢Å“ ÃªÂ³ÂµÃªÂ°â€žÃ¬ÂÂ´ Ã¬â€”â€ Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤. Ã«Âªâ€¡Ã«Âªâ€¡ ÃªÂ³ÂµÃªÂ°â€žÃ¬Ââ€ž Ã­â„¢â€¢Ã«Â³Â´Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€. Ã¬ËœË†Ã«Â¥Â¼ Ã«â€œÂ¤Ã¬â€“Â´ Ã¬â€šÂ¬Ã¬Å¡Â©Ã­â€¢ËœÃ¬Â§â‚¬ Ã¬â€¢Å Ã«Å â€ Ã¬â€¢Â±Ã¬Ââ€ž Ã¬â€šÂ­Ã¬ Å“Ã­â€¢ËœÃ¬â€”Â¬ ÃªÂ³ÂµÃªÂ°â€žÃ¬Ââ€ž Ã­â„¢â€¢Ã«Â³Â´Ã­â€¢ËœÃ¬â€žÂ¸Ã¬Å¡â€.',
	'epgNotCompatibleWithPlaylist': 'Ã­â€Å’Ã« Ë†Ã¬ÂÂ´Ã«Â¦Â¬Ã¬Å Â¤Ã­Å Â¸ÃªÂ°â‚¬ Ã¬ÂÂ´ EPG URLÃªÂ³Â¼ Ã­ËœÂ¸Ã­â„¢ËœÃ«ÂËœÃ¬Â§â‚¬ Ã¬â€¢Å Ã¬Å ÂµÃ«â€¹Ë†Ã«â€¹Â¤.',
	'epgIsDownloading': 'EPG Ã«Â¡Å“Ã«â€Â© Ã¬Â¤â€˜...',
	'epgChannelsProcessed': 'Ã¬Â±â€žÃ«â€žÂ: ',
	'epgProgramsProcessed': 'Ã­â€â€žÃ«Â¡Å“ÃªÂ·Â¸Ã«Å¾Â¨: ',
	'epgNow': 'Ã­Ëœâ€žÃ¬Å¾Â¬',
	'epgAfter': 'Ã¬ÂÂ´Ã­â€ºâ€ž',
},
'vi': {
	'yes': 'cÃƒÂ³', 'no': 'khÃƒÂ´ng',

	'm3uSource': 'URL Ã„â€˜Ã¡ÂºÂ¿n tÃ¡Â»â€¡p m3u(8)',
	'chooseLang': 'NgÃƒÂ´n ngÃ¡Â»Â¯',
	'usbLoadLabel': 'Danh sÃƒÂ¡ch tÃ¡Â»Â« USB',
	'openUsbButton': 'DuyÃ¡Â»â€¡t USB',
	'localLoadLabel': 'TÃ¡Â»â€¡p m3u(8) Ã„â€˜Ã¡Â»â€¹a phÃ†Â°Ã†Â¡ng',
	'openExplorerButton': 'MÃ¡Â»Å¸ trÃƒÂ¬nh duyÃ¡Â»â€¡t',
	'openHistoryButton': 'LÃ¡Â»â€¹ch sÃ¡Â»Â­',
	'downloadButton': 'TÃ¡ÂºÂ£i danh sÃƒÂ¡ch',
	'saveButton': 'LÃ†Â°u vÃƒ  phÃƒÂ¡t',
	'deleteButton': 'XÃƒÂ³a danh sÃƒÂ¡ch',
	'generalSettingsButton': 'CÃƒ i Ã„â€˜Ã¡ÂºÂ·t chung',
	'advancedSettingsButton': 'CÃƒ i Ã„â€˜Ã¡ÂºÂ·t nÃƒÂ¢ng cao',

	'closeAppHint': 'BÃ¡ÂºÂ¡n cÃƒÂ³ muÃ¡Â»â€˜n Ã„â€˜ÃƒÂ³ng Ã¡Â»Â©ng dÃ¡Â»Â¥ng nÃƒ y khÃƒÂ´ng?',
	'hideModalHint': 'NhÃ¡ÂºÂ¥n bÃ¡ÂºÂ¥t kÃ¡Â»Â³ nÃƒÂºt nÃƒ o Ã„â€˜Ã¡Â»Æ’ Ã„â€˜ÃƒÂ³ng thÃƒÂ´ng bÃƒÂ¡o nÃƒ y.',
	'playlistDownloaded': 'Danh sÃƒÂ¡ch tÃ¡ÂºÂ£i vÃ¡Â»Â thÃƒ nh cÃƒÂ´ng.<br>%i kÃƒÂªnh Ã„â€˜ÃƒÂ£ Ã„â€˜Ã†Â°Ã¡Â»Â£c tÃ¡ÂºÂ£i.',
	'channelsLoaded': 'kÃƒÂªnh',
	'filterNoResults': 'KhÃƒÂ´ng tÃƒÂ¬m thÃ¡ÂºÂ¥y kÃƒÂªnh cho bÃ¡Â»â„¢ lÃ¡Â»Âc Ã„â€˜ÃƒÂ£ cho.',

	'redButtonHint': '<span class="red-button">A</span> TÃƒÂ¬m kiÃ¡ÂºÂ¿m',
	'helpHint': 'NhÃ¡ÂºÂ¥n nÃƒÂºt <span class="red-button">A</span> Ã„â€˜Ã¡Â»Æ’ chÃƒÂ¨n danh sÃƒÂ¡ch kÃƒÂªnh mÃ¡ÂºÂ«u.<br><br>NhÃ¡ÂºÂ¥n INFO trÃƒÂªn Ã„â€˜iÃ¡Â»Âu khiÃ¡Â»Æ’n tÃ¡Â»Â« xa bÃ¡ÂºÂ¥t cÃ¡Â»Â© lÃƒÂºc nÃƒ o Ã„â€˜Ã¡Â»Æ’ xem hÃ†Â°Ã¡Â»â€ºng dÃ¡ÂºÂ«n ngÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng.',

	'supportContact': 'Ã„ÂÃ¡Â»Æ’ biÃ¡ÂºÂ¿t thÃƒÂªm thÃƒÂ´ng tin, truy cÃ¡ÂºÂ­p https://jeromelaliag.link/vi',
	'supportContactLinked': 'Ã„ÂÃ¡Â»Æ’ biÃ¡ÂºÂ¿t thÃƒÂªm thÃƒÂ´ng tin, truy cÃ¡ÂºÂ­p <a href="https://jeromelaliag.link/vi/" target="_blank">https://jeromelaliag.link/vi</a>',
	'donate': 'NÃ¡ÂºÂ¿u bÃ¡ÂºÂ¡n thÃƒÂ­ch Ã¡Â»Â©ng dÃ¡Â»Â¥ng nÃƒ y, hÃƒÂ£y Ã¡Â»Â§ng hÃ¡Â»â„¢ tÃƒÂ´i vÃ¡Â»â€ºi mÃ¡Â»â„¢t khoÃ¡ÂºÂ£n quyÃƒÂªn gÃƒÂ³p nhÃ¡Â»Â.<br>Truy cÃ¡ÂºÂ­p <b class="NOBR">https://jeromelaliag.link</b><br>hoÃ¡ÂºÂ·c qua mÃƒÂ£ QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (thÃ¡ÂºÂ» tÃƒÂ­n dÃ¡Â»Â¥ng)',
	'downloadM3uStatus': 'Ã„Âang tÃ¡ÂºÂ£i danh sÃƒÂ¡ch. Vui lÃƒÂ²ng Ã„â€˜Ã¡Â»Â£i mÃ¡Â»â„¢t lÃƒÂ¡t.',
	'usbMountedStatus': 'USB Ã„â€˜ÃƒÂ£ Ã„â€˜Ã†Â°Ã¡Â»Â£c gÃ¡ÂºÂ¯n',

	'connectionLost': 'MÃ¡ÂºÂ¥t kÃ¡ÂºÂ¿t nÃ¡Â»â€˜i mÃ¡ÂºÂ¡ng. Vui lÃƒÂ²ng kiÃ¡Â»Æ’m tra mÃ¡ÂºÂ¡ng cÃ¡Â»Â§a bÃ¡ÂºÂ¡n.',
	'checkM3uError': 'KhÃƒÂ´ng thÃ¡Â»Æ’ tÃ¡ÂºÂ£i danh sÃƒÂ¡ch. MÃƒÂ£ trÃ¡ÂºÂ¡ng thÃƒÂ¡i HTTP: ',
	'checkM3uFileError': 'KhÃƒÂ´ng phÃ¡ÂºÂ£i lÃƒ  danh sÃƒÂ¡ch m3u(8) hÃ¡Â»Â£p lÃ¡Â»â€¡. Vui lÃƒÂ²ng kiÃ¡Â»Æ’m tra tÃ¡Â»â€¡p.',
	'checkM3uDownloadError': 'KhÃƒÂ´ng thÃ¡Â»Æ’ tÃ¡ÂºÂ£i danh sÃƒÂ¡ch. Vui lÃƒÂ²ng kiÃ¡Â»Æ’m tra URL.',
	'checkM3uDownloadSizeError': 'Danh sÃƒÂ¡ch chÃ¡Â»Â©a quÃƒÂ¡ nhiÃ¡Â»Âu kÃƒÂªnh. Vui lÃƒÂ²ng giÃ¡ÂºÂ£m sÃ¡Â»â€˜ lÃ†Â°Ã¡Â»Â£ng xuÃ¡Â»â€˜ng tÃ¡Â»â€˜i Ã„â€˜a 20.000 kÃƒÂªnh.',
	'checkM3uTimeoutError': 'HÃ¡ÂºÂ¿t thÃ¡Â»Âi gian khi tÃ¡ÂºÂ£i danh sÃƒÂ¡ch. Vui lÃƒÂ²ng thÃ¡Â»Â­ lÃ¡ÂºÂ¡i.',
	'errorNoUsbMounted': 'KhÃƒÂ´ng cÃƒÂ³ thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ lÃ†Â°u trÃ¡Â»Â¯ USB nÃƒ o Ã„â€˜Ã†Â°Ã¡Â»Â£c phÃƒÂ¡t hiÃ¡Â»â€¡n. Vui lÃƒÂ²ng kÃ¡ÂºÂ¿t nÃ¡Â»â€˜i thiÃ¡ÂºÂ¿t bÃ¡Â»â€¹ lÃ†Â°u trÃ¡Â»Â¯ USB trÃ†Â°Ã¡Â»â€ºc.',
	'errorNoM3uUrl': 'Vui lÃƒÂ²ng nhÃ¡ÂºÂ­p URL hÃ¡Â»Â£p lÃ¡Â»â€¡ cho danh sÃƒÂ¡ch m3u(8) cÃ¡Â»Â§a bÃ¡ÂºÂ¡n.',
	'channelLoadError': 'KÃƒÂªnh nÃƒ y khÃƒÂ´ng khÃ¡ÂºÂ£ dÃ¡Â»Â¥ng vÃƒ o lÃƒÂºc nÃƒ y. Vui lÃƒÂ²ng thÃ¡Â»Â­ lÃ¡ÂºÂ¡i sau.',
	'channelLoadConnectionFailed': '(KÃ¡ÂºÂ¿t nÃ¡Â»â€˜i tÃ¡Â»â€ºi luÃ¡Â»â€œng thÃ¡ÂºÂ¥t bÃ¡ÂºÂ¡i.)',
	'channelNotSupportedFile': 'KhÃƒÂ´ng thÃ¡Â»Æ’ tÃ¡ÂºÂ£i kÃƒÂªnh nÃƒ y do Ã„â€˜Ã¡Â»â€¹nh dÃ¡ÂºÂ¡ng khÃƒÂ´ng tÃ†Â°Ã†Â¡ng thÃƒÂ­ch.',
	'errorNoFavouritesYet': 'BÃ¡ÂºÂ¡n chÃ†Â°a cÃƒÂ³ bÃ¡ÂºÂ¥t kÃ¡Â»Â³ kÃƒÂªnh yÃƒÂªu thÃƒÂ­ch nÃƒ o. NhÃ¡ÂºÂ¥n nÃƒÂºt VÃƒâ‚¬NG Ã„â€˜Ã¡Â»Æ’ thÃƒÂªm mÃ¡Â»â„¢t kÃƒÂªnh vÃƒ o danh sÃƒÂ¡ch yÃƒÂªu thÃƒÂ­ch.',
	'errorNoPlaylistHistory': 'KhÃƒÂ´ng cÃƒÂ³ danh sÃƒÂ¡ch phÃƒÂ¡t trong lÃ¡Â»â€¹ch sÃ¡Â»Â­. Vui lÃƒÂ²ng nhÃ¡ÂºÂ­p URL vÃƒ o ÃƒÂ´ bÃƒÂªn dÃ†Â°Ã¡Â»â€ºi.',

	// Menu
	'searchPlaceholder': 'TÃƒÂ¬m kiÃ¡ÂºÂ¿m',
	'allChannels': 'TÃ¡ÂºÂ¥t cÃ¡ÂºÂ£ kÃƒÂªnh',
	'favourites': 'Ã¢Â­Â YÃƒÂªu thÃƒÂ­ch',
	'groups': 'NhÃƒÂ³m',
	'channels': 'KÃƒÂªnh',
	'settings_menu': 'CÃƒ i Ã„â€˜Ã¡ÂºÂ·t',
	'epg_menu': 'EPG',
	'guide_menu': 'HÃ†Â°Ã¡Â»â€ºng dÃ¡ÂºÂ«n',

	'guideControlsHeadline': 'Ã„ÂiÃ¡Â»Âu khiÃ¡Â»Æ’n',

	// Advanced Settings
	'tabGeneralSettings': 'CÃƒ i Ã„â€˜Ã¡ÂºÂ·t chung',
	'tabAdvancedSettings': 'CÃƒ i Ã„â€˜Ã¡ÂºÂ·t nÃƒÂ¢ng cao',
	'chooseMousewheel': 'BÃƒÂ¡nh xe chuÃ¡Â»â„¢t',
	'volumeSetting': 'TÃ„Æ’ng/giÃ¡ÂºÂ£m ÃƒÂ¢m lÃ†Â°Ã¡Â»Â£ng',
	'channelSetting': 'ChuyÃ¡Â»Æ’n kÃƒÂªnh',
	'reloadPlaylistOnStart': 'TÃ¡ÂºÂ£i danh sÃƒÂ¡ch mÃ¡Â»â€”i khi khÃ¡Â»Å¸i Ã„â€˜Ã¡Â»â„¢ng',
	'bufferSetting': 'BÃ¡Â»â„¢ Ã„â€˜Ã¡Â»â€¡m',
	'customUserAgentSetting': 'User Agent',

	// Channel Settings
	'loading': 'Ã„Âang tÃ¡ÂºÂ£i...',
	'audioTrack': 'DÃ¡ÂºÂ¡ng ÃƒÂ¢m thanh',
	'subtitleTrack': 'DÃ¡ÂºÂ¡ng phÃ¡Â»Â¥ Ã„â€˜Ã¡Â»Â',
	'channelSettings': 'CÃƒ i Ã„â€˜Ã¡ÂºÂ·t kÃƒÂªnh',
	'channelSettingSubtitle': 'PhÃ¡Â»Â¥ Ã„â€˜Ã¡Â»Â / Ãƒâ€šm thanh',
	'channelSettingFavs': 'ThÃƒÂªm kÃƒÂªnh vÃƒ o yÃƒÂªu thÃƒÂ­ch',
	'channelSettingPlayback': 'HiÃ¡Â»Æ’n thÃ¡Â»â€¹ Ã„â€˜iÃ¡Â»Âu khiÃ¡Â»Æ’n phÃƒÂ¡t',
	'channelSettingAudioDefault': 'DÃ¡ÂºÂ¡ng mÃ¡ÂºÂ·c Ã„â€˜Ã¡Â»â€¹nh',
	'channelSettingSubNoTrack': 'KhÃƒÂ´ng khÃ¡ÂºÂ£ dÃ¡Â»Â¥ng',
	'channelSettingSubOff': 'TÃ¡ÂºÂ¯t',
	'channelSettingResolution': 'Ã„ÂÃ¡Â»â„¢ phÃƒÂ¢n giÃ¡ÂºÂ£i',

	// EPG
	'epgSource': 'NguÃ¡Â»â€œn EPG',
	'usePlaylistEpgUrl': 'SÃ¡Â»Â­ dÃ¡Â»Â¥ng nguÃ¡Â»â€œn EPG tÃ¡Â»Â« danh sÃƒÂ¡ch cÃ¡Â»Â§a bÃ¡ÂºÂ¡n?',
	'epgTimeShift': 'EPG Time Shift',
	'epgGrabInterval': 'KhoÃ¡ÂºÂ£ng thÃ¡Â»Âi gian lÃ¡ÂºÂ¥y EPG',
	'downloadEpgButton': 'TÃ¡ÂºÂ£i EPG ngay bÃƒÂ¢y giÃ¡Â»Â',
	'noEpgForChannel': 'KhÃƒÂ´ng cÃƒÂ³ EPG cho kÃƒÂªnh nÃƒ y',
	'noEpgUrlGiven': 'ChÃ†Â°a thiÃ¡ÂºÂ¿t lÃ¡ÂºÂ­p URL EPG',
	'epgQuotaExceededError': 'KhÃƒÂ´ng Ã„â€˜Ã¡Â»Â§ khÃƒÂ´ng gian trÃ¡Â»â€˜ng Ã„â€˜Ã¡Â»Æ’ lÃ†Â°u dÃ¡Â»Â¯ liÃ¡Â»â€¡u EPG. Vui lÃƒÂ²ng giÃ¡ÂºÂ£i phÃƒÂ³ng mÃ¡Â»â„¢t sÃ¡Â»â€˜ khÃƒÂ´ng gian, vÃƒÂ­ dÃ¡Â»Â¥ bÃ¡ÂºÂ±ng cÃƒÂ¡ch xÃƒÂ³a cÃƒÂ¡c Ã¡Â»Â©ng dÃ¡Â»Â¥ng khÃƒÂ´ng sÃ¡Â»Â­ dÃ¡Â»Â¥ng.',
	'epgNotCompatibleWithPlaylist': 'Danh sÃƒÂ¡ch cÃ¡Â»Â§a bÃ¡ÂºÂ¡n khÃƒÂ´ng tÃ†Â°Ã†Â¡ng thÃƒÂ­ch vÃ¡Â»â€ºi URL EPG nÃƒ y.',
	'epgIsDownloading': 'Ã„Âang tÃ¡ÂºÂ£i EPG...',
	'epgChannelsProcessed': 'kÃƒÂªnh: ',
	'epgProgramsProcessed': 'chÃ†Â°Ã†Â¡ng trÃƒÂ¬nh: ',
	'epgNow': 'HiÃ¡Â»â€¡n tÃ¡ÂºÂ¡i',
	'epgAfter': 'Sau',
},
'uk': {
    'yes': 'Ã‘â€šÃÂ°ÃÂº', 'no': 'ÃÂ½Ã‘â€“',

    'm3uSource': 'URL ÃÂ´ÃÂ¾ Ã‘â€žÃÂ°ÃÂ¹ÃÂ»Ã‘Æ’ m3u(8)',
    'chooseLang': 'ÃÅ“ÃÂ¾ÃÂ²ÃÂ°',
    'usbLoadLabel': 'ÃÅ¸ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ· USB',
    'openUsbButton': 'ÃÅ¸ÃÂµÃ‘â‚¬ÃÂµÃÂ³ÃÂ»Ã‘ÂÃÂ½Ã‘Æ’Ã‘â€šÃÂ¸ USB',
    'localLoadLabel': 'Ãâ€ºÃÂ¾ÃÂºÃÂ°ÃÂ»Ã‘Å’ÃÂ½ÃÂ¸ÃÂ¹ Ã‘â€žÃÂ°ÃÂ¹ÃÂ» m3u(8)',
    'openExplorerButton': 'Ãâ€™Ã‘â€“ÃÂ´ÃÂºÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ²Ã‘â€“ÃÂ´ÃÂ½ÃÂ¸ÃÂº',
    'openHistoryButton': 'Ãâ€ Ã‘ÂÃ‘â€šÃÂ¾Ã‘â‚¬Ã‘â€“Ã‘Â',
    'downloadButton': 'Ãâ€”ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š',
    'saveButton': 'Ãâ€”ÃÂ±ÃÂµÃ‘â‚¬ÃÂµÃÂ³Ã‘â€šÃÂ¸ Ã‘â€šÃÂ° ÃÂ²Ã‘â€“ÃÂ´Ã‘â€šÃÂ²ÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘â€šÃÂ¸',
    'deleteButton': 'Ãâ€™ÃÂ¸ÃÂ´ÃÂ°ÃÂ»ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š',
    'generalSettingsButton': 'Ãâ€”ÃÂ°ÃÂ³ÃÂ°ÃÂ»Ã‘Å’ÃÂ½Ã‘â€“ ÃÂ½ÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â',
    'advancedSettingsButton': 'Ã ÃÂ¾ÃÂ·Ã‘Ë†ÃÂ¸Ã‘â‚¬ÃÂµÃÂ½Ã‘â€“ ÃÂ½ÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â',

    'closeAppHint': 'Ãâ€™ÃÂ¸ ÃÂ´Ã‘â€“ÃÂ¹Ã‘ÂÃÂ½ÃÂ¾ ÃÂ±ÃÂ°ÃÂ¶ÃÂ°Ã‘â€Ã‘â€šÃÂµ ÃÂ·ÃÂ°ÃÂºÃ‘â‚¬ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ´ÃÂ¾ÃÂ´ÃÂ°Ã‘â€šÃÂ¾ÃÂº?',
    'hideModalHint': 'ÃÂÃÂ°Ã‘â€šÃÂ¸Ã‘ÂÃÂ½Ã‘â€“Ã‘â€šÃ‘Å’ ÃÂ±Ã‘Æ’ÃÂ´Ã‘Å’-Ã‘ÂÃÂºÃ‘Æ’ ÃÂºÃÂ½ÃÂ¾ÃÂ¿ÃÂºÃ‘Æ’ ÃÂ´ÃÂ»Ã‘Â ÃÂ·ÃÂ°ÃÂºÃ‘â‚¬ÃÂ¸Ã‘â€šÃ‘â€šÃ‘Â Ã‘â€ Ã‘Å’ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¿ÃÂ¾ÃÂ²Ã‘â€“ÃÂ´ÃÂ¾ÃÂ¼ÃÂ»ÃÂµÃÂ½ÃÂ½Ã‘Â.',
    'playlistDownloaded': 'ÃÅ¸ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š Ã‘Æ’Ã‘ÂÃÂ¿Ã‘â€“Ã‘Ë†ÃÂ½ÃÂ¾ ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ¾.<br>%i ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€“ÃÂ² ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ¾.',
    'channelsLoaded': 'ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€“ÃÂ²',
    'filterNoResults': 'Ãâ€ÃÂ»Ã‘Â ÃÂ²ÃÂºÃÂ°ÃÂ·ÃÂ°ÃÂ½ÃÂ¾ÃÂ³ÃÂ¾ Ã‘â€žÃ‘â€“ÃÂ»Ã‘Å’Ã‘â€šÃ‘â‚¬ÃÂ° ÃÂ½ÃÂµ ÃÂ·ÃÂ½ÃÂ°ÃÂ¹ÃÂ´ÃÂµÃÂ½ÃÂ¾ ÃÂ¶ÃÂ¾ÃÂ´ÃÂ½ÃÂ¾ÃÂ³ÃÂ¾ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘Æ’.',

    'redButtonHint': '<span class="red-button">A</span> ÃÂ¿ÃÂ¾Ã‘Ë†Ã‘Æ’ÃÂº',
    'helpHint': 'ÃÂÃÂ°Ã‘â€šÃÂ¸Ã‘ÂÃÂ½Ã‘â€“Ã‘â€šÃ‘Å’ <span class="red-button">A</span>-ÃÂºÃÂ½ÃÂ¾ÃÂ¿ÃÂºÃ‘Æ’, Ã‘â€°ÃÂ¾ÃÂ± ÃÂ²Ã‘ÂÃ‘â€šÃÂ°ÃÂ²ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ´ÃÂµÃÂ¼ÃÂ¾ÃÂ½Ã‘ÂÃ‘â€šÃ‘â‚¬ÃÂ°Ã‘â€ Ã‘â€“ÃÂ¹ÃÂ½ÃÂ¸ÃÂ¹ Ã‘ÂÃÂ¿ÃÂ¸Ã‘ÂÃÂ¾ÃÂº ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€“ÃÂ².<br><br>ÃÂÃÂ°Ã‘â€šÃÂ¸Ã‘ÂÃÂºÃÂ°ÃÂ¹Ã‘â€šÃÂµ INFO ÃÂ½ÃÂ° ÃÂ¿Ã‘Æ’ÃÂ»Ã‘Å’Ã‘â€šÃ‘â€“ Ã‘Æ’ ÃÂ±Ã‘Æ’ÃÂ´Ã‘Å’-Ã‘ÂÃÂºÃÂ¸ÃÂ¹ ÃÂ¼ÃÂ¾ÃÂ¼ÃÂµÃÂ½Ã‘â€š ÃÂ´ÃÂ»Ã‘Â ÃÂ¾Ã‘â€šÃ‘â‚¬ÃÂ¸ÃÂ¼ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂºÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘ÂÃ‘â€šÃ‘Æ’ÃÂ²ÃÂ°Ã‘â€ Ã‘Å’ÃÂºÃÂ¾ÃÂ³ÃÂ¾ ÃÂºÃÂµÃ‘â‚¬Ã‘â€“ÃÂ²ÃÂ½ÃÂ¸Ã‘â€ Ã‘â€šÃÂ²ÃÂ°.',

    'supportContact': 'Ãâ€ÃÂ»Ã‘Â ÃÂ¾Ã‘â€šÃ‘â‚¬ÃÂ¸ÃÂ¼ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂ´ÃÂ¾ÃÂ´ÃÂ°Ã‘â€šÃÂºÃÂ¾ÃÂ²ÃÂ¾Ã‘â€” Ã‘â€“ÃÂ½Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€ Ã‘â€“Ã‘â€” ÃÂ²Ã‘â€“ÃÂ´ÃÂ²Ã‘â€“ÃÂ´ÃÂ°ÃÂ¹Ã‘â€šÃÂµ https://jeromelaliag.link/uk',
    'supportContactLinked': 'Ãâ€ÃÂ»Ã‘Â ÃÂ¾Ã‘â€šÃ‘â‚¬ÃÂ¸ÃÂ¼ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂ´ÃÂ¾ÃÂ´ÃÂ°Ã‘â€šÃÂºÃÂ¾ÃÂ²ÃÂ¾Ã‘â€” Ã‘â€“ÃÂ½Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€ Ã‘â€“Ã‘â€” ÃÂ²Ã‘â€“ÃÂ´ÃÂ²Ã‘â€“ÃÂ´ÃÂ°ÃÂ¹Ã‘â€šÃÂµ <a href="https://jeromelaliag.link/uk/" target="_blank">https://jeromelaliag.link/uk</a>',
    'donate': 'ÃÂ¯ÃÂºÃ‘â€°ÃÂ¾ ÃÂ²ÃÂ°ÃÂ¼ ÃÂ¿ÃÂ¾ÃÂ´ÃÂ¾ÃÂ±ÃÂ°Ã‘â€Ã‘â€šÃ‘Å’Ã‘ÂÃ‘Â Ã‘â€ ÃÂµÃÂ¹ ÃÂ´ÃÂ¾ÃÂ´ÃÂ°Ã‘â€šÃÂ¾ÃÂº, ÃÂ±Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ¿Ã‘â€“ÃÂ´Ã‘â€šÃ‘â‚¬ÃÂ¸ÃÂ¼ÃÂ°ÃÂ¹Ã‘â€šÃÂµ ÃÂ¼ÃÂµÃÂ½ÃÂµ ÃÂ¼ÃÂ°ÃÂ»ÃÂµÃÂ½Ã‘Å’ÃÂºÃÂ¸ÃÂ¼ ÃÂ¿ÃÂ¾ÃÂ¶ÃÂµÃ‘â‚¬Ã‘â€šÃÂ²Ã‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘ÂÃÂ¼.<br>Ãâ€™Ã‘â€“ÃÂ´ÃÂ²Ã‘â€“ÃÂ´ÃÂ°ÃÂ¹Ã‘â€šÃÂµ <b class="NOBR">https://jeromelaliag.link</b><br>ÃÂ°ÃÂ±ÃÂ¾ Ã‘ÂÃÂºÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘ÂÃ‘â€šÃÂ°ÃÂ¹Ã‘â€šÃÂµÃ‘ÂÃ‘Â QR-ÃÂºÃÂ¾ÃÂ´ÃÂ¾ÃÂ¼.',
    'donatePP': 'PayPal', 'donateKK': 'Stripe (ÃÂºÃ‘â‚¬ÃÂµÃÂ´ÃÂ¸Ã‘â€šÃÂ½ÃÂ° ÃÂºÃÂ°Ã‘â‚¬Ã‘â€šÃÂ°)',
    'downloadM3uStatus': 'Ãâ€”ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ½Ã‘Â ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ°. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ·ÃÂ°Ã‘â€¡ÃÂµÃÂºÃÂ°ÃÂ¹Ã‘â€šÃÂµ.',
    'usbMountedStatus': 'USB ÃÂ¿Ã‘â€“ÃÂ´ÃÂºÃÂ»Ã‘Å½Ã‘â€¡ÃÂµÃÂ½ÃÂ¾',

    'connectionLost': 'Ãâ€™Ã‘â€šÃ‘â‚¬ÃÂ°Ã‘â€šÃÂ° ÃÂ¼ÃÂµÃ‘â‚¬ÃÂµÃÂ¶ÃÂµÃÂ²ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ·\'Ã‘â€ÃÂ´ÃÂ½ÃÂ°ÃÂ½ÃÂ½Ã‘Â. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ¿ÃÂµÃ‘â‚¬ÃÂµÃÂ²Ã‘â€“Ã‘â‚¬Ã‘â€šÃÂµ Ã‘ÂÃÂ²ÃÂ¾Ã‘Å½ ÃÂ¼ÃÂµÃ‘â‚¬ÃÂµÃÂ¶Ã‘Æ’.',
    'checkM3uError': 'ÃÂÃÂµ ÃÂ²ÃÂ´ÃÂ°ÃÂ»ÃÂ¾Ã‘ÂÃ‘Â ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š. HTTP Ã‘ÂÃ‘â€šÃÂ°Ã‘â€šÃ‘Æ’Ã‘Â-ÃÂºÃÂ¾ÃÂ´: ',
    'checkM3uFileError': 'ÃÂÃÂµÃÂ¿Ã‘â‚¬ÃÂ°ÃÂ²ÃÂ¸ÃÂ»Ã‘Å’ÃÂ½ÃÂ¸ÃÂ¹ Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€š Ã‘â€žÃÂ°ÃÂ¹ÃÂ»Ã‘Æ’ m3u(8). Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ¿ÃÂµÃ‘â‚¬ÃÂµÃÂ²Ã‘â€“Ã‘â‚¬Ã‘â€šÃÂµ Ã‘â€žÃÂ°ÃÂ¹ÃÂ».',
    'checkM3uDownloadError': 'ÃÂÃÂµ ÃÂ²ÃÂ´ÃÂ°ÃÂ»ÃÂ¾Ã‘ÂÃ‘Â ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ¿ÃÂµÃ‘â‚¬ÃÂµÃÂ²Ã‘â€“Ã‘â‚¬Ã‘â€šÃÂµ URL.',
    'checkM3uDownloadSizeError': 'ÃÅ¸ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ¼Ã‘â€“Ã‘ÂÃ‘â€šÃÂ¸Ã‘â€šÃ‘Å’ ÃÂ·ÃÂ°ÃÂ±ÃÂ°ÃÂ³ÃÂ°Ã‘â€šÃÂ¾ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€“ÃÂ². Ãâ€”ÃÂ¼ÃÂµÃÂ½Ã‘Ë†Ã‘â€šÃÂµ Ã‘â€”Ã‘â€¦ ÃÂ´ÃÂ¾ ÃÂ¼ÃÂ°ÃÂºÃ‘ÂÃÂ¸ÃÂ¼Ã‘Æ’ÃÂ¼Ã‘Æ’ - 20 000 ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€“ÃÂ².',
    'checkM3uTimeoutError': 'ÃÂ§ÃÂ°Ã‘Â ÃÂ¾Ã‘â€¡Ã‘â€“ÃÂºÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂ²ÃÂ¸ÃÂ¹Ã‘Ë†ÃÂ¾ÃÂ² ÃÂ¿Ã‘â€“ÃÂ´ Ã‘â€¡ÃÂ°Ã‘Â ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ½Ã‘Â ÃÂ²ÃÂ°Ã‘Ë†ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ°. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, Ã‘ÂÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ±Ã‘Æ’ÃÂ¹Ã‘â€šÃÂµ Ã‘â€°ÃÂµ Ã‘â‚¬ÃÂ°ÃÂ·.',
    'errorNoUsbMounted': 'ÃÂÃÂµ ÃÂ²ÃÂ¸Ã‘ÂÃÂ²ÃÂ»ÃÂµÃÂ½ÃÂ¾ USB-Ã‘ÂÃ‘â€¦ÃÂ¾ÃÂ²ÃÂ¸Ã‘â€°ÃÂµ. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ¿Ã‘â€“ÃÂ´ÃÂºÃÂ»Ã‘Å½Ã‘â€¡Ã‘â€“Ã‘â€šÃ‘Å’ ÃÂ¿Ã‘â‚¬ÃÂ¸Ã‘ÂÃ‘â€šÃ‘â‚¬Ã‘â€“ÃÂ¹ ÃÂ·ÃÂ±ÃÂµÃ‘â‚¬Ã‘â€“ÃÂ³ÃÂ°ÃÂ½ÃÂ½Ã‘Â USB Ã‘ÂÃÂ¿ÃÂ¾Ã‘â€¡ÃÂ°Ã‘â€šÃÂºÃ‘Æ’.',
    'errorNoM3uUrl': 'Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ²ÃÂ²ÃÂµÃÂ´Ã‘â€“Ã‘â€šÃ‘Å’ ÃÂ´Ã‘â€“ÃÂ¹Ã‘ÂÃÂ½ÃÂ¸ÃÂ¹ URL ÃÂ´ÃÂ¾ ÃÂ²ÃÂ°Ã‘Ë†ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ° m3u(8).',
    'channelLoadError': 'ÃÂ¦ÃÂµÃÂ¹ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ½ÃÂ° ÃÂ´ÃÂ°ÃÂ½ÃÂ¸ÃÂ¹ ÃÂ¼ÃÂ¾ÃÂ¼ÃÂµÃÂ½Ã‘â€š ÃÂ½ÃÂµÃÂ´ÃÂ¾Ã‘ÂÃ‘â€šÃ‘Æ’ÃÂ¿ÃÂ½ÃÂ¸ÃÂ¹. ÃÂ¡ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ±Ã‘Æ’ÃÂ¹Ã‘â€šÃÂµ Ã‘â€°ÃÂµ Ã‘â‚¬ÃÂ°ÃÂ· ÃÂ¿Ã‘â€“ÃÂ·ÃÂ½Ã‘â€“Ã‘Ë†ÃÂµ.',
    'channelLoadConnectionFailed': '(Ãâ€”\'Ã‘â€ÃÂ´ÃÂ½ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂ· ÃÂ¿ÃÂ¾Ã‘â€šÃÂ¾ÃÂºÃÂ¾ÃÂ¼ ÃÂ²Ã‘â€šÃ‘â‚¬ÃÂ°Ã‘â€¡ÃÂµÃÂ½ÃÂ¾.)',
    'channelNotSupportedFile': 'ÃÂ¦ÃÂµÃÂ¹ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ½ÃÂµ ÃÂ¼ÃÂ¾ÃÂ¶ÃÂµ ÃÂ±Ã‘Æ’Ã‘â€šÃÂ¸ ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ¸ÃÂ¹ Ã‘â€¡ÃÂµÃ‘â‚¬ÃÂµÃÂ· ÃÂ½ÃÂµÃ‘ÂÃ‘Æ’ÃÂ¼Ã‘â€“Ã‘ÂÃÂ½ÃÂ¸ÃÂ¹ Ã‘â€žÃÂ¾Ã‘â‚¬ÃÂ¼ÃÂ°Ã‘â€š.',
    'errorNoFavouritesYet': 'ÃÂ£ ÃÂ²ÃÂ°Ã‘Â Ã‘â€°ÃÂµ ÃÂ½ÃÂµÃÂ¼ÃÂ°Ã‘â€ Ã‘Æ’ÃÂ»Ã‘Å½ÃÂ±ÃÂ»ÃÂµÃÂ½ÃÂ¸Ã‘â€¦ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘â€“ÃÂ². ÃÂÃÂ°Ã‘â€šÃÂ¸Ã‘ÂÃÂ½Ã‘â€“Ã‘â€šÃ‘Å’ ÃÂºÃÂ½ÃÂ¾ÃÂ¿ÃÂºÃ‘Æ’ Ãâ€“ÃÅ¾Ãâ€™ÃÂ¢ÃÂ£, Ã‘â€°ÃÂ¾ÃÂ± ÃÂ´ÃÂ¾ÃÂ´ÃÂ°Ã‘â€šÃÂ¸ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ´ÃÂ¾ Ã‘Æ’ÃÂ»Ã‘Å½ÃÂ±ÃÂ»ÃÂµÃÂ½ÃÂ¸Ã‘â€¦.',
    'errorNoPlaylistHistory': 'Ãâ€ Ã‘ÂÃ‘â€šÃÂ¾Ã‘â‚¬Ã‘â€“Ã‘Â ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃ‘â€“ÃÂ² ÃÂ²Ã‘â€“ÃÂ´Ã‘ÂÃ‘Æ’Ã‘â€šÃÂ½Ã‘Â. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ²Ã‘ÂÃ‘â€šÃÂ°ÃÂ²Ã‘â€šÃÂµ URL ÃÂ² ÃÂ¿ÃÂ¾ÃÂ»ÃÂµ ÃÂ½ÃÂ¸ÃÂ¶Ã‘â€¡ÃÂµ.',

    // ÃÅ“ÃÂµÃÂ½Ã‘Å½
    'searchPlaceholder': 'ÃÅ¸ÃÂ¾Ã‘Ë†Ã‘Æ’ÃÂº',
    'allChannels': 'Ãâ€™Ã‘ÂÃ‘â€“ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¸',
    'favourites': 'Ã¢Â­Â ÃÂ£ÃÂ»Ã‘Å½ÃÂ±ÃÂ»ÃÂµÃÂ½Ã‘â€“',
    'groups': 'Ãâ€œÃ‘â‚¬Ã‘Æ’ÃÂ¿ÃÂ¸',
    'channels': 'ÃÅ¡ÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¸',
    'settings_menu': 'ÃÂÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â',
    'epg_menu': 'EPG',
    'guide_menu': 'ÃÅ¸ÃÂ¾Ã‘ÂÃ‘â€“ÃÂ±ÃÂ½ÃÂ¸ÃÂº',

    'guideControlsHeadline': 'ÃÅ¡ÃÂµÃ‘â‚¬Ã‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â',

    // Ã ÃÂ¾ÃÂ·Ã‘Ë†ÃÂ¸Ã‘â‚¬ÃÂµÃÂ½Ã‘â€“ ÃÂ½ÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â
    'tabGeneralSettings': 'Ãâ€”ÃÂ°ÃÂ³ÃÂ°ÃÂ»Ã‘Å’ÃÂ½Ã‘â€“ ÃÂ½ÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â',
    'tabAdvancedSettings': 'Ã ÃÂ¾ÃÂ·Ã‘Ë†ÃÂ¸Ã‘â‚¬ÃÂµÃÂ½Ã‘â€“ ÃÂ½ÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â',
    'chooseMousewheel': 'ÃÅ¡ÃÂ¾ÃÂ»ÃÂµÃ‘ÂÃÂ¾ ÃÂ¼ÃÂ¸Ã‘Ë†Ã‘â€“',
    'volumeSetting': 'Ãâ€”ÃÂ±Ã‘â€“ÃÂ»Ã‘Å’Ã‘Ë†ÃÂµÃÂ½ÃÂ½Ã‘Â/ÃÂ·ÃÂ¼ÃÂµÃÂ½Ã‘Ë†ÃÂµÃÂ½ÃÂ½Ã‘Â ÃÂ³Ã‘Æ’Ã‘â€¡ÃÂ½ÃÂ¾Ã‘ÂÃ‘â€šÃ‘â€“',
    'channelSetting': 'ÃÅ¸ÃÂµÃ‘â‚¬ÃÂµÃÂ¼ÃÂ¾Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘Æ’ ÃÂ²ÃÂ¿ÃÂµÃ‘â‚¬ÃÂµÃÂ´/ÃÂ½ÃÂ°ÃÂ·ÃÂ°ÃÂ´',
    'reloadPlaylistOnStart': 'Ãâ€”ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂ¸Ã‘â€šÃÂ¸ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ¿Ã‘â‚¬ÃÂ¸ ÃÂºÃÂ¾ÃÂ¶ÃÂ½ÃÂ¾ÃÂ¼Ã‘Æ’ ÃÂ·ÃÂ°ÃÂ¿Ã‘Æ’Ã‘ÂÃÂºÃ‘Æ’',
    'bufferSetting': 'Ãâ€˜Ã‘Æ’Ã‘â€žÃÂµÃ‘â‚¬ÃÂ¸ÃÂ·ÃÂ°Ã‘â€ Ã‘â€“Ã‘Â',
    'customUserAgentSetting': 'Ãâ€ ÃÂ´ÃÂµÃÂ½Ã‘â€šÃÂ¸Ã‘â€žÃ‘â€“ÃÂºÃÂ°Ã‘â€šÃÂ¾Ã‘â‚¬ ÃÂºÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘ÂÃ‘â€šÃ‘Æ’ÃÂ²ÃÂ°Ã‘â€¡ÃÂ°',

    // ÃÂÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘Æ’
    'loading': 'ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ½Ã‘Â...',
    'audioTrack': 'ÃÂÃ‘Æ’ÃÂ´Ã‘â€“ÃÂ¾ ÃÂ´ÃÂ¾Ã‘â‚¬Ã‘â€“ÃÂ¶ÃÂºÃÂ°',
    'subtitleTrack': 'ÃÂ¡Ã‘Æ’ÃÂ±Ã‘â€šÃÂ¸Ã‘â€šÃ‘â‚¬ÃÂ¸',
    'channelSettings': 'ÃÂÃÂ°ÃÂ»ÃÂ°Ã‘Ë†Ã‘â€šÃ‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘Æ’',
    'channelSettingSubtitle': 'Ã‘ÂÃ‘Æ’ÃÂ±Ã‘â€šÃÂ¸Ã‘â€šÃ‘â‚¬ÃÂ¸ / ÃÂ°Ã‘Æ’ÃÂ´Ã‘â€“ÃÂ¾',
    'channelSettingFavs': 'ÃÂ´ÃÂ¾ÃÂ´ÃÂ°Ã‘â€šÃÂ¸ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ» ÃÂ² Ã‘Æ’ÃÂ»Ã‘Å½ÃÂ±ÃÂ»ÃÂµÃÂ½Ã‘â€“',
    'channelSettingPlayback': 'ÃÂ¿ÃÂ¾ÃÂºÃÂ°ÃÂ·ÃÂ°Ã‘â€šÃÂ¸ ÃÂµÃÂ»ÃÂµÃÂ¼ÃÂµÃÂ½Ã‘â€šÃÂ¸ ÃÂºÃÂµÃ‘â‚¬Ã‘Æ’ÃÂ²ÃÂ°ÃÂ½ÃÂ½Ã‘Â ÃÂ²Ã‘â€“ÃÂ´Ã‘â€šÃÂ²ÃÂ¾Ã‘â‚¬ÃÂµÃÂ½ÃÂ½Ã‘ÂÃÂ¼',
    'channelSettingAudioDefault': 'Ã‘â€šÃÂ¸ÃÂ¿ÃÂ¾ÃÂ²ÃÂ° ÃÂ°Ã‘Æ’ÃÂ´Ã‘â€“ÃÂ¾ ÃÂ´ÃÂ¾Ã‘â‚¬Ã‘â€“ÃÂ¶ÃÂºÃÂ°',
    'channelSettingSubNoTrack': 'ÃÂ½ÃÂµÃÂ´ÃÂ¾Ã‘ÂÃ‘â€šÃ‘Æ’ÃÂ¿ÃÂ½ÃÂ¾',
    'channelSettingSubOff': 'ÃÂ²ÃÂ¸ÃÂ¼ÃÂºÃÂ½Ã‘Æ’Ã‘â€šÃÂ¸',
    'channelSettingResolution': 'Ã‘â‚¬ÃÂ¾ÃÂ·ÃÂ´Ã‘â€“ÃÂ»Ã‘Å’ÃÂ½ÃÂ° ÃÂ·ÃÂ´ÃÂ°Ã‘â€šÃÂ½Ã‘â€“Ã‘ÂÃ‘â€šÃ‘Å’',

    // EPG
    'epgSource': 'Ãâ€ÃÂ¶ÃÂµÃ‘â‚¬ÃÂµÃÂ»ÃÂ¾ EPG',
    'usePlaylistEpgUrl': 'Ãâ€™ÃÂ¸ÃÂºÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾ÃÂ²Ã‘Æ’ÃÂ²ÃÂ°Ã‘â€šÃÂ¸ ÃÂ´ÃÂ¶ÃÂµÃ‘â‚¬ÃÂµÃÂ»ÃÂ¾ EPG ÃÂ· ÃÂ²ÃÂ°Ã‘Ë†ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€šÃÂ°?',
    'epgTimeShift': 'ÃÂ§ÃÂ°Ã‘ÂÃÂ¾ÃÂ²ÃÂ¸ÃÂ¹ ÃÂ·Ã‘ÂÃ‘Æ’ÃÂ² EPG',
    'epgGrabInterval': 'Ãâ€ ÃÂ½Ã‘â€šÃÂµÃ‘â‚¬ÃÂ²ÃÂ°ÃÂ» ÃÂ·ÃÂ±ÃÂ¾Ã‘â‚¬Ã‘Æ’ EPG',
    'downloadEpgButton': 'ÃÂ·ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂ¸Ã‘â€šÃÂ¸ EPG ÃÂ·ÃÂ°Ã‘â‚¬ÃÂ°ÃÂ·',
    'noEpgForChannel': 'ÃÂÃÂµÃÂ¼ÃÂ°Ã‘â€ EPG ÃÂ´ÃÂ»Ã‘Â Ã‘â€ Ã‘Å’ÃÂ¾ÃÂ³ÃÂ¾ ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»Ã‘Æ’',
    'noEpgUrlGiven': 'ÃÂÃÂµ ÃÂ²ÃÂºÃÂ°ÃÂ·ÃÂ°ÃÂ½ÃÂ¾ URL EPG',
    'epgQuotaExceededError': 'ÃÂÃÂµÃÂ´ÃÂ¾Ã‘ÂÃ‘â€šÃÂ°Ã‘â€šÃÂ½Ã‘Å’ÃÂ¾ ÃÂ²Ã‘â€“ÃÂ»Ã‘Å’ÃÂ½ÃÂ¾ÃÂ³ÃÂ¾ ÃÂ¼Ã‘â€“Ã‘ÂÃ‘â€ Ã‘Â ÃÂ´ÃÂ»Ã‘Â ÃÂ·ÃÂ±ÃÂµÃ‘â‚¬ÃÂµÃÂ¶ÃÂµÃÂ½ÃÂ½Ã‘Â ÃÂ´ÃÂ°ÃÂ½ÃÂ¸Ã‘â€¦ EPG. Ãâ€˜Ã‘Æ’ÃÂ´Ã‘Å’ ÃÂ»ÃÂ°Ã‘ÂÃÂºÃÂ°, ÃÂ·ÃÂ²Ã‘â€“ÃÂ»Ã‘Å’ÃÂ½Ã‘â€“Ã‘â€šÃ‘Å’ ÃÂ¿Ã‘â‚¬ÃÂ¾Ã‘ÂÃ‘â€šÃ‘â€“Ã‘â‚¬. ÃÂÃÂ°ÃÂ¿Ã‘â‚¬ÃÂ¸ÃÂºÃÂ»ÃÂ°ÃÂ´, ÃÂ²ÃÂ¸ÃÂ´ÃÂ°ÃÂ»Ã‘â€“Ã‘â€šÃ‘Å’ ÃÂ½ÃÂµ ÃÂ²ÃÂ¸ÃÂºÃÂ¾Ã‘â‚¬ÃÂ¸Ã‘ÂÃ‘â€šÃÂ¾ÃÂ²Ã‘Æ’ÃÂ²ÃÂ°ÃÂ½Ã‘â€“ ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ³Ã‘â‚¬ÃÂ°ÃÂ¼ÃÂ¸.',
    'epgNotCompatibleWithPlaylist': 'Ãâ€™ÃÂ°Ã‘Ë† ÃÂ¿ÃÂ»ÃÂµÃÂ¹ÃÂ»ÃÂ¸Ã‘ÂÃ‘â€š ÃÂ½ÃÂµÃ‘ÂÃ‘Æ’ÃÂ¼Ã‘â€“Ã‘ÂÃÂ½ÃÂ¸ÃÂ¹ ÃÂ· Ã‘â€ ÃÂ¸ÃÂ¼ URL EGP.',
    'epgIsDownloading': 'Ãâ€”ÃÂ°ÃÂ²ÃÂ°ÃÂ½Ã‘â€šÃÂ°ÃÂ¶ÃÂµÃÂ½ÃÂ½Ã‘Â EPG...',
    'epgChannelsProcessed': 'ÃÂºÃÂ°ÃÂ½ÃÂ°ÃÂ»ÃÂ¸: ',
    'epgProgramsProcessed': 'ÃÂ¿Ã‘â‚¬ÃÂ¾ÃÂ³Ã‘â‚¬ÃÂ°ÃÂ¼ÃÂ¸: ',
    'epgNow': 'Ãâ€”ÃÂ°Ã‘â‚¬ÃÂ°ÃÂ·',
    'epgAfter': 'ÃÅ¸Ã‘â€“Ã‘ÂÃÂ»Ã‘Â',
},
'id': {
	'yes': 'ya', 'no': 'tidak',

	'm3uSource': 'URL ke file m3u(8)',
	'chooseLang': 'Bahasa',
	'usbLoadLabel': 'Playlist dari USB',
	'openUsbButton': 'telusuri USB',
	'localLoadLabel': 'File m3u(8) lokal',
	'openExplorerButton': 'buka penjelajah',
	'openHistoryButton': 'riwayat',
	'downloadButton': 'muat playlist',
	'saveButton': 'simpan dan mainkan',
	'deleteButton': 'hapus playlist',
	'generalSettingsButton': 'pengaturan umum',
	'advancedSettingsButton': 'pengaturan lanjutan',

	'closeAppHint': 'Apakah Anda ingin menutup aplikasi ini?',
	'hideModalHint': 'Tekan tombol apa saja untuk menutup pesan ini.',
	'playlistDownloaded': 'Playlist berhasil diunduh.<br>%i channel dimuat.',
	'channelsLoaded': 'channel',
	'filterNoResults': 'Tidak ada channel yang ditemukan untuk filter yang diberikan.',

	'redButtonHint': '<span class="red-button">A</span> pencarian',
	'helpHint': 'Tekan tombol <span class="red-button">A</span> untuk menyisipkan daftar channel demo.<br><br>Tekan INFO pada remote control kapan saja untuk panduan pengguna.',

	'supportContact': 'Untuk informasi lebih lanjut, kunjungi https://jeromelaliag.link/en',
	'supportContactLinked': 'Untuk informasi lebih lanjut, kunjungi <a href="https://jeromelaliag.link/en/" target="_blank">https://jeromelaliag.link/en</a>',
	'donate': 'Jika Anda menyukai aplikasi ini, dukung saya dengan sedikit donasi.<br>Kunjungi <b class="NOBR">https://jeromelaliag.link</b><br>atau melalui kode QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kartu kredit)',
	'downloadM3uStatus': 'Memuat playlist. Harap tunggu sebentar.',
	'usbMountedStatus': 'USB terpasang',

	'connectionLost': 'Koneksi jaringan terputus. Harap periksa jaringan Anda.',
	'checkM3uError': 'Tidak dapat memuat playlist. Kode status HTTP: ',
	'checkM3uFileError': 'Bukan playlist m3u(8) yang valid. Harap periksa file.',
	'checkM3uDownloadError': 'Tidak dapat memuat playlist. Harap periksa URL.',
	'checkM3uDownloadSizeError': 'Playlist mengandung terlalu banyak channel. Harap kurangi hingga maksimal 20.000 channel.',
	'checkM3uTimeoutError': 'Waktu habis saat memuat playlist Anda. Silakan coba lagi.',
	'errorNoUsbMounted': 'Tidak ada penyimpanan USB yang terdeteksi. Harap hubungkan perangkat penyimpanan USB terlebih dahulu.',
	'errorNoM3uUrl': 'Harap masukkan URL yang valid ke playlist m3u(8) Anda.',
	'channelLoadError': 'Channel ini tidak tersedia saat ini. Silakan coba lagi nanti.',
	'channelLoadConnectionFailed': '(Koneksi ke stream gagal.)',
	'channelNotSupportedFile': 'Channel ini tidak dapat dimuat karena format yang tidak kompatibel.',
	'errorNoFavouritesYet': 'Anda belum memiliki channel favorit. Tekan tombol KUNING untuk menandai sebagai favorit.',
	'errorNoPlaylistHistory': 'Belum ada playlist dalam riwayat. Silakan masukkan URL di bawah ini.',

	// Menu
	'searchPlaceholder': 'Cari',
	'allChannels': 'Semua channel',
	'favourites': 'Ã¢Â­Â Favorit',
	'groups': 'Grup',
	'channels': 'Channel',
	'settings_menu': 'Pengaturan',
	'epg_menu': 'EPG',
	'guide_menu': 'Panduan',

	'guideControlsHeadline': 'Kontrol',

	// Advanced Settings
	'tabGeneralSettings': 'Pengaturan Umum',
	'tabAdvancedSettings': 'Pengaturan Lanjutan',
	'chooseMousewheel': 'Roda mouse',
	'volumeSetting': 'Volume naik/turun',
	'channelSetting': 'Channel maju/mundur',
	'reloadPlaylistOnStart': 'Unduh playlist setiap kali mulai',
	'bufferSetting': 'Buffer',
	'customUserAgentSetting': 'User Agent',

	// Channel Settings
	'loading': 'memuat...',
	'audioTrack': 'Audio track',
	'subtitleTrack': 'Subtitle track',
	'channelSettings': 'Pengaturan channel',
	'channelSettingSubtitle': 'subtitle / audio',
	'channelSettingFavs': 'masukkan channel ke favorit',
	'channelSettingPlayback': 'tampilkan kontrol pemutaran',
	'channelSettingAudioDefault': 'track default',
	'channelSettingSubNoTrack': 'tidak tersedia',
	'channelSettingSubOff': 'nonaktifkan',
	'channelSettingResolution': 'resolusi',

	// EPG
	'epgSource': 'Sumber EPG',
	'usePlaylistEpgUrl': 'Gunakan sumber EPG dari playlist Anda?',
	'epgTimeShift': 'Pergeseran Waktu EPG',
	'epgGrabInterval': 'Interval pengambilan EPG',
	'downloadEpgButton': 'unduh EPG sekarang',
	'noEpgForChannel': 'Tidak ada EPG untuk channel ini',
	'noEpgUrlGiven': 'Tidak ada URL EPG yang ditetapkan',
	'epgQuotaExceededError': 'Tidak cukup ruang bebas untuk menyimpan data EPG. Harap bebaskan beberapa ruang. Misalnya dengan menghapus aplikasi yang tidak terpakai.',
	'epgNotCompatibleWithPlaylist': 'Playlist Anda tidak kompatibel dengan URL EGP ini.',
	'epgIsDownloading': 'Memuat EPG...',
	'epgChannelsProcessed': 'channel: ',
	'epgProgramsProcessed': 'program: ',
	'epgNow': 'Sekarang',
	'epgAfter': 'Setelah',
}

};


i18n.gr = i18n.el; // Fallback

function isLangAllowed( sLangId ) {

	switch( sLangId ) {
		case 'ar':
		case 'cs':
		case 'de':
		case 'el': // greek
		case 'en':
		case 'es':
		case 'fi':
		case 'fr':
		case 'gr': // fallback for greek
		case 'id':
		case 'it':
		case 'ko':
		case 'no':
		case 'pl':
		case 'pt':
		case 'ru':
		case 'ro':
		case 'tr':
		case 'uk':
		case 'vi':
			return true;
	}

	return false;

}

function setLangId( sLangId ) {
	if( sLangId && isLangAllowed(sLangId) ) {
		localStorage.setItem('sLangId', sLangId);
		applyLang();
	} else {
		console.log('Unknown language: ' + sLangId);
	}
}

function getLangId() {
	var sStoredLang = localStorage.getItem('sLangId');

	if( !sStoredLang ) {
		sStoredLang = getDeviceLang();
		setLangId(sStoredLang);
	}

	if( !isLangAllowed(sStoredLang) ) {
		sStoredLang = 'en';
	}
	return sStoredLang;
}


function getLang( sKey, sForceLangId ) {

	sForceLangId = sForceLangId || false;

	if( sForceLangId ) {
		var sLangId = sForceLangId;
	} else {
		var sLangId = getLangId();
	}

	if( !isLangAllowed(sLangId) ) {
		sLangId = 'en'; // default lang
	}

	var aLang = i18n[sLangId];
	if( aLang ) {
		if( aLang[sKey] ) {
			return aLang[sKey];
		} else if( sLangId !== 'en' ) {
			console.log('Lang fallback: ' + sLangId + ' --- ' + sKey);
			return getLang(sKey, 'en');
		}
	}

	return '';

}

function applyLang() {

	var sLangId = getLangId();
	document.getElementById('sLangId').value = sLangId;

	var aElements = document.querySelectorAll('.i18nInput');
	aElements.forEach(function(oEl) {
		var sLangKey = oEl.dataset.langid;
		if( sLangKey ) {
			var sLangValue = getLang(sLangKey);
			if( sLangValue ) {
				oEl.value = sLangValue;
			}
		}
	});

	aElements = document.querySelectorAll('.i18nPlaceholder');
	aElements.forEach(function(oEl) {
		var sLangKey = oEl.dataset.langid;
		if( sLangKey ) {
			var sLangValue = getLang(sLangKey);
			if( sLangValue ) {
				oEl.placeholder = sLangValue;
			}
		}
	});

	if( sLangId === 'ar' ) {
		document.body.classList.add('rtl');
	} else {
		document.body.classList.remove('rtl');
	}

	aElements = document.querySelectorAll('.i18n');
	aElements.forEach(function(oEl) {
		var sLangKey = oEl.dataset.langid;
		if( sLangKey ) {
			var sLangValue = getLang(sLangKey);
			if( sLangValue ) {
				oEl.innerHTML = sLangValue;
			}
		}
	});

}


function getDeviceLang() {

	try {
		if( sDeviceFamily === 'LG' && window.PalmSystem && window.PalmSystem.country ) {
			var aDeviceCountry = JSON.parse(window.PalmSystem.country);
			if( aDeviceCountry && aDeviceCountry['country'] ) {
				switch( aDeviceCountry['country'] ) {
					case 'CZE':
						return 'cs';
					case 'DEU':
					case 'AUT':
						return 'de';
					case 'ESP':
					case 'MEX':
						return 'es';
					case 'FRA':
						return 'fr';
					case 'FIN':
						return 'fi';
					case 'GRC':
					case 'GRE':
					case 'ELL':
						return 'el';
					case 'ITA':
						return 'it';
					case 'IND':
						return 'id';
					case 'PRK':
					case 'KOR':
						return 'ko';
					case 'NOR':
						return 'no';
					case 'POL':
						return 'pl';
					case 'PRT':
						return 'pt';
					case 'RUS':
						return 'ru';
					case 'ROU':
					case 'RUM':
						return 'ro';
					case 'TUR':
						return 'tr';
					case 'UKR':
						return 'uk';
					case 'VNM':
						return 'vi';
					default:
						return 'en';
				}
			}
		} else if( window.navigator.language ) {
			var sDeviceLang = window.navigator.language;
			if( sDeviceLang.length == 5 ) {
				sDeviceLang = sDeviceLang.substr(0, 2);
			}

			if( sDeviceLang && isLangAllowed(sDeviceLang) ) {
				return sDeviceLang;
			}
		}
	} catch( e ) { console.log(e.message) }

	return 'en';

}
