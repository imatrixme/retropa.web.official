import type { SearchPageContent } from "@/content/search-pages/types"

/**
 * Search landing page content for this locale.
 * Pages absent from this file are not published in this language, and are
 * therefore not registered as language alternates.
 */
export const pages: Record<string, SearchPageContent> = {
  "gb-emulator": {
    "kind": "system",
    "slug": "gb-emulator",
    "label": "GB",
    "title": "iPhone 與 iPad 的 Game Boy 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上用 Retropa 執行你自己的 .gb 檔案。哪個核心負責 GB、如何匯入遊戲、如何設定螢幕與控制器，以及檔案無法開啟時該檢查什麼。",
    "summary": "Retropa 可從你自己的 .gb 檔案在 iPhone 與 iPad 上執行 Game Boy 遊戲，具備三種可互換的核心、掌機面板、LCD 與 CRT 處理效果，以及控制器對應。",
    "sections": [
      {
        "title": "從 .gb 檔案開始",
        "body": "Retropa 可遊玩你已經擁有的檔案中的 Game Boy 遊戲。應用程式可免費下載，且不包含遊戲或 BIOS 檔案，因此請在開始前先準備好遊戲檔案，並在應用程式之外保留一份未更動的副本作為備份。",
        "points": [
          ".gb 是 Game Boy 遊戲；.gbc 則屬於 Game Boy Color。",
          "重新命名副檔名並不會把遊戲轉換成另一個系統。",
          "在遊戲能正常執行之前，請保留原始壓縮檔。"
        ]
      },
      {
        "title": "哪個核心負責執行 Game Boy 遊戲",
        "body": "Retropa 內建多個可執行 Game Boy 遊戲的核心，你可以針對每款遊戲切換。mGBA 與 SkyEmu 都支援 GB、GBC 與 GBA，而 SameBoy 則專門對應 GB 與 GBC。如果某個核心在特定遊戲上出現問題，請先試試另一個核心，再判定檔案是否損毀。",
        "points": [
          "mGBA 是日常遊玩的好選擇。",
          "SameBoy 專注於 GB 與 GBC 的準確度。",
          "所選核心會依遊戲個別記住。"
        ]
      },
      {
        "title": "從「檔案」App 匯入遊戲",
        "body": "請確認檔案已下載到本機，而不只是在「檔案」App 中顯示為雲端佔位項目。在 Retropa 資料庫中開啟匯入項目並選擇該遊戲。遊戲出現後，請先開啟並確認畫面、聲音與預設的螢幕控制器都能正常運作，再開始進行任何自訂。"
      },
      {
        "title": "選擇適合原始螢幕的版面配置",
        "body": "Game Boy 的版面配置需要方向鍵、A 與 B，以及 Start 與 Select。直向會把螢幕放在控制器上方，適合單手遊玩；橫向則讓按鍵有更多空間。請確認兩種方向下遊戲畫面都不會被面板遮住，而且六個輸入都按得到。",
        "points": [
          "請檢查每個按鍵，而不只是外觀圖案。",
          "Delta 的 .deltaskin 套件可以匯入，但 DS 或 GBA 的面板並不是 GB 的版面配置。",
          "加值面板與進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "綠色螢幕、LCD 網格或純淨像素",
        "body": "請先從原始畫面開始，以便有個參考。DMG 預設集會重現初代掌機的四階反射式 LCD，LCD Grid 會加入次像素結構，而 CRT 處理則帶來完全不同的外觀。Retropa 的進階濾鏡會配合實際輸出區域，而不要求整數倍縮放，因此畫面在各種 iPhone 與 iPad 尺寸下都能維持比例。",
        "points": [
          "濾鏡改變的是呈現方式，而不是遊戲的解析度。",
          "濾鏡無法修正檔案的相容性問題。",
          "在保留某個預設集之前，請先與原始畫面比較。"
        ]
      },
      {
        "title": "當 Game Boy 匯入或存檔失敗時",
        "body": "請先檢查副檔名、所選系統以及確切的錯誤訊息。如果「檔案」App 尚未完成原始檔案的下載，請先完成該步驟再重新匯入。遊戲本身的存檔資料與模擬器的存檔狀態是不同的東西；請勿把其中一個重新命名成另一個，並在核心或應用程式之間搬移存檔前先做好備份。",
        "points": [
          "請記下應用程式版本、系統、核心與錯誤，以便尋求支援。",
          "請勿在支援請求中附上商業 ROM 或 BIOS 檔案。",
          "在找出問題原因時，請先試試預設面板與簡單的濾鏡。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa 有內含 Game Boy 遊戲嗎？",
        "answer": "沒有。Retropa 是模擬器，並不提供遊戲或 BIOS 檔案。你只能匯入你有權使用的檔案，而且僅限這些檔案。"
      },
      {
        "id": "bios-needed",
        "question": "Game Boy 模擬需要 BIOS 檔案嗎？",
        "answer": "在 Retropa 內建的核心中，GB 與 GBC 遊戲通常不需要 BIOS 檔案就能執行。如果某個核心回報需要 BIOS，請依照該核心顯示的提示操作，而不要匯入不相關的檔案。"
      },
      {
        "id": "gb-vs-gbc",
        "question": "Retropa 能把 .gbc 檔案當成 Game Boy 遊戲開啟嗎？",
        "answer": ".gbc 檔案屬於 Game Boy Color。Retropa 會在對應的系統上執行它，而重新命名副檔名並不會改變檔案本身的內容。"
      }
    ],
    "related": [
      "gbc-emulator",
      "nes-emulator",
      "gba-emulator",
      "delta-alternative"
    ]
  },
  "gbc-emulator": {
    "kind": "system",
    "slug": "gbc-emulator",
    "label": "GBC",
    "title": "iPhone 與 iPad 的 Game Boy Color 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上遊玩你自己的 .gbc 遊戲。色彩調色盤、GBC 專屬遊戲、核心選擇、匯入步驟，以及 Game Boy Color 遊戲無法啟動時該進行的檢查。",
    "summary": "Retropa 可從你自己的 .gbc 檔案遊玩 Game Boy Color 遊戲，具備調色盤處理、依遊戲個別選擇核心，以及適合原始反射式螢幕的顯示處理。",
    "sections": [
      {
        "title": "準備 .gbc 檔案",
        "body": "Game Boy Color 遊戲使用 .gbc 副檔名。Retropa 不包含遊戲或 BIOS 檔案，因此請自行準備檔案、保留一份獨立備份，並且只匯入你有權使用的內容。",
        "points": [
          ".gbc 是 Game Boy Color 遊戲。",
          "初代 Game Boy 遊戲使用 .gb，也能在 Retropa 上執行。",
          "請勿把 .gb 檔案重新命名為 .gbc 來強制顯示色彩。"
        ]
      },
      {
        "title": "Game Boy Color 的核心選擇",
        "body": "SameBoy 是專注於 GB 與 GBC 的核心，而 mGBA 與 SkyEmu 也支援 Game Boy Color。如果某款遊戲出現色彩或時序不正確的情況，切換核心是合理的第一步測試，因為每個核心處理硬體的方式略有不同。",
        "points": [
          "SameBoy 是 GBC 遊戲理所當然的首選。",
          "mGBA 以單一核心涵蓋 GB、GBC 與 GBA。",
          "核心選擇會依遊戲個別儲存。"
        ]
      },
      {
        "title": "匯入與首次啟動",
        "body": "請把檔案下載到本機儲存空間，以免「檔案」App 只提供佔位項目，然後從 Retropa 資料庫的匯入項目中選擇它。在套用面板或濾鏡之前，先開啟遊戲並確認色彩、聲音與預設觸控版面配置，這樣之後發生問題時才容易判斷原因。",
        "points": [
          "請測試實際用到色彩的場景，而不只是標題畫面。",
          "除了畫面之外，也請檢查聲音聲道。",
          "在診斷期間，請保持原始檔案不變。"
        ]
      },
      {
        "title": "彩色掌機的畫面與版面配置",
        "body": "Game Boy Color 的螢幕小而具反射性。LCD Grid 預設集會加入適合它的次像素結構，而 DMG 預設集則刻意重現較早期的單色面板。Retropa 的進階濾鏡以實際輸出區域為準，而不是固定的整數倍，因此比例在各種裝置尺寸下都能維持。",
        "points": [
          "請把每個預設集與原始畫面比較。",
          "進階濾鏡需要 Retropa Plus。",
          "請確認面板不會遮住遊戲畫面。"
        ]
      },
      {
        "title": "控制器與方向",
        "body": "Game Boy Color 的版面配置需要方向鍵、A 與 B，以及 Start 與 Select。直向適合短時間遊玩；橫向讓按鍵有更多空間，在大螢幕 iPhone 上也可能更好操作。請確認你實際遊玩的方向下每個輸入都按得到。"
      },
      {
        "title": "當 Game Boy Color 遊戲無法啟動時",
        "body": "請先檢查副檔名與所選系統，然後詳讀確切的錯誤訊息。如果區域或調色盤看起來不對，請先比較不同核心，再變更設定。在某個核心建立的存檔可能無法被另一個核心讀取，因此在切換前請先備份。",
        "points": [
          "請記下應用程式版本、系統、核心與錯誤。",
          "請勿將商業 ROM 或 BIOS 檔案寄給支援團隊。",
          "請回到預設面板與簡單濾鏡，以便找出問題原因。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "有內含 Game Boy Color 遊戲嗎？",
        "answer": "沒有。Retropa 是模擬器，並不提供遊戲或 BIOS 檔案。請只匯入你有權使用的檔案。"
      },
      {
        "id": "gb-on-gbc",
        "question": "我也可以玩初代 Game Boy 遊戲嗎？",
        "answer": "可以。初代 Game Boy 的 .gb 檔案也能在 Retropa 上執行，使用與 Game Boy Color 相同的核心。"
      },
      {
        "id": "force-colour",
        "question": "把 .gb 檔案重新命名為 .gbc 就會有色彩嗎？",
        "answer": "不會。副檔名並不會改變檔案的內容，因此重新命名無法啟用 Game Boy Color 的功能。"
      }
    ],
    "related": [
      "gb-emulator",
      "gba-emulator",
      "wonderswan-emulator"
    ]
  },
  "nes-emulator": {
    "kind": "system",
    "slug": "nes-emulator",
    "label": "NES",
    "title": "iPhone 與 iPad 的 NES 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上執行你自己的 NES 遊戲。支援的檔案格式包括 .nes、.fds 與 .nsf，以及核心選擇、匯入步驟、控制器對應與疑難排解。",
    "summary": "Retropa 可從你自己的檔案執行 NES 遊戲，透過兩個專用核心涵蓋 .nes、.fds 與 NSF 音訊格式，並具備手把對應與 CRT 處理效果。",
    "sections": [
      {
        "title": "Retropa 支援的 NES 檔案格式",
        "body": "Retropa 的 NES 支援涵蓋的不只是單一副檔名。除了常見的 .nes 卡匣映像檔之外，這些核心也接受 Famicom Disk System 映像檔與 NSF 聲音檔案，以及一般與統一的 iNES 容器變體。",
        "points": [
          ".nes 是標準的 NES 卡匣映像檔。",
          ".fds 涵蓋 Famicom Disk System 內容。",
          ".nsf 與 .nsfe 是聲音檔案，而不是可遊玩的遊戲。",
          "ZIP 與 RetroPack 容器可以直接匯入並在原本位置開啟。"
        ]
      },
      {
        "title": "兩個核心，一個系統",
        "body": "Retropa 內建 RusticoNES 與 TetaNES 來執行 NES 遊戲，而 JGenesis 也涵蓋這個系統。試用第二個核心是分辨難搞的 ROM 與真正模擬差異最快的方法，而選擇會依遊戲個別記住。",
        "points": [
          "RusticoNES 是卡匣遊戲可靠的預設選擇。",
          "當遊戲運作不正常時，TetaNES 是可用來測試的替代核心。",
          "NSF 音訊檔案在每個核心中的行為都與遊戲不同。"
        ]
      },
      {
        "title": "匯入 NES 遊戲",
        "body": "請先把檔案下載到本機，以免「檔案」App 只回傳佔位項目，然後在 Retropa 資料庫中開啟匯入項目。請以預設版面配置啟動遊戲，並在變更面板或濾鏡之前，先確認畫面、音訊與預設按鍵。"
      },
      {
        "title": "操作雙按鍵控制器",
        "body": "NES 控制器刻意設計得極為精簡：方向鍵、A、B、Start 與 Select。在觸控螢幕上，人們很容易想把按鍵排得更靠近，因此請確認斜向輸入仍能感應，而且遊玩時不會誤觸 Start 與 Select。配對實體控制器可以解決大部分這類問題。",
        "points": [
          "請先在 iOS 中配對控制器，然後在 Retropa 中檢查它的對應。",
          "請確認斜向，而不只是四個主要方向。",
          "如果你兩種方向都會遊玩，請兩種都檢查。"
        ]
      },
      {
        "title": "把畫面調到正確",
        "body": "NES 的輸出原本是為標準畫質電視設計，因此 CRT 處理通常比乾淨的像素格看起來更接近原始體驗。我們提供 Scanline 與孔柵預設集，而 Retropa 的進階濾鏡會配合實際輸出區域，而不是固定的整數倍。",
        "points": [
          "請從原始畫面開始，作為參考。",
          "傳統的掃描線疊加在非整數倍縮放下可能會閃爍。",
          "進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "當 NES 遊戲無法載入時",
        "body": "在變更任何設定之前，請先詳讀確切的錯誤訊息。錯誤的 dump、不支援的 mapper、沒有標頭的映像檔，或是缺少 BIOS 的磁碟系統遊戲，都是不同的問題。請檢查副檔名與所選系統，然後試試另一個 NES 核心。",
        "points": [
          "請記下應用程式版本、核心與完整錯誤文字，以便尋求支援。",
          "在診斷期間，請保持原始檔案不變。",
          "請勿在支援請求中附上商業 ROM 或 BIOS 檔案。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Retropa 能開啟哪些 NES 格式？",
        "answer": "Retropa 接受 .nes、.fds、.nsf、.nsfe、.unf 與 .unif 檔案，也能直接開啟 ZIP 與 RetroPack 容器。"
      },
      {
        "id": "nsf",
        "question": "我可以像玩遊戲一樣播放 .nsf 檔案嗎？",
        "answer": "不行。NSF 檔案是聲音資料，因此播放的是音訊而不是遊戲。請使用 .nes 或 .fds 檔案來遊玩遊戲。"
      },
      {
        "id": "gamepad",
        "question": "實體控制器能用於 NES 遊戲嗎？",
        "answer": "可以。相容的控制器可以與 iOS 配對，並在 Retropa 內進行對應。配對後請檢查對應，因為按鍵順序不一定如你所預期。"
      }
    ],
    "related": [
      "snes-emulator",
      "gb-emulator",
      "arcade"
    ]
  },
  "snes-emulator": {
    "kind": "system",
    "slug": "snes-emulator",
    "label": "SNES",
    "title": "iPhone 與 iPad 的 SNES 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上遊玩你自己的 SNES 遊戲。支援的 .sfc 與 .smc 格式、LakeSnes 核心、六個按鍵的控制器對應，以及疑難排解步驟。",
    "summary": "Retropa 在 LakeSnes 核心上從你自己的 .sfc 與 .smc 檔案執行 SNES 遊戲，具備六鍵控制器對應、存檔狀態與 CRT 顯示處理。",
    "sections": [
      {
        "title": "SNES 檔案格式",
        "body": "Super Nintendo 映像檔通常以 .sfc 或 .smc 形式流通，而 Retropa 也接受幾種相關的容器與拷貝格式。如果檔案失敗，首先要確認的就是副檔名，因為標頭不符是遊戲無法開機的常見原因。",
        "points": [
          ".sfc 與 .smc 是標準的 SNES 映像檔。",
          "Retropa 也列出對 .fig、.swc、.bs 與 .st 的支援。",
          "ZIP 與 RetroPack 容器可以直接開啟。"
        ]
      },
      {
        "title": "LakeSnes 核心",
        "body": "Retropa 在 LakeSnes 上執行 SNES 遊戲，而 JGenesis 也列出支援這個系統。如果某款遊戲出現時序或圖像問題，請先確認檔案是乾淨的映像檔，再假設是核心的問題，並把目前的應用程式版本與發行說明互相對照。",
        "points": [
          "LakeSnes 是 SNES 專用核心。",
          "有些遊戲依賴特定的卡匣協同處理器。",
          "依遊戲個別選擇的核心會被記住。"
        ]
      },
      {
        "title": "匯入與首次執行",
        "body": "請把檔案放在本機儲存空間，而不是雲端佔位項目，然後從 Retropa 資料庫的匯入項目中選擇它。在變更任何呈現設定之前，先開啟遊戲並確認畫面、音訊與預設觸控操作，這樣之後的問題才會有明確的原因。"
      },
      {
        "title": "六個按鍵需要真正的空間",
        "body": "SNES 控制器在方向鍵、A、B、Start 與 Select 之外，還增加了 X、Y、L 與 R，而且許多遊戲需要同時按下多個按鍵。在觸控螢幕上，值得花時間把版面配置攤開到橫向，並逐一檢查每種組合。對於動作類遊戲，配對實體控制器是更可靠的選擇。",
        "points": [
          "請確認 L 與 R，這兩個在對應時很容易被遺漏。",
          "請測試同時按下斜向與肩鍵。",
          "請確認面板不會遮住遊戲畫面。"
        ]
      },
      {
        "title": "選擇顯示處理方式",
        "body": "SNES 的畫面原本是為 CRT 設計，因此掃描線與孔柵預設集通常比原始像素格看起來更接近原作。Retropa 的進階濾鏡會考量實際輸出區域，而不要求整數倍，這在可用高度很少能整除的手機上尤其重要。",
        "points": [
          "請以原始畫面作為基準。",
          "簡單的掃描線疊加在非整數倍縮放下可能會閃爍。",
          "進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "當 SNES 遊戲無法啟動時",
        "body": "請檢查副檔名、所選系統與確切的錯誤文字。當一款遊戲失敗而其他遊戲正常時，依賴特殊卡匣晶片的遊戲通常是可疑對象。測試期間請保持原始檔案完整，並試著切換到另一個核心。",
        "points": [
          "請記下應用程式版本、核心與錯誤，以便尋求支援。",
          "變更濾鏡無法修正卡匣晶片的問題。",
          "請勿將商業 ROM 或 BIOS 檔案寄給支援團隊。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": ".sfc 或 .smc 有差別嗎？",
        "answer": "兩者都是標準的 SNES 映像檔，Retropa 兩者都接受。副檔名本身並不會改變遊戲。"
      },
      {
        "id": "chip-games",
        "question": "為什麼一款遊戲失敗，其他遊戲卻正常？",
        "answer": "有些遊戲依賴額外的卡匣硬體。如果檔案是乾淨的映像檔，而且其他遊戲能執行，那麼這個相依性很可能就是原因，接下來可以測試切換核心。"
      },
      {
        "id": "saves",
        "question": "存檔狀態可以在核心之間通用嗎？",
        "answer": "不保證可以。電池存檔與存檔狀態是不同的產物，某個核心寫入的狀態可能無法在另一個核心載入，因此在切換前請先備份。"
      }
    ],
    "related": [
      "nes-emulator",
      "sega-genesis-emulator",
      "arcade",
      "retropa-vs-delta"
    ]
  },
  "sega-genesis-emulator": {
    "kind": "system",
    "slug": "sega-genesis-emulator",
    "label": "Genesis",
    "title": "iPhone 的 Sega Genesis 與 Mega Drive 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上遊玩你自己的 Sega Genesis 與 Mega Drive 遊戲。.md、.smd 與 .gen 格式、JGenesis 核心、六鍵對應與疑難排解。",
    "summary": "Retropa 在 JGenesis 核心上從你自己的檔案執行 Sega Genesis 與 Mega Drive 遊戲，支援六鍵控制器、存檔狀態與 CRT 顯示處理。",
    "sections": [
      {
        "title": "Genesis 與 Mega Drive 是同一款系統",
        "body": "這款主機在歐洲、日本與亞洲大部分地區以 Mega Drive 之名推出，在北美則稱為 Genesis。硬體完全相同，因此遊戲檔案兩者皆可運作；差別只在包裝上的名稱。Retropa 同時列出兩者，這也是各地區副檔名略有不同的原因。",
        "points": [
          ".md 與 .smd 是常見的 Mega Drive 映像檔。",
          ".gen 是北美常見的副檔名。",
          "副檔名並不會改變遊戲所預期的硬體。"
        ]
      },
      {
        "title": "JGenesis 核心",
        "body": "Retropa 在 JGenesis 上執行 Genesis 與 Mega Drive 遊戲，而它也涵蓋 Master System、Game Gear 與數種掌機系統。由於一個核心要服務多個平台，每款遊戲所選的系統就很重要：在系統設為 Genesis 時匯入 Master System 遊戲，是常見的混淆來源。",
        "points": [
          "JGenesis 涵蓋 MD、GEN、SMS 與 GG。",
          "在回報問題之前，請先確認偵測到的系統。",
          "核心與系統的選擇會依遊戲個別記住。"
        ]
      },
      {
        "title": "匯入 Mega Drive 遊戲",
        "body": "請把檔案存放在本機，而不是留作雲端佔位項目，然後從 Retropa 資料庫的匯入項目中選擇它。在套用面板或濾鏡之前，先開啟遊戲並確認畫面、音訊與預設觸控版面配置。"
      },
      {
        "title": "對應六鍵手把",
        "body": "Genesis 控制器有三鍵與六鍵兩種版本，有些遊戲會依偵測到的版本而有不同行為。在觸控版面配置上，請確認 A、B、C，以及有提供時的 X、Y、Z 與 Mode 都按得到，並測試遊戲實際會用到的組合。",
        "points": [
          "請確認三鍵與六鍵兩種對應。",
          "請檢查 Start，它在許多遊戲中同時是暫停控制。",
          "配對實體控制器可以避免大部分誤按問題。"
        ]
      },
      {
        "title": "16 位元主機的顯示處理",
        "body": "Mega Drive 的輸出以 CRT 為目標，因此掃描線或孔柵預設集通常比原始像素格更接近原作，尤其是對電視會加以混合的遞色圖案而言。Retropa 的進階濾鏡以實際輸出區域為準，而不是固定的整數倍。",
        "points": [
          "請從原始畫面開始，然後進行比較。",
          "遞色圖案是測試濾鏡預設集的好素材。",
          "進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "當 Genesis 遊戲無法啟動時",
        "body": "請檢查副檔名、系統選擇與確切的錯誤。由於一個核心要服務多款主機，這裡的區域與系統不符情況比單一平台系統更常見。請保持原始檔案完整，並在進行更深入的變更之前，先確認偵測到的系統。",
        "points": [
          "請記下應用程式版本、偵測到的系統、核心與錯誤。",
          "請勿將商業 ROM 或 BIOS 檔案寄給支援團隊。",
          "在核心之間搬移存檔之前，請保留一份獨立備份。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive 和 Genesis 是同一款嗎？",
        "answer": "是的。它是一款主機的兩個地區名稱，因此遊戲檔案用哪個名稱都能執行。"
      },
      {
        "id": "six-button",
        "question": "Retropa 支援六鍵控制器嗎？",
        "answer": "觸控版面配置與外接控制器對應都涵蓋了額外的按鍵，而且有些遊戲會依偵測到的手把版本而改變行為。"
      },
      {
        "id": "system-detect",
        "question": "為什麼我的遊戲被當成錯誤的系統？",
        "answer": "一個核心要服務多個 Sega 平台，因此請檢查該遊戲偵測到的系統並加以修正，再回報相容性問題。"
      }
    ],
    "related": [
      "master-system-emulator",
      "game-gear-emulator",
      "snes-emulator"
    ]
  },
  "game-gear-emulator": {
    "kind": "system",
    "slug": "game-gear-emulator",
    "label": "Game Gear",
    "title": "iPhone 與 iPad 上的 Game Gear 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上用你自己的 .gg 檔案玩 Game Gear 遊戲。這裡說明由哪個核心執行、如何匯入檔案、怎麼設定螢幕，以及遊戲無法執行時該檢查什麼。",
    "summary": "Retropa 透過 JGenesis 核心執行你自有的 .gg Game Gear 遊戲，具備背光螢幕外觀、掌機面板與完整按鍵對應。",
    "sections": [
      {
        "title": "準備 .gg 檔案",
        "body": "Game Gear 遊戲使用 .gg 副檔名。Retropa 不內含遊戲或 BIOS 檔案，請先備妥檔案，並在匯入前於應用程式外保留一份備份。",
        "points": [
          ".gg 是 Game Gear 的副檔名。",
          ".sms 檔案屬於 Master System，不是 Game Gear。",
          "重新命名無法在兩者之間轉換格式。"
        ]
      },
      {
        "title": "哪個核心負責 Game Gear",
        "body": "JGenesis 除了 Mega Drive、Genesis 與 Master System 之外，也支援 Game Gear。由於同一個核心要服務多款 Sega 平台，在追查相容性問題之前，請先確認遊戲被辨識為 Game Gear。"
      },
      {
        "title": "匯入與首次啟動",
        "body": "先將檔案下載到本機，再從 Retropa 媒體庫的匯入項目中選取。在套用面板之前，先確認畫面、音訊與預設控制器都正常，這樣之後若出現問題，就能明顯看出原因。"
      },
      {
        "title": "小巧的背光螢幕",
        "body": "Game Gear 的面板背光且尺寸偏小，因此 LCD Grid 處理通常最合適；相較之下，較強烈的 CRT 預設看起來會明顯比原機更厚重。Retropa 進階濾鏡會依實際輸出區域自動調整，不需要整數倍縮放。",
        "points": [
          "把每個預設與原始畫面互相比對。",
          "進階濾鏡需要 Retropa Plus。",
          "確認遊戲畫面沒有被面板遮住。"
        ]
      },
      {
        "title": "控制器與方向",
        "body": "Game Gear 主機提供一組方向鍵、兩顆動作按鈕與 Start。按鈕數量少，直向版面用起來很舒適，但仍要確認不必移動握姿就能按到 Start，並且測試斜向輸入。"
      },
      {
        "title": "Game Gear 遊戲無法執行時",
        "body": "確認副檔名、辨識出的系統，以及完整的錯誤訊息。把 Master System 檔案當成 Game Gear 匯入，或反過來，是常見原因。測試期間請保持原始檔案完整。",
        "points": [
          "記錄應用程式版本、辨識出的系統、核心與錯誤訊息。",
          "請不要將商業 ROM 或 BIOS 檔案寄給客服。",
          "在核心之間搬移存檔前，先保留備份。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear 和 Master System 是同一台主機嗎？",
        "answer": "兩者關係密切，但屬於不同系統，副檔名也不同。同一個核心可執行兩者，因此請確認檔案被辨識成哪個系統。"
      },
      {
        "id": "bios",
        "question": "Game Gear 需要 BIOS 檔案嗎？",
        "answer": "Retropa 內建的核心不需要。若某個核心回報有此需求，請依該核心的提示處理，不要匯入不相關的檔案。"
      }
    ],
    "related": [
      "master-system-emulator",
      "sega-genesis-emulator",
      "gb-emulator"
    ]
  },
  "master-system-emulator": {
    "kind": "system",
    "slug": "master-system-emulator",
    "label": "Master System",
    "title": "iPhone 與 iPad 上的 Master System 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上用你自己的 .sms 檔案執行 Sega Master System 遊戲。本文說明核心支援範圍、匯入步驟、控制版面，以及遊戲無法啟動時該檢查什麼。",
    "summary": "Retropa 透過 JGenesis 核心，以你自有的 .sms 檔案執行 Sega Master System 遊戲，並提供掌機面板、畫面處理與控制器對應。",
    "sections": [
      {
        "title": "準備 .sms 檔案",
        "body": "Master System 遊戲使用 .sms 副檔名。Retropa 不提供遊戲或 BIOS 檔案，請自行準備檔案，並在應用程式之外保留備份。",
        "points": [
          ".sms 是 Master System 的副檔名。",
          ".gg 屬於 Game Gear，是另一個系統。",
          "ZIP 與 RetroPack 容器可以直接開啟。"
        ]
      },
      {
        "title": "核心支援範圍",
        "body": "JGenesis 同時處理 Master System、Mega Drive、Genesis 與 Game Gear。由於同一個核心服務多個平台，當檔案行為不如預期時，第一步就是確認辨識出的系統。"
      },
      {
        "title": "匯入與確認",
        "body": "把檔案放在本機儲存空間，然後從 Retropa 媒體庫的匯入項目中選擇它。套用面板或畫面預設之前，先檢查畫面、音訊與預設版面。"
      },
      {
        "title": "兩顆按鈕，一組方向鍵",
        "body": "Master System 控制器採用一組方向鍵與兩顆動作按鈕，部分機型則把暫停按鈕做在主機上。在觸控版面上，很值得確認暫停功能已對應到順手的位置，因為它很容易被漏掉。"
      },
      {
        "title": "畫面處理",
        "body": "Master System 遊戲是為 CRT 顯示器設計的。Scanline 與蔭罩式預設通常比原始像素格更接近原機；Retropa 進階濾鏡會依實際輸出區域自動調整，而不是固定的整數倍。",
        "points": [
          "把每個預設與原始畫面互相比對。",
          "進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "Master System 遊戲無法啟動時",
        "body": "檢查副檔名、辨識出的系統與確切的錯誤訊息。地區差異，以及 Master System 與 Game Gear 互相混淆，是最常見的原因。診斷期間請不要更動原始檔案。",
        "points": [
          "記錄應用程式版本、辨識出的系統、核心與錯誤訊息。",
          "請不要在支援要求中夾帶商業 ROM 或 BIOS 檔案。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "我要怎麼知道檔案是 Master System 還是 Game Gear？",
        "answer": "看副檔名：.sms 是 Master System，.gg 是 Game Gear。Retropa 會顯示匯入遊戲所辨識出的系統。"
      },
      {
        "id": "pause",
        "question": "暫停按鈕在哪裡？",
        "answer": "在原機上，它位於主機而非控制器。在 Retropa 中，它屬於螢幕版面的一部分，因此請確認已對應到你按得到的按鍵。"
      }
    ],
    "related": [
      "game-gear-emulator",
      "sega-genesis-emulator",
      "nes-emulator"
    ]
  },
  "wonderswan-emulator": {
    "kind": "system",
    "slug": "wonderswan-emulator",
    "label": "WonderSwan",
    "title": "iPhone 與 iPad 上的 WonderSwan 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上用你自己的 .ws 檔案玩 WonderSwan 遊戲。本文介紹 Ares 核心、垂直方向、匯入步驟，以及這款較少見掌機的疑難排解。",
    "summary": "Retropa 以 Ares 核心執行你自有的 .ws WonderSwan 遊戲，並支援這款主機當初設計所依據的垂直方向。",
    "sections": [
      {
        "title": "準備 .ws 檔案",
        "body": "WonderSwan 遊戲使用 .ws 副檔名，WonderSwan Color 則使用 .wsc。Retropa 不內含遊戲或 BIOS 檔案；請自行準備檔案並保留備份。",
        "points": [
          ".ws 是 WonderSwan；.wsc 是 WonderSwan Color。",
          "兩者是不同系統，能力也不相同。",
          "重新命名並不會讓遊戲升級成彩色機版本。"
        ]
      },
      {
        "title": "Ares 核心",
        "body": "在 Retropa 中，Ares 負責 WonderSwan 與 WonderSwan Color，同時也支援其他掌機系統。如果遊戲無法開機，請先確認檔案是乾淨的映像檔，而且辨識出的系統與副檔名相符，然後再調整設定。"
      },
      {
        "title": "匯入與首次執行",
        "body": "把檔案存放在本機，然後從 Retropa 媒體庫的匯入項目中選取。套用面板或畫面預設之前，先確認畫面、音訊與預設控制器。"
      },
      {
        "title": "原本就設計成可直握的掌機",
        "body": "WonderSwan 的設計可支援兩種方向，而許多遊戲是為垂直遊玩而打造。Retropa 支援直向版面，因此在判斷畫面看起來不對之前，請先確認你正在玩的遊戲是否需要旋轉螢幕。",
        "points": [
          "直向與橫向都試試看。",
          "並非每款遊戲都使用相同方向。",
          "確認在你選擇的方向下，所有輸入都按得到。"
        ]
      },
      {
        "title": "畫面處理",
        "body": "WonderSwan 採用反射式單色面板，像素結構相當獨特。LCD Grid 預設通常最貼近它，而 CRT 預設看起來會比原機更厚重。進階濾鏡會依實際輸出區域自動調整。",
        "points": [
          "以原始畫面作為參考。",
          "進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "WonderSwan 遊戲無法啟動時",
        "body": "檢查副檔名、辨識出的系統與確切的錯誤訊息。把 .wsc 檔案當成 WonderSwan 安裝，或反過來，是常見的混淆。測試期間請保持原始檔案完整。",
        "points": [
          "記錄應用程式版本、辨識出的系統、核心與錯誤訊息。",
          "請不要將商業 ROM 或 BIOS 檔案寄給客服。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "彩色機版本會改變檔案嗎？",
        "answer": "會。WonderSwan 與 WonderSwan Color 使用不同副檔名，而且彩色遊戲在單色主機上可能無法正常運作。"
      },
      {
        "id": "orientation",
        "question": "為什麼畫面看起來轉了方向？",
        "answer": "許多 WonderSwan 遊戲是為垂直遊玩設計的。在認定畫面有問題之前，先試試直向版面。"
      }
    ],
    "related": [
      "gb-emulator",
      "gbc-emulator",
      "neogeo-pocket-emulator"
    ]
  },
  "neogeo-pocket-emulator": {
    "kind": "system",
    "slug": "neogeo-pocket-emulator",
    "label": "Neo Geo Pocket",
    "title": "iPhone 與 iPad 上的 Neo Geo Pocket 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上用你自己的 .ngp 與 .ngpc 檔案執行 Neo Geo Pocket 遊戲。本文說明核心支援範圍、搖桿式控制器，以及它與 Neo Geo 大型電玩有何不同。",
    "summary": "Retropa 以 Ares 核心執行你自有的 Neo Geo Pocket 與 Neo Geo Pocket Color 遊戲，並且與 Neo Geo 大型電玩模擬完全分開。",
    "sections": [
      {
        "title": "Neo Geo Pocket 不是 Neo Geo 大型電玩",
        "body": "Neo Geo Pocket 與 Neo Geo Pocket Color 是掌上型主機。它們與 Neo Geo MVS、AES 大型電玩硬體共用品牌，卻是完全不同的系統，檔案不同、核心也不同。Retropa 的大型電玩支援需要 Plus，Pocket 模擬則不需要。",
        "points": [
          ".ngp 是 Neo Geo Pocket；.ngpc 與 .ngc 是彩色機版本。",
          "大型電玩的 neogeo.zip 不是 Pocket 遊戲。",
          "大型電玩與 Pocket 的媒體庫是分開的。"
        ]
      },
      {
        "title": "準備正確的檔案",
        "body": "匯入前先檢查副檔名。Pocket 遊戲是單一的掌機映像檔，而大型電玩 Neo Geo 遊戲組通常由多個晶片檔案加上選用的 BIOS 組成。把兩者混為一談，是這個系統最常見的錯誤。"
      },
      {
        "title": "Ares 核心",
        "body": "在 Retropa 中，Ares 負責 Neo Geo Pocket 與 Neo Geo Pocket Color，同時也支援其他掌機平台。如果遊戲無法開機，請確認副檔名與辨識出的系統，再考慮檔案是否為乾淨的映像檔。"
      },
      {
        "title": "是微動搖桿，不是十字鍵",
        "body": "Neo Geo Pocket 採用有段落感的微動開關搖桿，而不是傳統十字方向鍵。實際上，這代表精準的斜向輸入比平常更重要，因此在測試觸控版面時，請確認斜向輸入能正確觸發，而不是只檢查四個基本方向。",
        "points": [
          "明確測試斜向輸入。",
          "確認兩顆動作按鈕在長時間遊玩下依然順手。",
          "玩格鬥遊戲時，值得搭配一組外接實體控制器。"
        ]
      },
      {
        "title": "畫面處理",
        "body": "Pocket 的彩色面板又小、解析度又低，因此輕度的 LCD 處理通常比厚重的 CRT 預設更合適。Retropa 進階濾鏡依實際輸出區域運作，不需要整數倍縮放。",
        "points": [
          "與原始畫面互相比對。",
          "進階濾鏡需要 Retropa Plus。"
        ]
      },
      {
        "title": "Pocket 遊戲無法啟動時",
        "body": "確認副檔名、辨識出的系統與確切的錯誤訊息。如果媒體庫裡有大型電玩檔案，請檢查自己是不是選到了那些檔案。診斷期間請保持原始檔案完整。",
        "points": [
          "記錄應用程式版本、辨識出的系統、核心與錯誤訊息。",
          "請不要將商業 ROM 或 BIOS 檔案寄給客服。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "我可以在這裡玩 Neo Geo 大型電玩遊戲嗎？",
        "answer": "那是另一個系統，有自己的核心與檔案。Retropa 支援大型電玩系列，而這些需要 Retropa Plus；Neo Geo Pocket 模擬則是分開的。"
      },
      {
        "id": "neogeo-zip",
        "question": "Pocket 遊戲需要 neogeo.zip 嗎？",
        "answer": "不需要。那個檔案與 Neo Geo 大型電玩硬體有關，Pocket 遊戲並不會用到。"
      }
    ],
    "related": [
      "neogeo-emulator",
      "wonderswan-emulator",
      "gbc-emulator"
    ]
  },
  "neogeo-emulator": {
    "kind": "system",
    "slug": "neogeo-emulator",
    "label": "Neo Geo",
    "title": "iPhone 與 iPad 上的 Neo Geo 模擬器 | Retropa",
    "description": "在 iPhone 與 iPad 上用 Retropa 遊玩支援的 Neo Geo MVS 大型電玩檔案。本文說明遊戲組結構、BIOS 需求、主組與複製組，以及遊戲無法開機時該檢查什麼。",
    "summary": "Retropa 在 iPhone 與 iPad 上執行支援的 Neo Geo 大型電玩遊戲組，支援觸控與外接控制器以及 CRT 濾鏡。大型電玩遊玩需要 Retropa Plus；不內含遊戲與 BIOS 檔案。",
    "sections": [
      {
        "title": "Neo Geo 大型電玩需要 Plus",
        "body": "Neo Geo 大型電玩模擬屬於 Retropa 的大型電玩系列，而大型電玩核心需要 Retropa Plus。這與 Neo Geo Pocket 不同，後者是掌機系統，由標準的 Pocket 支援涵蓋。",
        "points": [
          "大型電玩系列需要 Retropa Plus。",
          "Neo Geo Pocket 是另一個掌機系統。",
          "無論如何都不內含遊戲與 BIOS 檔案。"
        ]
      },
      {
        "title": "大型電玩遊戲組不是單一檔案",
        "body": "家用主機模擬通常是一款遊戲一個檔案。大型電玩硬體的運作方式不同：一款遊戲是一組晶片檔案，通常打包在 ZIP 裡，而且許多遊戲還依賴主組或 BIOS。這就是為什麼大型電玩的 ZIP 與掌機 ROM 的行為不一樣。",
        "points": [
          "除非匯入流程要求解壓縮，否則請保持 ZIP 完整。",
          "可能需要另外準備 BIOS 壓縮檔。",
          "複製組可能不包含核心需要的每一個檔案。"
        ]
      },
      {
        "title": "匯入與首次啟動",
        "body": "從 Retropa 媒體庫的匯入項目中選擇遊戲組，然後以預設版面啟動。如果核心回報缺少檔案或 BIOS，請仔細閱讀那段訊息：缺少主組與缺少 BIOS 需要不同的處理方式。",
        "points": [
          "變更任何設定之前，先讀清楚確切的錯誤訊息。",
          "診斷期間請保留原始壓縮檔。",
          "確認投幣與開始輸入都按得到。"
        ]
      },
      {
        "title": "Neo Geo Pocket 檔案在這裡不能用",
        "body": "如果你有 .ngp 或 .ngpc 檔案，那些屬於 Pocket 系統，而不是大型電玩系列。Pocket ROM 或改過名的 ZIP 都無法取代大型電玩遊戲組，反之亦然。",
        "points": [
          ".ngp 與 .ngpc 是掌機 Pocket 檔案。",
          "大型電玩遊戲組由多個檔案組成，可能需要 BIOS。",
          "回報問題之前，先確認辨識出的系統。"
        ]
      },
      {
        "title": "大型電玩控制器與畫面",
        "body": "大型電玩硬體預期有一支搖桿與多顆動作按鈕，而許多遊戲依賴同時按壓。Retropa 支援螢幕控制器與相容的外接控制器，並內含適合大型電玩輸出的 CRT 處理。進階濾鏡需要 Plus。",
        "points": [
          "先在 iOS 中配對控制器，再進行對應。",
          "同時測試斜向與按鈕的組合。",
          "CRT 預設通常比原始像素格更適合大型電玩輸出。"
        ]
      },
      {
        "title": "Neo Geo 遊戲無法啟動時",
        "body": "檢查所選的機板、遊戲組內容，以及核心回報的任何 BIOS 需求。缺少主組的獨立複製組，或缺漏必要檔案的遊戲組，無論套用什麼濾鏡或面板都無法開機。",
        "points": [
          "記錄應用程式版本、機板選擇、核心與確切錯誤訊息。",
          "更換濾鏡或面板無法補回缺少的 ROM 資料。",
          "請不要在支援要求中夾帶商業 ROM 或 BIOS 檔案。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "為什麼大型電玩核心需要 Plus？",
        "answer": "大型電玩系列屬於付費功能組，與進階面板和進階濾鏡相同。掌機與卡匣系統則不需要。"
      },
      {
        "id": "bios",
        "question": "我需要 Neo Geo 的 BIOS 嗎？",
        "answer": "許多大型電玩遊戲組都需要，缺少時核心會提示你。請使用你有權使用的 BIOS；Retropa 不提供下載。"
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket 是同樣的東西嗎？",
        "answer": "不是。Pocket 是掌上型主機，有自己的檔案。大型電玩遊戲組與 Pocket 遊戲無法互通。"
      }
    ],
    "related": [
      "neogeo-pocket-emulator",
      "arcade",
      "snes-emulator"
    ]
  },
  "mgba-core": {
    "kind": "core",
    "slug": "mgba-core",
    "label": "mGBA",
    "title": "iPhone 與 iPad 上的 mGBA 核心 | Retropa",
    "description": "在 Retropa 中使用 mGBA 執行 Game Boy、Game Boy Color 與 Game Boy Advance。了解型錄格式、首次啟動檢查、存檔注意事項，以及 Plus 的核心切換。",
    "summary": "mGBA 在 Retropa 中涵蓋 Game Boy 掌機系列。請先使用預設版面與原始畫面，在變更顯示設定之前，先檢查實際的遊玩場景。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "mGBA 上游專案：https://github.com/mgba-emu/mgba。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "Game Boy：.gb",
          "Game Boy Color：.gbc",
          "Game Boy Advance：.gba"
        ]
      },
      {
        "title": "在各世代掌機上的首次啟動",
        "body": "請先在「檔案」App 將檔案下載到本機，再從 Retropa 的遊戲庫匯入，並確認偵測到的系統。Game Boy Color 的遊戲需要對應的彩色硬體路徑；修改檔名無法新增或移除彩色功能。使用 Game Boy Advance 時，除了正面按鍵之外，也要測試 L 鍵與 R 鍵，因為為較舊掌機設計的版面可能會漏掉這兩個按鍵。",
        "points": [
          "通過標題畫面後，檢查音效與輸入。",
          "在匯入自訂版面之前，先測試預設面板。",
          "請在 App 之外保留原始檔案。"
        ]
      },
      {
        "title": "將模擬與顯示效果分開",
        "body": "如果某個場景看起來不對，請先關閉濾鏡再進行比較。綠色螢幕效果會刻意改變色彩，LCD 格線則會刻意改變像素外觀。這些效果無法判定 mGBA 是否正確繪製遊戲畫面。若是音效或時序問題，請記錄可重現的場景與 App 版本，不要只憑開頭的標誌畫面判斷。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "掌機支援範圍的限制",
        "body": "mGBA 並不是 Retropa 中對應 Nintendo DS 的路徑。DS 檔案需要型錄中的 DS 核心，而不是改名後的 Game Boy Advance 映像檔。同樣地，來自其他模擬器的存檔狀態並不是遊戲檔案，不應當成遊戲檔案匯入。若所選系統出現 BIOS 提示，請依提示操作；Retropa 不提供韌體。"
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "我可以只為某一款遊戲更換核心嗎？",
        "answer": "可以，但需要 Retropa Plus。選擇結果會依遊戲個別儲存，不過變更之前請先備份存檔，也請勿期待存檔狀態能跨核心使用。"
      },
      {
        "id": "display",
        "question": "換用其他濾鏡能解決相容性問題嗎？",
        "answer": "不能。請先用原始畫面測試。濾鏡改變的是呈現方式，不會改變模擬的硬體或遊戲檔案的內容。"
      }
    ],
    "related": [
      "skyemu-core",
      "sameboy-core",
      "gb-emulator",
      "plus"
    ]
  },
  "skyemu-core": {
    "kind": "core",
    "slug": "skyemu-core",
    "label": "SkyEmu",
    "title": "iPhone 與 iPad 上的 SkyEmu 核心 | Retropa",
    "description": "SkyEmu 在 Retropa 中涵蓋 Game Boy 系列與 Nintendo DS 的 Beta 版路徑。了解格式、雙螢幕觸控操作、限制，以及 Plus 的核心切換。",
    "summary": "SkyEmu 在 Retropa 中除了 Game Boy 掌機之外，也負責 Nintendo DS 的 Beta 版路徑。DS 支援仍屬 Beta 階段，並不保證每一款遊戲或每一項觸控操作都能正確運作。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "SkyEmu 上游專案：https://github.com/skylersaleh/SkyEmu。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "Game Boy：.gb",
          "Game Boy Color：.gbc",
          "Game Boy Advance：.gba",
          "Nintendo DS：.nds"
        ]
      },
      {
        "title": "Nintendo DS 屬於 Beta 版路徑",
        "body": "請把 DS 的相容性視為依遊戲而異。匯入已下載到本機的檔案，確認偵測到 Nintendo DS，並測試開頭畫面之後的內容。在依賴長時間遊玩之前，請先檢查有觸控輸入的場景與有音效的場景。若某款遊戲發生凍結，請記錄 App 版本與確切的失敗情形；更換面板無法修復核心的相容性問題。",
        "points": [
          "型錄中 Nintendo DS 只列出 SkyEmu。",
          "Plus 的核心切換並不會產生另一個 DS 核心。",
          "評估 Beta 行為期間，請保留獨立的存檔備份。"
        ]
      },
      {
        "title": "雙螢幕與觸控輸入",
        "body": "請選擇能讓兩個畫面都保持可見的版面。直向模式可以將兩者上下堆疊；橫向模式則取決於面板。請以實際遊玩的尺寸測試較小的觸控目標，並確認觸控輸入會送到哪個畫面。實體控制器可以處理對應的按鍵，但無法取代每一項觸控操作。",
        "points": [
          "請測試兩個畫面，而不是只測試主要的遊戲畫面。",
          "使用外接控制器時，仍要讓觸控操作保持可觸及。",
          "單螢幕掌機面板並不是 DS 版面。"
        ]
      },
      {
        "title": "以 SkyEmu 執行較舊的掌機",
        "body": "Game Boy 系列使用單螢幕版面。請先確認偵測到的系統並使用合適的面板，再來調查色彩或按鍵缺失的問題。ZIP 與 RetroPack 是匯入用的容器，並不是額外的模擬系統；容器內的檔案仍需符合型錄。將 Game Boy Advance 檔案重新命名，並不會讓它變成 DS 遊戲。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "哪個核心可以執行 Nintendo DS 遊戲？",
        "answer": "SkyEmu 是 Retropa 型錄中的 Nintendo DS Beta 版路徑。相容性依遊戲而異，而且型錄中沒有列出其他 DS 核心。"
      },
      {
        "id": "touch",
        "question": "使用控制器時，DS 遊戲還需要觸控輸入嗎？",
        "answer": "需要。對於會用到觸控螢幕的遊戲，請讓觸控區保持可觸及；控制器無法取代所有觸控操作。"
      }
    ],
    "related": [
      "mgba-core",
      "ds-emulator",
      "game-wont-load",
      "plus"
    ]
  },
  "sameboy-core": {
    "kind": "core",
    "slug": "sameboy-core",
    "label": "SameBoy",
    "title": "iPhone 與 iPad 上的 SameBoy 核心 | Retropa",
    "description": "SameBoy 在 Retropa 中專注於 Game Boy 與 Game Boy Color。了解色彩行為、檔案範圍、存檔狀態的限制，以及更換核心所需的 Retropa Plus。",
    "summary": "SameBoy 專注於最初的單色與彩色 Game Boy 硬體。它較窄的支援範圍讓它成為有用的比較基準，但並不代表其他核心的準確度較低。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "SameBoy 上游專案：https://github.com/LIJI32/SameBoy。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "Game Boy：.gb",
          "Game Boy Color：.gbc"
        ]
      },
      {
        "title": "在沒有濾鏡的情況下檢查色彩",
        "body": "匯入存放在本機的檔案，並確認 Retropa 將它辨識為 Game Boy 還是 Game Boy Color。請從原始畫面開始：DMG 效果可能會刻意讓彩色遊戲看起來像單色。請使用色彩變化已知的場景，並比較同一個場景，而不是遊戲中兩個不同的時間點。"
      },
      {
        "title": "測試時序與輸入",
        "body": "請使用預設面板檢查十字方向鍵、A、B、Start 與 Select。若時序或音效似乎有問題，請記錄發生的確切時機，以及關閉顯示效果後是否仍然存在。有了 Retropa Plus，與另一個相容核心比較有助於找出實作上的差異，但單憑肉眼可見的差異並不能證明哪個核心更符合硬體。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "這不是 Game Boy Advance 核心",
        "body": "SameBoy 在 Retropa 中不涵蓋 Game Boy Advance。GBA 映像檔請使用型錄中支援 GBA 的核心；修改副檔名並不會讓它變成 Game Boy 遊戲。同樣地，改用 SameBoy 也不會讓其他核心產生的存檔狀態變得可以通用。請保留舊的存檔狀態，並另外測試遊戲內存檔的備份。"
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy 可以執行 Game Boy Advance 遊戲嗎？",
        "answer": "不行。Retropa 型錄中的 SameBoy 項目涵蓋 Game Boy 與 Game Boy Color，不包含 Game Boy Advance。"
      },
      {
        "id": "why",
        "question": "什麼時候應該把 SameBoy 與其他核心比較？",
        "answer": "在確認檔案並關閉濾鏡之後，若問題仍可重現，就可以透過 Retropa Plus 比較時序、色彩或音效的差異。請先備份存檔。"
      }
    ],
    "related": [
      "mgba-core",
      "gb-emulator",
      "gbc-emulator",
      "plus"
    ]
  },
  "rusticones-core": {
    "kind": "core",
    "slug": "rusticones-core",
    "label": "RusticoNES",
    "title": "iPhone 與 iPad 上供 NES 使用的 RusticoNES 核心 | Retropa",
    "description": "Retropa 中的 RusticoNES：NES 與 Famicom 的卡匣與磁碟格式、mapper 檢查、首次啟動、存檔注意事項，以及 Plus 的核心切換。",
    "summary": "RusticoNES 是 Retropa 預設的 NES 執行路徑。請用它來處理型錄中的 NES / Famicom 格式，並在把啟動失敗當成顯示問題之前，先檢查卡匣的中繼資料與磁碟需求。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "RusticoNES 上游專案：https://github.com/zeta0134/rustico。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "NES / Famicom：.nes、.fds、.unf、.unif"
        ]
      },
      {
        "title": "卡匣、UNIF 與磁碟映像檔",
        "body": "NES / Famicom 卡匣映像檔與 Famicom Disk System 映像檔是不同的輸入類型。UNIF 是一種卡匣容器格式，並不是 iNES 標頭的另一種名稱。匯入時請保留原始標頭與副檔名；為了讓檔案看起來像其他格式而重新命名或刪除位元組，可能會丟失用來辨識卡匣電路板的資訊。",
        "points": [
          "請另外保留一份原始映像檔的副本。",
          "請詳讀任何磁碟系統的 BIOS 提示；Retropa 不提供 BIOS。",
          "RusticoNES 並未列出 NSF 音訊格式；請改為查看 TetaNES。"
        ]
      },
      {
        "title": "首次啟動與控制器檢查",
        "body": "請先在「檔案」App 將映像檔下載到本機，透過 Retropa 的遊戲庫匯入，並確認偵測到 NES。請從預設面板與關閉顯示效果開始。測試十字方向鍵、A、B、Start 與 Select，包括斜向與同時按壓。自訂版面中缺少某項輸入，並不代表 mapper 有問題。"
      },
      {
        "title": "當某款卡匣失敗但其他卡匣正常時",
        "body": "NES 卡匣可能採用不同的 mapper 硬體。能夠辨識副檔名，並不代表某一款遊戲所用的電路板已經被實作。請記錄確切的錯誤，若你從自己的 dump 中繼資料得知，也請記錄 mapper 與地區。請勿隨意修改標頭，也不要假設 BIOS 能修好卡匣電路板的問題。若是磁碟遊戲，請區分是缺少 BIOS 還是缺少磁碟資料。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "只比較彼此重疊的格式",
        "body": "NES 系統頁面列出的是各核心格式的聯集，並不保證每個核心都接受全部格式。在使用 Plus 比較 RusticoNES 與 TetaNES 或 JGenesis 之前，請先查看兩邊的型錄項目是否支援原始檔案的格式。請保持相同的場景與預設顯示設定，以免更換面板或濾鏡掩蓋了結果。"
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "RusticoNES 是型錄中負責 NSF 音訊的核心嗎？",
        "answer": "不是。Retropa 的型錄將 NSF 與 NSFE 列在 TetaNES 之下，而不是 RusticoNES。音訊檔案並不是可遊玩的卡匣遊戲。"
      },
      {
        "id": "mapper",
        "question": "支援的副檔名能保證遊戲可以啟動嗎？",
        "answer": "不能。卡匣的 mapper、檔案完整性，以及磁碟系統的各項需求仍然有影響。變更檔案之前，請先記錄確切的錯誤。"
      }
    ],
    "related": [
      "nes-emulator",
      "tetanes-core",
      "jgenesis-core",
      "plus"
    ]
  },
  "tetanes-core": {
    "kind": "core",
    "slug": "tetanes-core",
    "label": "TetaNES",
    "title": "iPhone 與 iPad 上供 NES 使用的 TetaNES 核心 | Retropa",
    "description": "Retropa 中的 TetaNES：NES / Famicom 遊戲、磁碟映像檔與 NSF 音訊、各格式的檢查、控制器設定，以及切換核心所需的 Retropa Plus。",
    "summary": "TetaNES 是 Retropa 中另一款 NES 核心，型錄涵蓋卡匣、磁碟與音樂檔案。在期待出現可遊玩的遊戲畫面之前，請先確認你匯入的是哪一種檔案。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "TetaNES 上游專案：https://github.com/lukexor/tetanes。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "NES / Famicom：.nes、.fds、.nsf、.nsfe"
        ]
      },
      {
        "title": "音樂檔案並不是卡匣遊戲",
        "body": "NSF 與 NSFE 存放的是 NES 音樂資料。如果你匯入的是這類檔案，沒有出現正常的遊戲關卡本身並不代表失敗。請檢查音訊輸出，以及 App 實際提供的操作方式；不要假設上游的桌上型音樂播放器介面也存在於 Retropa 中。若要遊玩，請使用你有權使用的卡匣或磁碟映像檔。",
        "points": [
          "測試音樂時，請檢查裝置音量與音訊輸出。",
          "重新命名音訊檔案，並不能讓它變成卡匣映像檔。",
          "UNIF 副檔名屬於 RusticoNES 的型錄項目，而不是 TetaNES 的。"
        ]
      },
      {
        "title": "匯入卡匣或磁碟映像檔",
        "body": "在使用遊戲庫的匯入功能之前，請先將檔案下載到裝置上。確認偵測到 NES，並保持原始映像檔不變。Famicom 是日本的系統名稱；Famicom Disk System 另有磁碟方面的需求。若所選核心回報 BIOS 或磁碟資料的問題，請解決該項確切需求，而不是用另一個無關的卡匣映像檔取代。"
      },
      {
        "title": "測試輸入與可重現的場景",
        "body": "請使用具備十字方向鍵、兩個動作按鍵、Start 與 Select 的 NES / Famicom 版面。先用預設面板確認斜向輸入，再測試能重現問題的場景。套用 CRT 效果之前，請先比較原始畫面：掃描線會改變感受到的細節，但不會改變核心模擬的內容。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "替代方案並不是萬用修復",
        "body": "TetaNES 與 RusticoNES 的格式清單與實作方式不同。只有在檔案對兩者都有效時，切換核心才有助於找出時序或 mapper 問題；它無法保證支援某一款特定的卡匣電路板。前一個核心的存檔狀態應該繼續保存在該核心之下，而不是當成可以互換的檔案。"
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "為什麼我的 NSF 檔案沒有出現可遊玩的遊戲？",
        "answer": "NSF 是音樂資料。請測試音訊，而不是期待出現正常的遊戲關卡；若要遊玩，請使用卡匣或磁碟映像檔。"
      },
      {
        "id": "switch",
        "question": "我可以免費把 NES 遊戲切換到 TetaNES 嗎？",
        "answer": "更換模擬核心需要 Retropa Plus。請先確認目標核心支援的格式，並備份進度。"
      }
    ],
    "related": [
      "nes-emulator",
      "rusticones-core",
      "game-wont-load",
      "plus"
    ]
  },
  "lakesnes-core": {
    "kind": "core",
    "slug": "lakesnes-core",
    "label": "LakeSnes",
    "title": "iPhone 與 iPad 上的 SNES 核心 LakeSnes | Retropa",
    "description": "在 Retropa 中使用 LakeSnes：本頁說明 SNES 與 Super Famicom 的支援格式、卡匣晶片的限制、六鍵控制器的操作、存檔備份的注意事項，以及 Plus 的核心切換。",
    "summary": "LakeSnes 是 Retropa 專注於 SNES 的核心。它的型錄包含多種映像檔與拷貝機格式，但檔案是否被辨識，與遊戲卡匣硬體是否受到支援，是兩個不同的問題。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "LakeSnes 上游專案：https://github.com/dinkc64/LakeSnes。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "SNES / Super Famicom：.sfc、.smc、.fig、.swc、.bs、.st"
        ]
      },
      {
        "title": "保留映像檔與其標頭完整",
        "body": "SNES 在日本稱為 Super Famicom。常見的卡匣映像檔使用 SFC 或 SMC 副檔名；型錄也列出其他拷貝機與相關格式。單看副檔名無法證明檔案是否帶有拷貝機標頭，或是否需要特殊的卡匣硬體。請匯入原本儲存在本機的映像檔並保留備份，不要把移除標頭當成第一個排解步驟。"
      },
      {
        "title": "檢查完整的控制器",
        "body": "從遊戲庫匯入之後，請確認偵測到的系統，並先從預設版面開始。SNES 在掌機的兩鍵配置之外，還增加了 X、Y、L 與 R。請測試肩鍵、斜向輸入，以及遊戲會用到的同時按鍵；一個好看卻漏掉 L 或 R 的面板，可能讓原本正常的遊戲看起來像卡住了。",
        "points": [
          "請測試 Start 與 Select，以及六個遊戲按鍵。",
          "在評斷觸控版面的限制之前，請先配對並設定外接控制器。",
          "請用原始畫面來區分是輸入問題還是顯示問題。"
        ]
      },
      {
        "title": "卡匣晶片與特殊格式的範圍限制",
        "body": "部分 SNES 遊戲需要額外的卡匣處理器或其他硬體。型錄的副檔名清單並不是逐一晶片的相容性清單，而且能被辨識的 BS 或 ST 檔案，也不代表所有周邊流程都能在 Retropa 中使用。如果只有一款遊戲失敗，請在已知的情況下記錄它的硬體需求與確切錯誤訊息。請不要宣稱濾鏡或更改副檔名就能補上缺少的硬體支援。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "比較 LakeSnes 與 JGenesis",
        "body": "JGenesis 也列出 SNES，但它的 SNES 副檔名涵蓋範圍比 LakeSnes 窄。使用 Plus 時，請只比較兩個項目都有列出的檔案格式。請在相同操作、且關閉濾鏡的情況下回到同一個場景，並將各核心的存檔狀態分開保存。某個卡匣比較成功，並不代表每一款特殊晶片遊戲都能相容。"
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "LakeSnes 的每一種格式都能在 JGenesis 上執行嗎？",
        "answer": "請不要這樣假設。請查閱各核心的型錄項目；系統層級的格式是合併多個核心的支援範圍。"
      },
      {
        "id": "chips",
        "question": "格式清單能保證特殊晶片的相容性嗎？",
        "answer": "不能。檔案辨識與卡匣硬體的模擬是兩回事。在更換映像檔之前，請先確認確切的錯誤訊息與目前選用的核心。"
      }
    ],
    "related": [
      "snes-emulator",
      "jgenesis-core",
      "save-states-and-rewind",
      "plus"
    ]
  },
  "jgenesis-core": {
    "kind": "core",
    "slug": "jgenesis-core",
    "label": "JGenesis",
    "title": "iPhone 與 iPad 上的 JGenesis 核心 | Retropa",
    "description": "在 Retropa 中使用 JGenesis：本頁說明型錄收錄的 Sega 與 Nintendo 系統、Genesis 與 Mega Drive 的名稱差異、格式的支援範圍、系統偵測，以及 Plus 的核心切換。",
    "summary": "JGenesis 在 Retropa 中以同一個核心系列服務多種系統。實際的硬體、控制器與存檔情境仍取決於偵測到的系統；共用核心並不代表檔案可以互換。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "JGenesis 上游專案：https://github.com/jsgroth/jgenesis。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "Game Boy：.gb",
          "Game Boy Color：.gbc",
          "Game Boy Advance：.gba",
          "NES / Famicom：.nes",
          "SNES / Super Famicom：.sfc、.smc",
          "Sega Master System：.sms",
          "Game Gear：.gg",
          "Mega Drive：.md、.smd",
          "Genesis：.gen"
        ]
      },
      {
        "title": "Genesis 與 Mega Drive 的名稱",
        "body": "Genesis 是這款主機在北美使用的名稱，而它在日本與歐洲則稱為 Mega Drive。Retropa 的型錄在兩個名稱下都有項目。副檔名只是映像格式的線索，並不是可靠的分區識別；單看檔名無法得知遊戲的時序或分區需求。請保留原始檔案並確認偵測到的系統，不要為了選擇市場而更改檔名。"
      },
      {
        "title": "為正確的硬體匯入",
        "body": "請先在「檔案」App 將映像檔下載到本機，再透過遊戲庫匯入。開始之前，請區分 Master System 與 Game Gear，以及 NES / Famicom 與 SNES / Super Famicom。多系統核心仍然需要正確的硬體路徑。如果偵測到的系統不符預期，請先確認檔案的實際身分，再變更顯示或控制器設定。",
        "points": [
          "Master System 與 Game Gear 是相關但並不完全相同的系統。",
          "系統層級的格式清單可能包含來自其他核心的格式。",
          "本頁的範圍是 Retropa 的型錄，而不是 JGenesis 上游的每一項功能。"
        ]
      },
      {
        "title": "控制器會隨所選系統而不同",
        "body": "使用 Genesis 時，請測試 A、B、C，以及版面提供的其他六鍵輸入。使用 Game Gear 時，請確認 Start；使用 Master System 時，請檢查暫停輸入。SNES 版面需要 NES 版面所沒有的肩鍵。在認定核心漏掉某個輸入之前，請先在實際的遊戲場景中驗證控制器組合。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "Sega 的支援範圍不代表有替代核心",
        "body": "Retropa 的型錄把 JGenesis 列為其 Sega 卡匣系統的唯一核心。Plus 會在存在替代方案時解鎖切換；它並不會新增未列出的實作。上游的多系統支援，也不代表 CD、擴充硬體或每一項桌上型平台選項都能在 Retropa 中使用。請以型錄與 App 實際顯示的提示，來確認可用的途徑。"
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": ".gen 副檔名能證明遊戲是北美版嗎？",
        "answer": "不能。Genesis 與 Mega Drive 是不同地區的名稱，但副檔名無法可靠判定遊戲的分區或時序需求。"
      },
      {
        "id": "upstream",
        "question": "Retropa 會提供 JGenesis 上游的每一個系統嗎？",
        "answer": "本頁不做這樣的保證。本頁的支援範圍取自 Retropa 自家的型錄，而不是上游的完整功能清單。"
      }
    ],
    "related": [
      "sega-genesis-emulator",
      "master-system-emulator",
      "game-gear-emulator",
      "lakesnes-core",
      "plus"
    ]
  },
  "ares-core": {
    "kind": "core",
    "slug": "ares-core",
    "label": "Ares",
    "title": "iPhone 與 iPad 上的 Ares 核心 | Retropa",
    "description": "在 Retropa 中使用 Ares：本頁說明型錄收錄的 GBA、WonderSwan 與 Neo Geo Pocket 支援範圍、彩色機型的偵測、旋轉版面、存檔的注意事項，以及 Plus 的核心切換。",
    "summary": "Ares 在 Retropa 中涵蓋特定的掌機系列。它在上游的廣泛身分，並不代表上游的每一個系統或周邊都已整合進 App。",
    "sections": [
      {
        "title": "型錄支援的系統與格式",
        "body": "Ares 上游專案：https://github.com/ares-emulator/ares。以下支援範圍來自 Retropa 的型錄，而不是上游專案的完整功能清單。列出某個副檔名並不保證能與每一款遊戲相容。Retropa 不提供遊戲或 BIOS 檔案；請只匯入你有權使用的檔案。",
        "points": [
          "Game Boy Advance：.gba",
          "WonderSwan：.ws",
          "WonderSwan Color：.wsc",
          "Neo Geo Pocket：.ngp",
          "Neo Geo Pocket Color：.ngpc、.ngc"
        ]
      },
      {
        "title": "對應單色或彩色機型",
        "body": "匯入已下載到本機的映像檔，並檢查 Retropa 偵測到的是初代 WonderSwan 還是 WonderSwan Color，以及 Neo Geo Pocket 還是 Neo Geo Pocket Color。彩色機型具備單色硬體所沒有的能力。更改檔名並不是轉換，也無法讓只支援彩色機型的遊戲以初代機型執行。",
        "points": [
          "請保留原始映像檔，並另外備份進度。",
          "在診斷調色盤問題之前，請先確認偵測到的機型。",
          "如果出現系統專用的韌體提示，請依提示操作；Retropa 不提供 BIOS。"
        ]
      },
      {
        "title": "WonderSwan 的畫面方向不只是直向",
        "body": "WonderSwan 的遊戲可能設計成橫向或直向遊玩。請確認遊戲預期的方向、兩組方向鍵，以及可用的面板版面。只把電話轉成直向，並不能證明模擬的螢幕與所有控制器都已正確旋轉。如果某個版面無法提供必要的輸入，請改用其他合適的版面，不要假設核心會自動重新對應。"
      },
      {
        "title": "Pocket 並不是 Neo Geo 大型電玩",
        "body": "Neo Geo Pocket 使用的是掌機映像檔，而不是與 Neo Geo MVS 相關的多檔案大型電玩組合。大型電玩的 BIOS 壓縮檔無法取代 Pocket 的映像檔。請用預設版面測試斜向輸入與兩個動作按鍵。初代 Pocket 的顯示是單色的；只有 Pocket Color 才應預期能顯示彩色機型的畫面。大型電玩的執行是 Plus 的另一項能力。"
      },
      {
        "title": "核心切換與保留進度",
        "body": "切換模擬核心需要 Retropa Plus，即使該掌機系統本身不需購買即可使用也一樣。請只比較同時涵蓋該系統與該檔案格式的核心。選擇結果會依遊戲個別記住；在測試同一場景的音效、畫面與輸入差異之前，請先備份遊戲本身的存檔與原始核心的存檔狀態。",
        "points": [
          "存檔狀態記錄的是特定核心的內部狀態；請勿期待不同核心之間可以互通。",
          "遊戲內存檔也要備份並驗證；系統不保證會自動轉換。",
          "切換核心並不會轉換遊戲檔案，也不會提供缺少的 BIOS。"
        ]
      },
      {
        "title": "哪些情況可以比較，哪些不行",
        "body": "型錄為 Game Boy Advance 列出了替代核心，但對 WonderSwan 與 Neo Geo Pocket 各機型只列出 Ares。Plus 的核心切換不會為這些系統新增其他實作。Ares 在上游的範圍也比這項整合廣泛得多；請只採用本頁列出的 Retropa 支援範圍，不要假設更改副檔名就能啟用上游的另一個系統。"
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Ares 的 Pocket 支援可以執行我的 Neo Geo 大型電玩組合嗎？",
        "answer": "不行。Pocket 與 Neo Geo 大型電玩是不同的硬體系列，檔案需求也不同。執行大型電玩需要 Retropa Plus。"
      },
      {
        "id": "alternate",
        "question": "Plus 會新增其他 WonderSwan 或 Pocket 核心嗎？",
        "answer": "不會。這些系統目前在 Retropa 的型錄中只列出 Ares。核心切換只適用於存在相容替代方案的情況。"
      }
    ],
    "related": [
      "wonderswan-emulator",
      "neogeo-pocket-emulator",
      "gba-emulator",
      "plus"
    ]
  },
  "delta-alternative": {
    "kind": "compare",
    "slug": "delta-alternative",
    "label": "Delta 替代選擇",
    "title": "iPhone 與 iPad 的 Delta 模擬器替代方案 | Retropa",
    "description": "正在 iPhone 與 iPad 上尋找 Delta 的替代方案嗎？本頁比較大型電玩支援、Delta 面板匯入、顯示濾鏡與主機模式，也說明 Delta 表現較強的地方。",
    "summary": "Retropa 是 iPhone 與 iPad 上的大型電玩與掌機模擬器，可直接匯入 Delta 面板，加入大型電玩系列與非整數倍縮放的顯示濾鏡，並維持以掌機為主的介面。",
    "sections": [
      {
        "title": "從 Delta 沿用過來的部分",
        "body": "轉換模擬器只有在原有的設定能保留下來時才值得。Retropa 可以匯入 Delta 的 .deltaskin 套件，因此你已經調整好的版面不必從頭重建。請確認套件對應的是你遊玩的系統與方向，然後確認遊戲畫面沒有被遮擋。",
        "points": [
          ".deltaskin 套件可直接匯入。",
          "在依賴某個面板之前，請先確認它預定的系統。",
          "是否支援橫向與直向，取決於套件本身。"
        ]
      },
      {
        "title": "Retropa 補上 Delta 沒有的部分",
        "body": "最明顯的差異是大型電玩支援。Retropa 在掌機系統之外，還能執行受支援的 CPS I、CPS II、CPS III、Neo Geo、PGM 與 M92 大型電玩系列，因此單一遊戲庫就能同時涵蓋兩者。大型電玩核心需要 Retropa Plus，而且不包含遊戲與 BIOS 檔案。",
        "points": [
          "大型電玩系列與掌機共用同一個遊戲庫。",
          "大型電玩核心需要 Retropa Plus。",
          "大型電玩組合是多個檔案，而且可能需要 BIOS。"
        ]
      },
      {
        "title": "不要求整數倍縮放的顯示濾鏡",
        "body": "許多復古濾鏡假設遊戲畫面要對應整數倍的螢幕像素。在現代 iPhone 上，可用區域很少能整除，因而留下未使用的空間或不均勻的掃描線。Retropa 的進階濾鏡改以實際的輸出區域運作，並適用於各種方向與面板版面。iOS App 才是基準；本網站的瀏覽器預覽僅為近似效果。",
        "points": [
          "濾鏡改變的是呈現方式，不是遊戲解析度。",
          "進階濾鏡需要 Retropa Plus。",
          "傳統的掃描線疊加在非整數倍縮放時可能會閃爍。"
        ]
      },
      {
        "title": "Delta 表現較強的地方",
        "body": "Delta 的使用者基礎大得多，在 App Store 上的歷史更久，已發表的面板社群也更廣。如果你想要最多人使用的選項、最豐富的現有面板型錄，或最多的第三方教學，Delta 是合理的選擇，本頁不會假裝不是如此。",
        "points": [
          "Delta 的社群更大，第三方素材也更多。",
          "Delta 受惠於面板所形成的網路效應。",
          "Retropa 是較新的產品，型錄也較小。"
        ]
      },
      {
        "title": "兩者都試用不會有任何損失",
        "body": "兩款 App 都可免費下載，並提供選購的 App 內購買項目。實際的做法是：把一個 Delta 面板匯入 Retropa，載入一款掌機遊戲與一組大型電玩組合，再依控制器與畫面在你裝置上的實際感受來決定。",
        "points": [
          "兩邊都可免費下載。",
          "無論選哪一邊，都請保留你的原始檔案與面板。",
          "請依你自己裝置上的表現判斷，而不是只看比較表。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Retropa 可以匯入我現有的 Delta 面板嗎？",
        "answer": "可以。Retropa 能匯入 .deltaskin 套件。請保留原始套件檔案，並確認它對應的是你遊玩的系統與方向。"
      },
      {
        "id": "free",
        "question": "Retropa 是免費的嗎？",
        "answer": "Retropa 可免費下載，並提供選購的 App 內購買項目。大型電玩核心、進階面板與進階濾鏡需要 Retropa Plus。價格會在 App 內顯示。"
      },
      {
        "id": "roms",
        "question": "Retropa 有內含遊戲嗎？",
        "answer": "沒有。Retropa 是模擬器，不提供遊戲或 BIOS 檔案。請只匯入你有權使用的內容。"
      },
      {
        "id": "which-better",
        "question": "哪一款模擬器比較好？",
        "answer": "兩者著重的方向不同。Delta 的社群與面板型錄較大；Retropa 則加入大型電玩系列、非整數倍縮放的濾鏡，以及 Delta 面板匯入。請在你自己的裝置上試用兩者。"
      }
    ],
    "attribution": "Delta 為第三方產品。本頁提及的所有產品與公司名稱，均為各自擁有者的商標，在此僅用於識別與事實性比較。Retropa 與上述各方並無隸屬關係，亦未獲其背書或贊助。",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa 與 Delta 比較",
    "title": "Retropa 與 Delta 比較：大型電玩、濾鏡與面板",
    "description": "在 iPhone 與 iPad 上直接比較 Retropa 與 Delta：本頁說明兩者模擬的系統、大型電玩支援、面板相容性、顯示濾鏡，以及各自更適合的情況。",
    "summary": "Retropa 與 Delta 都是 iOS 的模擬器，但著重的方向不同：Delta 提供較大的社群與面板型錄，而 Retropa 加入大型電玩系列與非整數倍縮放的顯示濾鏡。",
    "sections": [
      {
        "title": "模擬的系統",
        "body": "兩款 App 都涵蓋多數人想要的掌機系統。Retropa 還能執行受支援的大型電玩系列，這是功能上最大的差異。大型電玩核心需要 Retropa Plus；掌機系統則不需要。",
        "points": [
          "掌機的支援範圍有大幅重疊。",
          "大型電玩系列是 Retropa 特有的。",
          "遊玩大型電玩需要 Plus。"
        ]
      },
      {
        "title": "面板與版面",
        "body": "Retropa 能匯入 Delta 的 .deltaskin 套件，因此你原本使用的版面可以搬過來。除此之外，Delta 已發表的面板生態系更大；如果你想要的就是瀏覽豐富的型錄，這一點很重要。",
        "points": [
          "Retropa 可匯入 .deltaskin 套件。",
          "Delta 已發表的型錄較大。",
          "請務必確認套件支援你的系統與方向。"
        ]
      },
      {
        "title": "顯示濾鏡",
        "body": "Retropa 提供進階的 CRT 與 LCD 濾鏡，會配合實際的輸出區域，而不要求整數倍縮放，並且可以使用 RetroArch 的著色器鏈，包括 .slang 與 .slangp 預設組。進階濾鏡需要 Plus。網站上的預覽僅為近似效果；iOS App 才是基準。",
        "points": [
          "進階濾鏡不要求整數倍縮放。",
          "Retropa 的型錄列出支援 RetroArch 著色器鏈。",
          "進階濾鏡需要 Plus。"
        ]
      },
      {
        "title": "社群、文件與歷史紀錄",
        "body": "Delta 在 App Store 上的時間更久，使用者多得多，因此社群文件、論壇解答與第三方指南也更多。Retropa 較新也較小。任何聲稱相反的人，描述的都不是這兩款產品目前的情況。",
        "points": [
          "Delta 在 App Store 的歷史較久。",
          "Delta 有較多的社群解答可參考。",
          "Retropa 目前的使用者基礎較小。"
        ]
      },
      {
        "title": "如何選擇",
        "body": "如果你重視大型電玩遊戲，或者想要不假設整數倍縮放的顯示濾鏡，Retropa 值得安裝。如果你想要最大的面板型錄與最多的社群素材，Delta 是較保險的選擇。兩者都可免費下載，因此最誠實的建議是用你自己的檔案把兩者都試一遍。",
        "points": [
          "兩邊都可免費下載。",
          "評估任何一款都不需要承諾。",
          "兩者都需要你自備遊戲檔案。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta 支援大型電玩遊戲嗎？",
        "answer": "本頁無法查證這項比較。本頁能說明的是：Retropa 可執行受支援的 CPS、Neo Geo、PGM 與 M92 大型電玩系列，而且大型電玩核心需要 Retropa Plus。"
      },
      {
        "id": "skins",
        "question": "我可以在兩者中使用同樣的面板嗎？",
        "answer": "Retropa 能匯入 Delta 的 .deltaskin 套件，因此在 Delta 中可用的套件通常也能匯入 Retropa。匯入之後請確認目標系統與方向。"
      },
      {
        "id": "price",
        "question": "它們的價格是多少？",
        "answer": "Retropa 可免費下載，並提供選購的 App 內購買項目。大型電玩核心、進階面板與進階濾鏡需要 Retropa Plus。目前的價格會在 App 內顯示。"
      }
    ],
    "attribution": "Delta 為第三方產品。本頁提及的所有產品與公司名稱，均為各自擁有者的商標，在此僅用於識別與事實性比較。Retropa 與上述各方並無隸屬關係，亦未獲其背書或贊助。",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "匯入遊戲",
    "title": "如何在 iPhone 與 iPad 上把遊戲匯入 Retropa",
    "description": "在 iPhone 與 iPad 上把自己擁有、有權使用的遊戲檔案匯入 Retropa：匯入入口在哪裡、雲端佔位項目為什麼會失敗、支援哪些檔案格式，以及檔案被拒絕時該依序檢查什麼，並說明遊戲檔案、遊戲存檔與即時存檔的差別。",
    "summary": "一步一步帶你把遊戲檔案匯入 Retropa，說明支援的檔案格式、ZIP 容器的行為，以及匯入失敗後如何補救。",
    "sections": [
      {
        "title": "開始之前",
        "body": "Retropa 不內建遊戲，也不內建 BIOS 檔案。你需要一個自己擁有使用權的遊戲檔案，而且它必須存放在裝置本機。請在 App 之外保留一份未更動的副本，這樣匯入過程出錯時，原始檔案永遠不會受到影響。",
        "points": [
          "只匯入你有權使用的內容。",
          "為每個原始檔案另外保留一份備份。",
          "App 可免費下載，但不提供遊戲。"
        ]
      },
      {
        "title": "第一步：把檔案放到裝置上",
        "body": "請把檔案下載到本機儲存空間，而不是只留下雲端佔位項目。這是匯入失敗最常見的原因：「檔案」App 看得到項目，但位元組還沒真正下載到裝置，模擬器等於什麼都拿不到。",
        "points": [
          "在「檔案」中開啟該檔案一次，確認已下載完成。",
          "顯示為灰色或需要下載的項目就是佔位項目。",
          "下載完成後再匯入。"
        ]
      },
      {
        "title": "第二步：從遊戲庫匯入",
        "body": "打開 Retropa 遊戲庫中的匯入入口並選取檔案。確認系統辨識正確後，先用預設版面啟動遊戲，再去更換面板或濾鏡，這樣之後萬一出問題，原因才會清楚。"
      },
      {
        "title": "支援哪些檔案格式",
        "body": "Retropa 接受與所支援系統相符的檔案格式，也能直接開啟 ZIP 與 RetroPack 容器。副檔名必須與系統相符：Game Boy 是 .gb，Game Boy Color 是 .gbc，Game Boy Advance 是 .gba，DS 是 .nds。",
        "points": [
          "改副檔名不會讓遊戲在系統之間轉換。",
          "ZIP 與 RetroPack 容器可以不先解壓縮就直接開啟。",
          "街機遊戲組是多檔案結構，處理方式不同。"
        ]
      },
      {
        "title": "匯入失敗時",
        "body": "先看清楚錯誤訊息，再依序檢查三件事：檔案是否已完整下載、副檔名是否與系統相符、檔案是否為乾淨的映像檔而不是下載到一半的內容。這三項都排除了，才值得懷疑模擬器核心。",
        "points": [
          "先把未完成的下載補完。",
          "確認副檔名與系統相符。",
          "放棄之前，先試試該系統的另一個核心。"
        ]
      },
      {
        "title": "遊戲檔案、存檔與即時存檔",
        "body": "你的遊戲檔案、遊戲本身的存檔資料，以及模擬器的即時存檔，是三件不同的事。把其中一種改名成另一種，並不會讓它變成另一種。在更換核心或 App 之前，三種都要備份，因為即時存檔格式並非在所有核心之間都能通用。",
        "points": [
          "保持原始遊戲檔案原封不動。",
          "電池存檔與即時存檔要分開備份。",
          "不要期待某個核心的即時存檔能在另一個核心讀取。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa 有內建遊戲嗎？",
        "answer": "沒有。Retropa 是模擬器，不提供遊戲或 BIOS 檔案。你要匯入的是自己擁有使用權的檔案。"
      },
      {
        "id": "cloud",
        "question": "為什麼我的檔案匯不進去？",
        "answer": "最常見的原因是它只是雲端佔位項目，並沒有真正下載到本機。請在「檔案」中開啟它觸發下載，然後再匯入一次。"
      },
      {
        "id": "zip",
        "question": "可以匯入 ZIP 檔案嗎？",
        "answer": "Retropa 可以直接開啟 ZIP 與 RetroPack 容器，因此通常不需要自行解壓縮，除非某個匯入流程明確要求。"
      }
    ],
    "related": [
      "connect-controller-ios",
      "save-states-and-rewind",
      "game-wont-load"
    ]
  },
  "connect-controller-ios": {
    "kind": "guide",
    "slug": "connect-controller-ios",
    "label": "控制器",
    "title": "在 iPhone 與 iPad 上為 Retropa 連接控制器",
    "description": "先把藍牙或有線控制器與 iOS 配對，再在 Retropa 內完成按鍵對應，並說明按鍵沒反應、對應設定隨遊戲改變時該如何排查，以及觸控與控制器並用的搭配方式。",
    "summary": "先讓相容的控制器與 iOS 完成配對，再依系統與遊戲在 Retropa 內逐一核對對應設定。本指南涵蓋配對順序、常見的對應錯誤，以及觸控搭配控制器的做法。",
    "sections": [
      {
        "title": "先與 iOS 配對，再開啟 Retropa",
        "body": "控制器必須先被 iOS 認得。請在系統設定中完成配對，確認它在系統裡有反應，然後才開啟 Retropa。從未在系統層配對過的控制器，無論在 App 裡怎麼設定，都不會出現在 App 內。",
        "points": [
          "先在 iOS 設定中完成配對。",
          "確認控制器在系統中有反應。",
          "接著才在 Retropa 內檢查。"
        ]
      },
      {
        "title": "對應設定要按系統逐一核對，不是一次設定就通用",
        "body": "Retropa 依系統分別儲存控制版面，因為 Game Boy 只需要六個輸入，而 SNES 控制器需要十個。請把按鍵對應當成「每個系統各自處理」的工作：配對一次之後，還是要針對你實際遊玩的每個系統逐一確認。",
        "points": [
          "Game Boy：十字鍵、A、B、Start、Select。",
          "SNES 另外多了 X、Y、L、R。",
          "街機版面還會再加上數個動作按鍵。"
        ]
      },
      {
        "title": "最常被漏測的按鍵",
        "body": "實際使用時，問題往往集中在同一批輸入：六鍵控制器的肩鍵、很容易被擺到按不到的 Start 與 Select，以及斜向輸入——在原廠控制器採用微動搖桿的系統上，斜向格外重要。",
        "points": [
          "設定對應時，特別測試 L 與 R。",
          "確認 Start 與 Select 按得到。",
          "除了四個正方向，也要測斜向。"
        ]
      },
      {
        "title": "觸控與控制器可以並存",
        "body": "有些遊戲需要實體控制器無法取代的觸控操作，雙螢幕系統尤其如此。讓螢幕上的版面與已配對的控制器同時可用，通常比在兩者之間切換更實用。",
        "points": [
          "遊戲若會用到觸控螢幕，就不要關閉觸控操作。",
          "確認覆蓋層沒有遮住遊戲畫面。",
          "觸覺回饋與觸控版面可以分開調整。"
        ]
      },
      {
        "title": "按鍵沒有反應時",
        "body": "從控制器往外逐一排查：先在 iOS 確認它有反應，再在 Retropa 確認，最後用一款確定會用到該按鍵的遊戲測試。如果對應設定看起來正確，遊戲卻沒有反應，那可能是這款遊戲根本沒用到該輸入——早期的掌機遊戲很常見。",
        "points": [
          "先在 iOS 設定中確認控制器。",
          "在 Retropa 內檢查對應設定。",
          "確認遊戲真的會用到該按鍵。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "哪些控制器可以用？",
        "answer": "iOS 支援的控制器都能搭配 Retropa 使用。請先在 iOS 設定中配對，再於 App 內核對對應設定。"
      },
      {
        "id": "mapping-lost",
        "question": "為什麼我的對應設定變了？",
        "answer": "版面是依系統與遊戲分別儲存的，因此你為某個系統設定的對應不會自動套用到另一個系統。請核對你目前遊玩系統的對應設定。"
      },
      {
        "id": "touch",
        "question": "接上控制器後，觸控操作會失效嗎？",
        "answer": "不會。觸控操作仍然可用，這在需要觸控或副螢幕操作的系統上很實用。"
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "gb-emulator"
    ]
  },
  "save-states-and-rewind": {
    "kind": "guide",
    "slug": "save-states-and-rewind",
    "label": "存檔",
    "title": "Retropa 的即時存檔與倒帶 | iPhone 與 iPad",
    "description": "搞懂 Retropa 中遊戲存檔、即時存檔與倒帶的差別，了解如何安全地在核心之間搬移存檔，以及存檔讀取失敗時該檢查哪些項目。",
    "summary": "遊戲存檔、模擬器即時存檔與倒帶是三種不同機制，可攜性也各不相同。本指南說明各自的作用，以及如何安全備份。",
    "sections": [
      {
        "title": "三種都叫「存檔」的東西",
        "body": "遊戲自己的存檔是遊戲本身寫出來的，即時存檔則是記錄模擬器在某一瞬間的完整狀態，而倒帶是重播最近的歷程。三者行為不同、儲存方式不同，把其中一種改名成另一種也不會讓它變成另一種。",
        "points": [
          "遊戲存檔由遊戲本身產生。",
          "即時存檔記錄模擬器的完整瞬間狀態。",
          "倒帶依靠最近的歷程，而不是已儲存的檔案。"
        ]
      },
      {
        "title": "建立與使用即時存檔",
        "body": "在困難段落之前、更換核心之前，或套用新濾鏡之前，即時存檔都很有用，因為它可以讓你回到一個確認沒問題的時間點。快速存檔與快速讀取正是為了這種短期檢查點而設計。",
        "points": [
          "更換核心前先存一個即時存檔。",
          "要比較兩組預設時，即時存檔是最快的方式。",
          "長期紀錄仍以遊戲本身的存檔為準。"
        ]
      },
      {
        "title": "在核心之間搬移存檔",
        "body": "即時存檔並非在所有核心之間都能通用，因為它記錄的是某個特定實作內部的狀態。由遊戲寫出的電池存檔，搬移成功的機率高得多。更換所選核心之前，兩者都要備份。",
        "points": [
          "即時存檔通常是核心專屬的。",
          "電池存檔搬移起來可靠得多。",
          "切換核心前先備份。"
        ]
      },
      {
        "title": "存檔讀不起來時",
        "body": "先確認它是遊戲內資料還是即時存檔，再確認它寫出之後核心有沒有換過、App 版本有沒有更新。如果即時存檔讀取失敗，改用遊戲本身的存檔，因為這條路徑不依賴模擬器的內部狀態格式。",
        "points": [
          "確認核心沒有變更。",
          "確認存檔類型。",
          "盡可能改回遊戲本身的存檔。"
        ]
      },
      {
        "title": "真正留得住的備份",
        "body": "把原始遊戲檔案、遊戲本身的存檔，以及你在意的即時存檔分別放在不同地方。iCloud 或電腦上的副本都可以，重點是 App 或裝置出一次問題時，不會同時把所有副本一起弄丟。",
        "points": [
          "遊戲檔案本身也要備份，不是只備份存檔。",
          "存檔要與即時存檔分開存放。",
          "至少留一份裝置之外的副本。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "存檔與即時存檔有什麼差別？",
        "answer": "存檔是由遊戲寫出、以遊戲自己的格式記錄進度。即時存檔則記錄模擬器在某一刻的完整狀態，並且專屬於產生它的核心。"
      },
      {
        "id": "rewind",
        "question": "倒帶可以倒多遠？",
        "answer": "倒帶是從記憶體重播最近的歷程，而不是還原已儲存的檔案，所以深度取決於緩衝區，而不是固定的存檔格數。"
      },
      {
        "id": "transfer",
        "question": "可以把存檔搬到其他模擬器嗎？",
        "answer": "遊戲本身的存檔可攜性較高。即時存檔依賴特定核心的內部格式，不應期待能在別的地方讀取。"
      }
    ],
    "related": [
      "import-roms-iphone",
      "game-wont-load",
      "gb-emulator"
    ]
  },
  "game-wont-load": {
    "kind": "guide",
    "slug": "game-wont-load",
    "label": "排障",
    "title": "Retropa 裡遊戲載入不了？先檢查這些",
    "description": "遊戲在 Retropa 中啟動不了的排查順序：下載是否完整、副檔名是否正確、辨識到的系統是否正確、是否缺少 BIOS、是否為不受支援的記憶體映射方式，以及核心本身的問題。",
    "summary": "依固定順序逐項排查——下載完整性、副檔名、辨識到的系統、BIOS 需求，最後才是核心選擇——再判斷檔案是否真的不能用。",
    "sections": [
      {
        "title": "依固定順序排查，不要靠猜",
        "body": "大多數載入失敗都出自少數幾個原因，用一致的順序檢查可以避免浪費時間。下面的順序從成本最低的檢查走到成本最高的檢查，所以一找到真正的原因就可以停下來。",
        "points": [
          "先查下載完整性。",
          "再查副檔名與辨識到的系統。",
          "最後才是 BIOS 與核心選擇。"
        ]
      },
      {
        "title": "檢查一：檔案真的在裝置上嗎？",
        "body": "如果檔案只是雲端佔位項目，即使它出現在遊戲庫裡，模擬器也拿不到可用的內容。請在「檔案」App 中開啟它來觸發下載，等它下載完成，然後再匯入一次。",
        "points": [
          "灰色或待下載的項目就是還沒下載完成。",
          "重試之前先讓下載完成。",
          "這是最常見的單一原因。"
        ]
      },
      {
        "title": "檢查二：副檔名與系統相符嗎？",
        "body": "每個系統都有自己的副檔名，不相符就會產生核心無法解讀的檔案。改副檔名不會轉換任何東西，所以把 .gb 改名成 .gba，它仍然是 Game Boy 遊戲，不會表現得像 Game Boy Advance 遊戲。",
        "points": [
          ".gb、.gbc、.gba 與 .nds 分屬不同系統。",
          "改名永遠不會轉換遊戲。",
          "在遊戲庫中確認辨識到的系統。"
        ]
      },
      {
        "title": "檢查三：是不是少了 BIOS 或母集？",
        "body": "有些系統與街機系列需要額外的 BIOS 檔案，街機遊戲組也可能依賴母集。核心會回報缺少什麼，請仔細讀那則訊息，因為缺 BIOS 與缺母集是兩個不同的問題，處理方式也不一樣。",
        "points": [
          "讀清楚具體的錯誤訊息。",
          "街機的 neogeo.zip 不是掌機 BIOS。",
          "Retropa 不提供 BIOS 下載。"
        ]
      },
      {
        "title": "檢查四：換另一個核心試試",
        "body": "有些系統提供不只一個核心。如果檔案完整、命名正確，也沒有缺少任何相依項目，下一步就是切換核心，因為不同核心在模擬原硬體的嚴格程度上有差異。",
        "points": [
          "記下是哪個核心失敗。",
          "切換核心後再重試一次。",
          "用同一個核心跑第二款遊戲做對照。"
        ]
      },
      {
        "title": "送出支援請求時該附上什麼",
        "body": "如果遊戲仍然無法啟動，有用的資訊是 App 版本、系統、所選核心與完整的錯誤訊息。請不要附上商業遊戲或 BIOS 檔案，因為排查並不需要它們，也不應該分享。",
        "points": [
          "App 版本與系統。",
          "所選核心與錯誤訊息。",
          "絕對不要附上商業 ROM 或 BIOS 檔案。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "遊戲打開後是黑畫面，代表什麼？",
        "answer": "通常是下載未完成、檔案變體不受支援，或缺少 BIOS 之類的相依項目。請先查下載，再查副檔名，最後看核心回報的具體錯誤。"
      },
      {
        "id": "worked-before",
        "question": "遊戲之前可以玩，現在不行了，為什麼？",
        "answer": "請檢查 App 版本、所選核心或檔案位置是否變過。即時存檔是核心專屬的，所以由另一個核心寫出的即時存檔可能讀不起來，即使遊戲本身仍然正常。"
      },
      {
        "id": "support",
        "question": "送出支援請求時應該附上什麼？",
        "answer": "App 版本、系統、所選核心與完整的錯誤訊息。請不要附上商業遊戲或 BIOS 檔案。"
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "arcade"
    ]
  },
  "plus": {
    "kind": "capability",
    "slug": "plus",
    "label": "Retropa Plus",
    "title": "Retropa Plus：哪些功能免費，哪些需要 Plus",
    "description": "說明 Retropa 哪些功能免費、哪些需要 Retropa Plus：掌機系統、街機系列、高級面板、進階濾鏡與電視模式。目前價格一律以 App 內顯示為準。",
    "summary": "Retropa 可免費下載。掌機模擬不需付費即可使用；街機系列、高級面板與進階顯示濾鏡屬於 Retropa Plus。目前價格與可用方案以 App 內顯示為準。",
    "sections": [
      {
        "title": "免費可用的部分",
        "body": "下載 Retropa 完全不用錢，掌機模擬不需購買就能使用。你可以匯入自己的遊戲檔案、使用標準面板與一般顯示預設，也能設定即時存檔與控制器對應。匯入檔案這個動作本身不會觸發任何付款。",
        "points": [
          "免費下載。",
          "掌機系統不需購買即可使用。",
          "內含標準面板與一般顯示預設。",
          "匯入遊戲既不會解鎖、也不會要求付費功能。"
        ]
      },
      {
        "title": "需要 Retropa Plus 的部分",
        "body": "Retropa Plus 涵蓋街機系列、高級面板與進階顯示濾鏡。這些是額外增加的能力，而不是對你原有功能的限制：無論是否訂閱，掌機遊玩都照常運作。",
        "points": [
          "街機系列：CPS I、CPS II、CPS III、Neo Geo、PGM、M92。",
          "高級面板。",
          "進階 CRT 與 LCD 濾鏡。",
          "電視模式與進階存檔流程。"
        ]
      },
      {
        "title": "為什麼街機支援屬於 Plus",
        "body": "街機模擬是一塊獨立的工作：多種機板、多檔案遊戲組、BIOS 相依性，以及逐組的相容性。把它當成額外能力來處理，可以讓免費層保持單純，也讓所有人都能免費使用掌機體驗。",
        "points": [
          "街機硬體與掌機硬體不同。",
          "街機遊戲組是多檔案結構，而且可能需要 BIOS。",
          "掌機支援不依賴 Plus。"
        ]
      },
      {
        "title": "任何方案都不內建遊戲與 BIOS",
        "body": "Retropa 沒有任何方案會提供遊戲檔案或 BIOS 檔案，因為這款 App 是模擬器。內容要由你自己提供，而且必須是你有權使用的內容——這一點不會因為付費而改變。訂閱解鎖的是模擬器能力，不是內容。",
        "points": [
          "任何方案都不內建遊戲。",
          "不提供 BIOS 檔案。",
          "只匯入你有權使用的內容。"
        ]
      },
      {
        "title": "在哪裡查看目前價格",
        "body": "價格、可用方案以及任何地區性優惠都會顯示在 App 內，由 App Store 以你的當地貨幣呈現。本頁刻意不列出價格，這樣一來，價格調整也永遠不會讓這一頁過時。",
        "points": [
          "價格顯示在 App 內。",
          "可用情況可能因地區而異。",
          "購買由 App Store 處理。"
        ]
      },
      {
        "title": "購買一律由 App Store 處理",
        "body": "所有購買與訂閱都透過 App Store 進行。Retropa 不在網頁上處理付款，本網站也絕不會索取卡片資料。續訂、取消與退款都由 App Store 依其條款管理。",
        "points": [
          "本網站不收取任何付款資料。",
          "在 App Store 設定中管理或取消訂閱。",
          "退款依 App Store 政策處理。"
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "不付費也能使用 Retropa 嗎？",
        "answer": "可以。下載 Retropa 免費，掌機模擬不需購買即可使用。街機系列、高級面板與進階濾鏡則需要 Retropa Plus。"
      },
      {
        "id": "price",
        "question": "Retropa Plus 要多少錢？",
        "answer": "價格與可用方案會顯示在 App 內，由 App Store 以你的當地貨幣呈現。本頁不列出價格，以免價格調整後資訊過時。"
      },
      {
        "id": "buy-here",
        "question": "可以在這個網站上訂閱嗎？",
        "answer": "不可以。購買完全透過 App Store 處理。本網站不會收集任何付款資料。"
      },
      {
        "id": "content",
        "question": "Plus 包含遊戲嗎？",
        "answer": "不包含。Retropa 的任何方案都不提供遊戲或 BIOS 檔案。請匯入你有權使用的內容。"
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
