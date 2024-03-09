export const docs = [
  {
    items: [
      { text: 'Быстрый старт', link: '/quick-start' },
      {
        text: 'Установка',
        link: '/download',
        items: [
          { text: 'Установка на Mac', link: '/macbook' },
          { text: 'Установка рядом с MacOS', link: '/install-on-macbook-with-opencore-parallel' }
        ],
        collapsed: true
      },
      {
        text: 'Установка и обновление программ',
        items: [
          { text: 'Alacarte', link: '/alacarte' },
          { text: 'Amberol', link: '/amberol' },
          { text: 'AnyDesk', link: '/anydesk' },
          { text: 'Arduino IDE', link: '/arduino-ide' },
          { text: 'AsusCtl', link: '/asusctl' },
          { text: 'Audacity', link: '/audacity' },
          { text: 'Blender', link: '/blender' },
          { text: 'Bottles', link: '/bottle' },
          { text: 'Boxes', link: '/boxes' },
          { text: 'Brave Browser', link: '/brave' },
          { text: 'Сartridges', link: '/cartridges' },
          { text: 'Cassette (Яндекс Музыка)', link: '/cassette' },
          { text: 'Celluloid', link: '/celluloid' },
          { text: 'Chromium', link: '/chromium' },
          { text: 'Console', link: '/console' },
          { text: 'Dialect', link: '/dialect' },
          { text: 'Discord', link: '/discord' },
          { text: 'Docker', link: '/docker' },
          { text: 'Drawing', link: '/drawing' },
          { text: 'Eclipse IDE', link: '/eclipse-ide' },
          { text: 'EasyEffects', link: '/easyeffects' },
          { text: 'Глаз GNOME', link: '/eog' },
          { text: 'Evince', link: '/evince' },
          { text: 'FFMPEG', link: '/ffmpeg' },
          { text: 'Figma', link: '/figma' },
          { text: 'Firefox', link: '/firefox' },
          { text: 'Flatseal', link: '/flatseal' },
          { text: 'Fragments', link: '/fragments' },
          { text: 'Fretboard', link: '/fretboard' },
          { text: 'GDM Настройки', link: '/gdm-settings' },
          { text: 'Git', link: '/git' },
          { text: 'GitHub Desktop', link: '/github-desktop' },
          { text: 'Центр Приложений', link: '/gnome-software' },
          { text: 'Google Chrome', link: '/google-chrome' },
          { text: 'Kooha', link: '/kooha' },
          { text: 'Krita', link: '/krita' },
          { text: 'Lazarus', link: '/lazarus' },
          { text: 'Libreoffice', link: '/libreoffice' },
          { text: 'Loupe', link: '/loupe' },
          { text: 'Lunacy', link: '/lunacy' },
          { text: 'Lutris', link: '/lutris' },
          { text: 'Microsoft Edge', link: '/microsoft-edge' },
          { text: 'Mission Center', link: '/mission-center' },
          { text: 'Мой офис', link: '/my-office' },
          { text: 'Мpich', link: '/mpich' },
          { text: 'Мpv', link: '/mpv' },
          { text: 'Neofetch', link: '/neofetch' },
          { text: 'Neovim', link: '/neovim' },
          { text: 'OBS Studio', link: '/obs-studio' },
          { text: 'Obsidian', link: '/obsidian' },
          { text: 'OnlyOffice', link: '/onlyoffice' },
          { text: 'Opera', link: '/opera' },
          { text: 'Penpot Desktop', link: '/penpot-desktop' },
          { text: 'PortProton', link: '/port-proton' },
          { text: 'Postman', link: '/postman' },
          { text: 'PinApp', link: '/pin-app' },
          { text: 'qBittorrent', link: '/q-bittorrent' },
          { text: 'Р7-Офис', link: '/r7-office' },
          { text: 'Ресурсы', link: '/resources' },
          { text: 'Сканер документов', link: '/simple-scan' },
          { text: 'Skype', link: '/skype' },
          { text: 'Speedtest CLI', link: '/speedtest-cli' },
          { text: 'Spotify', link: '/spotify' },
          { text: 'Steam', link: '/steam' },
          { text: 'Центр мониторинга системы', link: '/system-monitoring-center' },
          { text: 'Telegram', link: '/telegram' },
          { text: 'Thunderbird', link: '/thunderbird' },
          { text: 'Timeshift', link: '/timeshift' },
          { text: 'Toolbox', link: '/toolbox' },
          { text: 'Totem', link: '/totem' },
          { text: 'Transmission', link: '/transmission' },
          { text: 'Tubа', link: '/tubа' },
          { text: 'Viber', link: '/viber' },
          { text: 'Vivaldi', link: '/vivaldi' },
          { text: 'VLC', link: '/vlc' },
          { text: 'VSCode', link: '/vscode' },
          { text: 'VSCodium', link: '/vscodium' },
          { text: 'VK Мессенджер', link: '/vk-messenger' },
          { text: 'WhatsApp Desktop', link: '/whatsapp-desktop' },
          { text: 'WPS Office', link: '/wps-office' },
          { text: 'Xeyes', link: '/xeyes' },
          { text: 'XLSCLIENTS', link: '/xlsclients' },
          { text: 'Xmind', link: '/xmind' },
          { text: 'Яндекс Браузер', link: '/yandex-browser' },
          { text: 'Яндекс Диск', link: '/yandex-disk' },
          { text: 'Zoom', link: '/zoom' },
          { text: 'Zsh', link: '/zsh' },
        ],
        collapsed: true
      },
      {
        text: 'Использование рабочего окружения GNOME',
        items: [
          {
            text: 'Рабочий стол',
            items: [
              { text: 'Запуск приложений', link: '/launching-applications' },
              { text: 'Закрепить приложение в панели приложений', link: '/add-apps-panel-tasks' },
              { text: 'Открытие окон по центру экрана', link: '/windows-in-the-center' },
              { text: 'Автоматический запуск приложений', link: '/startup-applications' },
              { text: 'Быстрое переключение между окнами', link: '/switching-apps' },
              { text: 'Уведомления и список уведомлений', link: '/notifications' },
              { text: 'Удаленный рабочий стол', link: '/gnome-remote-desktop' },
              { text: 'Создание пустого файла в файловом менеджере', link: '/add-empty-file-to-nautilus' },
              { text: 'Экран блокировки', link: '/lock-screen' }
            ],
            collapsed: true
          },
          {
            text: 'Сети, Интернет и электронная почта',
            items: [
              {
                text: 'Безопасность',
                items: [
                  { text: 'Нужна ли мне антивирусная программа', link: '/net-antivirus' },
                  { text: 'Нужно ли сканировать свою электронную почту на наличие вирусов', link: '/net-email-virus' }
                ],
                collapsed: true
              },
              {
                text: "Веб-браузеры",
                items: [
                  { text: 'Изменение используемого по умолчанию веб-браузера', link: '/net-browser' }
                ],
                collapsed: true
              }
            ],
            collapsed: true
          },
          {
            text: 'Настройки пользователя и системы',
            items: [
              {
                text: 'Звук',
                items: [
                  { text: 'Управление громкостью', link: '/gnome-volume-control' }
                ],
                collapsed: true
              },
              {
                text: 'Клавиатура',
                items: [
                  { text: 'Использование других раскладок клавиатуры', link: '/keyboard-layouts' },
                  { text: 'Сочетание клавиш', link: '/keyboard-shortcuts' },
                ],
                collapsed: true
              },
              {
                text: 'Тема',
                items: [
                  { text: 'Общая тема для всех приложений', link: '/uniform-look' },
                ],
                collapsed: true
              },
              {
                text: 'Монитор и экран',
                items: [
                  { text: 'Изменение разрешения или ориентация экрана', link: '/look-resolution' },
                  { text: 'Подключение дополнительного монитора', link: '/display-dual-monitors' },
                  { text: 'Масштабирование экрана', link: '/scaling-the-screen' },
                  { text: 'Изменение внешнего вида рабочего стола', link: '/look-background' },
                  { text: 'Настройка яркости экрана', link: '/display-brightness'}
                ],
                collapsed: true
              },
              { text: 'Установка шрифтов', link: '/add-fonts'}

            ],
            collapsed: true
          }
        ],
        collapsed: true
      },
      {
        text: 'Расширения рабочего окружения GNOME',
        link: '/extensions',
        items: [
          { text: 'Open Weather', link: '/openweather' },
          { text: 'AppIndicator/KStatusNotifierItem', link: '/appindicator-kstatus-notifier-item' },
          { text: 'Extension List', link: '/extension-list' },
          { text: 'U Power', link: '/u-power' },
          { text: 'Gtk4 Desktop Icons NG', link: '/gtk4-desktopicons.md' },
          { text: 'App menu is back', link: '/app-menu-is-back' },
          { text: 'Add to desktop', link: '/add-to-desktop' },
          { text: 'Fullscreen Avoider', link: '/fullscreen-avoider' },
          { text: 'Just Perfection', link: '/just-perfection' },
          { text: 'OSD Volume Number', link: '/osd-volume-number' },
          { text: 'Dash to Dock', link: '/dash-to-dock' },
          { text: 'EasyEffects Preset Selector', link: '/easyeffects-preset-selector' },
          { text: 'GSConnect', link: '/gsconnect' },
          { text: 'Legacy (GTK3) Theme Scheme Auto Switcher', link: '/legacy-theme-auto-switcher.md' },
          { text: 'Nautilus Backspace Back', link: '/nautilus-backspace-back' },
          { text: 'Custom Accent Colors', link: '/custom-accent-colors.md' },
          { text: 'Blur my Shell', link: '/blur-my-shell' },
          { text: 'Status Area Horizontal Spacing', link: '/status-area-horizontal-spacing' }
        ],
        collapsed: true
      },
      {
        text: 'Решение проблем',
        items: [
          { text: 'Проблема со сбросом уровня звука по истечению времени', link: '/drop-soundlevel-after-cron-workaround' },
          { text: 'Проблема со звуком в передней панели', link: '/fix-front-panel-audio' },
          { text: 'Проблема с отображением пользователя на экрание приветствия GDM', link: '/hidden-user-in-userlist-workaround' },
          { text: 'Обновить названия стандартных папок в соответствутвии с локалью', link: '/change-the-language-of-the-home-user-folders-automatically' }
        ],
        collapsed: true
      },
      {
        text: 'Периферия и оборудование',
        items: [
          { text: 'Драйверы NVIDIA', link: '/nvidia' },
          { text: 'Подключение USB устройств', link: '/usb-devices' },
          { text: 'Подключение принтера', link: '/drivers-for-printer' },
          { text: 'Подключение сканера', link: '/drivers-for-scanner' },
          { text: 'Подключение DualShock 4', link: '/dualshock4' }
        ],
        collapsed: true
      },
      {
        text: 'Разработка',
        items: [
          { text: 'Aurora SDK', link: '/aurora-sdk' },
          { text: 'Nodejs', link: '/nodejs' },
          { text: 'PHP', link: '/php' },
          { text: 'Podman', link: '/podman' },
          {
            text: 'Python',
            link: '/python',
            items: [
              { text: 'Использование Poetry', link: 'python-use-poetry' }
            ],
            collapsed: true
          },
          {
            text: 'Rust',
            link: '/rust',
            items: [
              { text: 'приложение на GTK4', link: 'rust-gtk4-applications' }
            ],
            collapsed: true
          }
        ],
        collapsed: true
      }
    ]
  },
  {
    text: 'Быстрые ссылки',
    items: [
      { text: 'APT', link: '/apt-get' },
      { text: 'Сизиф', link: '/sisyphus' },
      { text: 'Sudo', link: '/sudo' },
      { text: 'Ядро', link: '/kernel' },
      { text: 'EPM', link: '/epm' },
      { text: 'Flatpak', link: '/flatpak' },
      { text: 'Snaps', link: '/snap' },
      { text: "Приложения для GNOME", link: '/apps-gnome' },
      { text: "Samba", link: "/samba" }
    ]
  }
]

export const reference = [
  { text: 'Для авторов', link: '/reference/', },
  {
    text: 'Создание страниц',
    base: '/reference/pages/',
    items: [
      { text: 'Внесение изменений', link: '/alteration' },
      { text: 'Возможности VitePress', link: '/vitepress' },
      { text: 'Общие правила', link: '/general-rules' }
    ],
    collapsed: false
  },
  {
    text: 'Структура',
    base: '/reference/structure/',
    items: [
      { text: 'Страница приложения', link: '/app' },
      { text: 'Страница Wiki', link: '/wiki' }
    ],
    collapsed: false
  }
]
