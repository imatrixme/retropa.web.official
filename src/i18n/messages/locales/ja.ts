export const jaMessages = {
    shared: {
      brand: {
        logoAlt: "Retropa 公式サイトのロゴ",
        tagline: "iOS レトロスタジオ",
        homepageAriaLabel: "Retropa ホーム",
      },
      nav: {
        home: "ホーム",
        cores: "コア",
        terms: "利用規約",
        privacy: "プライバシー",
      },
      headerDownloadLabel: "ダウンロード",
      footer: {
        description:
          "Retropa はマルチコアエミュレーション、スキンの高度なカスタマイズ、触覚波形チューニング、フィルターパック、ローカライズパックを統合し、磨き込まれた iOS 体験に仕上げます。",
        legalSupportHeading: "法務・サポート",
        emulatorCores: "エミュレーターコア",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        rightsReserved: "無断転載を禁じます。",
      },
      language: {
        menuLabel: "言語",
        openMenuLabel: "言語メニューを開く",
      },
      theme: {
        menuLabel: "テーマ",
        openMenuLabel: "テーマメニューを開く",
        options: {
          system: "システム",
          light: "ライト",
          dark: "ダーク",
        },
      },
      legalDocument: {
        badge: "法務",
        effectiveDateLabel: "施行日",
        onThisPageLabel: "このページ",
      },
    },
    terms: {
      title: "利用規約",
      subtitle:
        "本規約は、アプリへのアクセス、購入、インポートしたコンテンツに関する利用者の責任を含め、Retropa の利用条件を定めるものです。",
    },
    privacy: {
      title: "プライバシーポリシー",
      subtitle:
        "本ポリシーは、Retropa が処理する情報の範囲、保護方法、およびあなたが行使できるデータに関する権利について説明します。",
    },
    home: {
      heroBadge: "ゲームの手触りをまだ大事にする人のために",
      heroTitleLines: ["名作を、", "今の手触りで。", "iPhoneとiPadへ。"],
      heroDescription:
        "Retropaは、名作に「懐かしいのに今っぽい」居場所を用意します。起動は速く、操作は正確に。iPhoneとiPadで、あの魅力を気持ちよく遊べます。",
      readCompatibilityPromise: "互換性の詳細を見る",
      downloadForIOSLabel: "iOS版を入手",
      compatibilityCardKicker: "Retropaが選ばれる理由",
      compatibilityCardTitleLines: ["触ってわかる互換性、", "使い続けられる品質。"],
      compatibilityPillars: [
        {
          title: "RetroArchフィルタースタック：完全対応",
          description:
            ".slang / .slangpプリセットによるRetroArchシェーダーチェーンをフルで実行。マルチパス順序、パラメータ制御、ランタイムでの安定切替まで対応します。",
        },
        {
          title: "Deltaスキンパッケージ：完全互換",
          description:
            "Deltaの.deltaskinパッケージをそのまま取り込み、レイアウトの意図を保ちます。縦横の切替でも操作をしっかり反応させます。",
        },
      ],
      runtimeIntegrityTitle: "毎日のプレイのために設計",
      runtimeIntegrityDescription:
        "Retropaは、安定した動作・反応の良い操作・対応機種での確かな互換性を大切にしています。",
      highlights: [
        { value: "RetroArch .slangp", label: "フィルターのフルパイプライン" },
        { value: "Delta .deltaskin", label: "完全互換" },
        { value: "8つのランタイムコア", label: "システム別の切替" },
      ],
      compatibilitySectionKicker: "見た目より互換性",
      compatibilitySectionTitleLines: ["起動から長時間プレイまで、", "気持ちよく遊べる設計。"],
      logosSectionKicker: "コアとシステムのロゴ",
      logosSectionTitle: "公式アセットをきれいに動かす",
      logosSectionDescription:
        "コア/コンソールのロゴは公式リポジトリとWikimediaから取得し、ページ表示に最適化したPNGへ正規化。滑らかな描画と安定したパフォーマンスを両立します。",
      coreShowcaseTitle: "エミュレーターコア展示",
      systemShowcaseTitle: "システム展示",
      capabilitySectionKicker: "本物の強み",
      capabilitySectionTitleLines: ["手に馴染む快適さ、", "毎回のプレイに確かな安心。"],
      spotlightFeatures: [
        {
          title: "システムごとの記憶で、いつもの心地よさへ",
          description:
            "Retropaはコンソールごとに、好みのコア/スキンモード/操作レイアウトを記憶します。次に開いた瞬間から、ちょうど良い状態に戻れます。",
        },
        {
          title: "スタジオ級のコントローラーマッピング",
          description:
            "複数の物理コントローラーを同時に扱い、独立したスロット割り当てやプロファイル保存に対応。プレイ中のライブリマップも可能です。",
        },
        {
          title: "偶然じゃない、意図で調律した触覚",
          description:
            "Waveformパックはアクションごとの押下/解放パターンとフォールバックをサポート。デバイスが変わっても、触感が狙い通りに揃います。",
        },
        {
          title: "流れを切らないコア切替",
          description:
            "mGBA、SkyEmu、SameBoy、RusticoNES、TetaNES、LakeSnes、JGenesis、Aresを1つのランタイムモデルに統合し、一貫した挙動で扱います。",
        },
        {
          title: "手仕事のあるローカライズパック",
          description:
            "言語パックは即時ホットロード、名前空間のフォールバックも堅牢。コミュニティ/地域アップデートも、貼り付けではなくネイティブに感じられます。",
        },
        {
          title: "厳格に検証されるパックエコシステム",
          description:
            "ビジュアル、シェーダー、ローカライズ、オーディオ、ドキュメントの各パックは、単一の取り込みパイプラインで整合性チェックを行ってから有効化します。",
        },
      ],
      systemCoreMatrixTitle: "システム×コア マトリクス",
      systemCoreMatrixSubtitle: "密なルーティングマップ · システム別のコア優先設定を記憶",
      autoBadge: "自動",
      romClarityTitle: "ROM形式の明快さ",
      romClaritySubtitle: "拡張子マトリクス · 決定的なインポート挙動",
      bottomCtaKicker: "Retropaをダウンロード",
      bottomCtaTitleLines: ["名作の魅力を、", "いまの体験へ。"],
      bottomCtaDescription:
        "本物らしさと現代的な磨き込み、その両方が大事なら。Retropaはスクショ映えのためではなく、日常のプレイのために作りました。",
      bottomCtaDownloadLabel: "今すぐ入手",
      inspectCoreCatalogLabel: "コアカタログを見る",
    },
    cores: {
      heroBadge: "エミュレーターコアカタログ",
      heroTitleLines: ["Retropaを支えるコアは何か、", "各コアが何に対応するか、", "そしてプロジェクトの出典。"],
      heroDescription:
        "Retropaで採用しているコア、各コアの対応システム、上流プロジェクトへのリンクを、このページでまとめて確認できます。",
      downloadForIOSLabel: "iOS版を入手",
      backToHomepageLabel: "ホームへ戻る",
      standardsTitle: "互換性の基準",
      standardsRetroArchTitle: "RetroArchフィルターチェーン対応",
      standardsRetroArchDescription:
        ".slang / .slangpのフルパイプライン対応はランタイムの期待値であり、製品の能力表現にも一致させています。",
      standardsDeltaTitle: "Deltaスキン互換",
      standardsDeltaDescription:
        "Deltaスキンパッケージ互換は最優先の契約事項です。レイアウト安全なフォールバック挙動も含めて維持します。",
      standardsTraceabilityTitle: "信頼できる出典クレジット",
      standardsTraceabilityDescription:
        "コアとシステムのロゴは、元のプロジェクトと参照元に正しくクレジットしています。",
      coreLogoShowcaseTitle: "コアロゴ展示",
      systemLogoShowcaseTitle: "システムロゴ展示",
      coreCardsKicker: "コアカード",
      coreCardsTitle: "すべてのコアを、対応表とリンクで",
      romExtensionsLabel: "ROM拡張子",
      systemMatrixKicker: "システムマトリクス",
      systemMatrixTitle: "コンソール系統とROMカバー範囲",
      availableCoresLabel: "利用可能なコア",
      romCoverageLabel: "ROMカバー範囲",
    },
    seo: {
      home: {
        title: "Retropa for iOS · スキン/フィルター/触覚/マルチコア対応エミュレーター",
        description:
          "Retropa iOS 公式サイト：Delta スキン互換、ボタンスタイルのカスタマイズ、librashader フィルター、マルチコア切替、コントローラー設定、ローカライズパックを備えたプレミアムなレトロエミュレーター。",
        keywords:
          "Retropa,iOS エミュレーター,レトロゲーム,Delta スキン,deltaskin,librashader,slangp,コントローラー設定,触覚,ROM,マルチコア",
        ogType: "website",
        ogTitle: "Retropa for iOS · スキン/フィルター/触覚/マルチコア対応エミュレーター",
        ogDescription:
          "Delta スキン互換、フィルターパック、触覚カスタマイズ、システム別コア切替を備えた iOS 向けプレミアム体験をチェック。",
        twitterTitle: "Retropa for iOS",
        twitterDescription:
          "iOS でプレミアムなレトロ体験。スキン、フィルター、触覚、コントローラー設定、ローカライズパックに対応。",
        jsonLd: {
          featureList: [
            "Delta スキン互換 (.deltaskin)",
            "Flat2D / SVG2D / 3D スキンレンダリング",
            "コントローラーのスロット割り当てとシステム別プロファイル",
            "Core Haptics 波形パックとアクション別カスタマイズ",
            "librashader フィルターパイプライン（.slangp プリセット対応）",
            "ローカライズパック（ランタイム更新）",
          ],
        },
      },
      cores: {
        title: "Retropa エミュレーターコア · 対応システム/ROM カタログ",
        description:
          "Retropa が採用するエミュレーターコア、対応するゲーム機、ROM 拡張子マトリクス、上流 GitHub リポジトリを公式サイトで確認できます。",
        keywords:
          "Retropa コア,mGBA,SkyEmu,SameBoy,RusticoNES,TetaNES,LakeSnes,JGenesis,Ares,ROM,対応システム",
        ogType: "website",
        ogTitle: "Retropa エミュレーターコアカタログ",
        ogDescription:
          "エミュレーターコア、システム互換マトリクス、ROM カバー範囲、上流 GitHub リンクを一覧で。",
        twitterTitle: "Retropa エミュレーターコアカタログ",
        twitterDescription:
          "コア、対応システム、ROM 種別、ソースリポジトリをまとめた公式ページ。",
        jsonLd: {
          name: "Retropa エミュレーターコア",
        },
      },
      terms: {
        title: "Retropa 利用規約 · 公式法務ページ",
        description:
          "Retropa 利用規約（iOS アプリ）：利用条件、ライセンス、購入、インポートしたコンテンツに関する責任、連絡先情報を確認できます。",
        keywords:
          "Retropa 利用規約,利用条件,iOS 法務,ユーザー責任,ライセンス",
        ogType: "article",
        ogTitle: "Retropa 利用規約",
        ogDescription: "Retropa iOS アプリと公式サイトの利用規約（公式）。",
        twitterTitle: "Retropa 利用規約",
        twitterDescription: "Retropa iOS アプリと公式サイトの利用規約（公式）。",
        jsonLd: {},
      },
      privacy: {
        title: "Retropa プライバシーポリシー · 公式データ声明",
        description:
          "Retropa プライバシーポリシー：収集する情報の範囲、取り扱い、保管、共有、データに関して行使できる権利を説明します。",
        keywords:
          "Retropa プライバシー,プライバシーポリシー,データ取り扱い,ユーザー権利,iOS",
        ogType: "article",
        ogTitle: "Retropa プライバシーポリシー",
        ogDescription: "Retropa iOS アプリと公式サイトのプライバシー声明（公式）。",
        twitterTitle: "Retropa プライバシーポリシー",
        twitterDescription: "Retropa iOS アプリと公式サイトのプライバシー声明（公式）。",
        jsonLd: {},
      },
    },
  }
