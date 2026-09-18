import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "如何在 Retropa 匯入 ROM | iPhone 與 iPad 指南",
  "description": "在 iPhone 與 iPad 上匯入 GBA、DS 與街機遊戲。關於 ROM、BIOS、Delta 面板、控制器、存檔、Plus，以及不需整數倍縮放的進階濾鏡，都在這裡解答。",
  "title": "在 Retropa 開始你的第一局。",
  "intro": "從你擁有的檔案，到可以實際遊玩的遊戲。先從受支援的掌機系統開始，再把控制器與畫面調成自己喜歡的樣子。",
  "steps": [
    [
      "取得 Retropa",
      "在執行 iOS 18 或更新版本的 iPhone 或 iPad 上，從 App Store 安裝 Retropa。應用程式可免費下載；部分功能需要 Plus。"
    ],
    [
      "匯入你的遊戲",
      "開啟遊戲庫中的匯入項目，從「檔案」選擇受支援的 ROM。GBA 請使用 .gba 檔案，DS 請使用 .nds 檔案。請保留原始檔作為備份。Retropa 不提供 ROM 與 BIOS 檔案。"
    ],
    [
      "從遊戲庫開啟它",
      "選擇匯入的遊戲並開始遊玩。在更換面板或濾鏡之前，請先確認螢幕上的控制項。如果遊戲無法啟動，請檢查它的系統、檔案格式，以及是否有需要的 BIOS。"
    ]
  ],
  "faqTitle": "開始之前",
  "systems": "查看支援的系統",
  "support": "需要協助嗎？",
  "faqs": [
    {
      "id": "devices",
      "question": "哪些 iPhone 與 iPad 可以執行 Retropa？",
      "answer": "Retropa 可透過 App Store 取得，適用於執行 iOS 18 或更新版本的 iPhone 與 iPad。請在 App Store 的相容性說明中確認你的裝置。較吃重的街機核心與多次疊加的顯示濾鏡，所需的效能可能高於簡單的掌機遊戲。"
    },
    {
      "id": "systems",
      "question": "Retropa 可以遊玩 GBA、Nintendo DS 與街機遊戲嗎？",
      "answer": "Retropa 支援 GBA、DS 以及其他列出的掌機與家用主機系統，也支援 CPS、PGM、M92 等受支援的街機家族。實際相容性取決於所安裝的應用程式、核心與遊戲格式；這並不代表每一款遊戲或街機壓縮檔都受到支援。",
      "link": "cores",
      "linkLabel": "查看支援的系統與檔案格式"
    },
    {
      "id": "games",
      "question": "Retropa 內含遊戲或可下載的 ROM 嗎？",
      "answer": "沒有。Retropa 是模擬器，不是商業遊戲訂閱服務或 ROM 商店。請帶入你有權使用的內容，例如你自己的專案，或經授權散布的同人自製遊戲。商業 ROM 與 BIOS 檔案並未提供。"
    },
    {
      "id": "import",
      "question": "我要如何在 iPhone 上匯入 GBA 或 DS 的 ROM？",
      "answer": "請把遊戲檔案保存在可透過 iOS「檔案」應用程式存取的位置。開啟 Retropa 遊戲庫中的匯入項目，選擇受支援的檔案，再從遊戲庫開啟匯入的遊戲。GBA 使用 .gba，DS 使用 .nds。把其他副檔名重新命名，並不會讓遊戲變成正確的格式。"
    },
    {
      "id": "bios",
      "question": "Retropa 需要 BIOS 檔案嗎？",
      "answer": "BIOS 需求因系統與核心而異。如果 Retropa 回報缺少 BIOS，請確認該系統的要求，並透過應用程式支援的流程提供正確的檔案。其他系統的 BIOS 不能替代。Retropa 不提供 BIOS 下載。",
      "link": "cores",
      "linkLabel": "查看系統需求"
    },
    {
      "id": "arcade-zip",
      "question": "為什麼我的街機 ZIP 或 ROM set 無法啟動？",
      "answer": "街機壓縮檔必須符合其核心所要求的基板與 ROM set。有些 set 還依賴父集或 BIOS，因此單獨一個克隆 ZIP 可能並不完整。除非應用程式要求解壓縮，否則請保持壓縮檔完整。執行街機遊戲也需要 Plus；訂閱無法修復缺少或不相容的 ROM 資料。"
    },
    {
      "id": "missing-file",
      "question": "為什麼我在「檔案」中看得到遊戲，卻無法匯入？",
      "answer": "請確認實際的檔案已存放在本機，而不只是雲端佔位項目，並確認它的格式符合受支援的系統。請檢查 Retropa 顯示的錯誤。在排查匯入問題時，請保留原始檔的備份，也不要以為重新命名過的 ZIP 或未下載完整的檔案是有效的 ROM。"
    },
    {
      "id": "offline",
      "question": "我可以在不串流的情況下遊玩本機儲存的遊戲嗎？",
      "answer": "Retropa 會在你的裝置上執行受支援的遊戲檔案，而不是從雲端模擬器串流遊戲畫面。請先匯入所需的遊戲與 BIOS 檔案。下載套件、取得線上資訊，以及使用雲端功能，仍然需要各自的網路連線。"
    },
    {
      "id": "delta-skins",
      "question": "我可以在 Retropa 中使用 Delta 面板嗎？",
      "answer": "Retropa 支援匯入 .deltaskin 套件。請使用完整的套件，為對應的系統選擇配置，並確認它支援直向或橫向。支援某種格式，並不保證每一款第三方面板都能套用到每支 iPhone。Delta 相容性描述的是一種檔案格式，並不代表有任何關聯。",
      "link": "delta-skins",
      "linkLabel": "閱讀 Delta 面板匯入指南"
    },
    {
      "id": "controllers",
      "question": "Retropa 支援藍牙或外接遊戲控制器嗎？",
      "answer": "Retropa 支援相容的外接控制器與可自訂的按鍵對應。請先透過 iOS 連接控制器，再到 Retropa 確認它的對應設定。遊玩街機遊戲時，除了動作鍵，也要確認投幣與開始鍵的指派。相容性取決於控制器與 iOS 的支援情況。"
    },
    {
      "id": "saves",
      "question": "遊戲內存檔與模擬器存檔狀態是同一回事嗎？",
      "answer": "不是。遊戲內存檔由遊戲本身建立；存檔狀態則記錄模擬器的執行狀態。存檔狀態可能依賴確切的核心與版本，因此不要假設它們能在不同應用程式或核心之間通用。在搬移或取代存檔之前，請保留你的原始檔案與備份。"
    },
    {
      "id": "plus",
      "question": "Retropa 免費嗎？Plus 會解鎖什麼？",
      "answer": "Retropa 可免費下載。街機核心、加值面板與進階濾鏡需要 Retropa Plus。目前的方案、各地價格與購買條款，都會在購買前於應用程式內顯示。免費下載並不代表所有核心或資源都包含在內。"
    },
    {
      "id": "restore",
      "question": "我要如何回復先前購買的 Retropa Plus？",
      "answer": "請使用當初購買所用的 Apple 帳號，執行應用程式中的回復購買功能。並確認該筆購買或訂閱仍然有效。回復權益並不會找回缺少的 ROM 檔案或遊戲存檔。聯絡支援時請提供應用程式版本與購買問題，而不要提供帳號密碼。"
    },
    {
      "id": "advanced-filters",
      "question": "Retropa 的進階濾鏡與一般 CRT 濾鏡有什麼不同？",
      "answer": "簡單的顯示濾鏡通常只是疊上取樣的掃描線或像素網格。Retropa 的 CRT V4 與 Trinitron 等進階預設集，會以輸出像素積分或帶限濾波來模擬電子束與螢光結構。DMG 則包含積分式液晶單元與反射式基板。這些是顯示器模型，而不只是加上一層色調。",
      "link": "crt-filters",
      "linkLabel": "比較進階顯示濾鏡"
    },
    {
      "id": "integer-scaling",
      "question": "Retropa 的進階濾鏡需要整數倍縮放嗎？",
      "answer": "不需要。Retropa 的進階濾鏡會配合實際的輸出尺寸，而不要求 2 倍、3 倍或其他整數倍率。這讓你在把手機、螢幕方向或所選面板的顯示區域填滿時更有彈性，同時保留原始的寬高比。結果仍取決於預設集與裝置；濾鏡並不會產生額外的來源解析度。",
      "link": "crt-filters",
      "linkLabel": "了解非整數倍縮放的算繪方式"
    },
    {
      "id": "shader-import",
      "question": "Retropa 可以匯入 RetroArch 的 .slang 與 .slangp 著色器嗎？",
      "answer": "Retropa 支援 .slang 與 .slangp 的著色器流程。一個預設集可能引用多個階段或紋理；匯入時請把這些相依檔案放在一起。並非每一款第三方預設集都保證能運作。如果某個預設集失敗，請檢查它的檔案與相容性，而不要將它重新命名或更換遊戲。",
      "link": "crt-filters",
      "linkLabel": "閱讀著色器相容性說明"
    },
    {
      "id": "performance",
      "question": "進階濾鏡會影響影格率或電池續航力嗎？",
      "answer": "有可能。多次疊加的算繪會比未套用濾鏡的畫面需要更多 GPU 運算，而成本會隨預設集、輸出尺寸、裝置與模擬器核心而異。如果你發現變慢，請與原始畫面比較，然後試試較輕量的濾鏡。不要求整數倍的縮放是一項畫質功能，並不保證無限的 GPU 效能。"
    },
    {
      "id": "packages",
      "question": "我要去哪裡取得 Retropa 的面板與濾鏡套件？",
      "answer": "請在 PackHub 瀏覽面板與著色器套件。並在應用程式中確認套件的系統、格式與 Plus 需求。匯入的資源不會繞過權益檢查。如果你需要協助，請提供應用程式版本、套件名稱與錯誤訊息，但不要傳送商業 ROM 或 BIOS 檔案。"
    }
  ]
}
