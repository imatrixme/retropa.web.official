import type { Locale } from "@/i18n/locales"

/**
 * The Retropa Premium filter catalog as shipped in App 2.3.2, shown as stills
 * rendered offline by the native Metal filters (tools/RetropaFilterDebugger,
 * `--suite showcase`). No filter code ships to the browser. Descriptions follow
 * each preset's in-app technical note; names drop the "Premium" suffix, and a
 * console trademark in one name is replaced by a plain description.
 */
export type FilterGroup = "display" | "museum" | "lab"
type Text = { en: string; "zh-Hans": string; ja: string }
export type GalleryFilter = { id: string; name: string; group: FilterGroup; fixture: "gba" | "gb" | "vector"; text: Text }

const f = (id: string, name: string, group: FilterGroup, en: string, zh: string, ja: string, fixture: GalleryFilter["fixture"] = "gba"): GalleryFilter =>
  ({ id: `retropa-${id}`, name: `Retropa ${name}`, group, fixture, text: { en, "zh-Hans": zh, ja } })

export const galleryFilters: GalleryFilter[] = [
  // CRT, analog and handheld displays
  f("crt-v4", "CRT V4", "display", "A consumer tube rebuilt from how the beam actually lands on each output pixel: round scanlines, a soft glow and a grille that never shimmers at odd sizes.", "按电子束落在每个输出像素上的真实范围重建的家用显像管：圆润的扫描线、柔和的辉光，任何尺寸下栅格都不闪。", "電子ビームが各出力ピクセルに当たる範囲から組み立てた家庭用ブラウン管。丸みのある走査線とやわらかな光、どんなサイズでもちらつかないグリル。"),
  f("trinitron-v1", "Trinitron V1", "display", "Aperture-grille stripes, bright highlights that bloom sideways and a phosphor texture that stays stable in motion.", "阴栅条纹、向两侧晕开的高光，运动中依然稳定的荧光颗粒。", "アパーチャーグリルの縦縞、横ににじむハイライト、動いても崩れない蛍光体の質感。"),
  f("trinitron-composite", "Trinitron Composite", "display", "A grille tube fed through a composite cable: softer colour edges, faint dot crawl and the warmth of a living-room set.", "经复合视频线接入的阴栅显像管：色彩边缘更柔、若隐若现的点爬，客厅电视的温度。", "コンポジット接続のグリル管。色の境目はやわらかく、かすかなドットクロール、リビングのテレビの温かさ。"),
  f("trinitron-studio-800", "Trinitron Studio 800", "display", "An 800-line professional monitor: razor-straight scanlines, tight convergence and colour you could grade a broadcast with.", "800 线专业监视器：笔直的扫描线、精准的会聚，色彩准到能拿来调广播节目。", "800 本の業務用モニター。まっすぐな走査線、ぴたりと合ったコンバージェンス、放送の色合わせに使える発色。"),
  f("trinitron-reference-1000", "Trinitron Reference 1000", "display", "A 1000-line reference monitor: the finest grille in the set, almost invisible until you lean in, with deep, clean blacks.", "1000 线参考监视器：全系列最细的栅格，凑近才看得见，黑位深而干净。", "1000 本のリファレンスモニター。シリーズでいちばん細いグリルは顔を近づけてやっと見える。黒は深く澄んでいる。"),
  f("fd-trinitron", "FD Trinitron", "display", "The flat-face consumer set of the late CRT years: a flat screen, sharp focus across the whole picture and a crisp high-scan look.", "显像管末期的平面家用电视：纯平屏、从中心到边角都清晰对焦，高扫描的利落观感。", "ブラウン管末期のフラット型テレビ。平らな画面、隅まで合ったピント、ハイスキャンのくっきりした見た目。"),
  f("trinitron-multiscan", "Trinitron Multiscan", "display", "A precision desktop monitor with wide analog bandwidth: fine grille, sharp text and pixels that keep their edges.", "高带宽的精密桌面显示器：细密的栅格、锐利的文字，像素边缘清清楚楚。", "帯域の広い精密デスクトップモニター。細かなグリル、くっきりした文字、エッジを保つピクセル。"),
  f("arcade-p22", "Arcade P22", "display", "A 15 kHz arcade tube with coarse phosphor triads: fat scanlines, saturated colour and the punch of a cabinet screen.", "15 kHz 街机显像管，荧光三元组更粗：扫描线厚实、色彩饱和，街机柜屏幕的冲击力。", "15 kHz のアーケード管。粗めの蛍光体トライアド、太い走査線、飽和した色、筐体画面の迫力。"),
  f("vector-crt", "Vector CRT", "display", "Glowing lines drawn directly by the beam, with a bright flash and a slower afterglow, for vector-drawn arcade games.", "由电子束直接画出的发光线条，先亮闪后余辉，专为矢量绘制的街机游戏准备。", "ビームが直接描く光の線。明るい閃光のあとにゆっくり残る残光。ベクター描画のアーケード向け。", "vector"),
  f("brick-dmg", "Brick DMG", "display", "The original green brick: four shades of liquid crystal, cells that bleed slightly into their neighbours and a trail when things move.", "初代绿屏砖头机：四阶液晶，像素格会轻轻串到相邻格，画面移动时拖出残影。", "初代の緑のレンガ。4 階調の液晶、隣へ少しにじむセル、動くと残る尾。", "gb"),
  f("brick-pocket", "Brick Pocket", "display", "The slimmer grey-screen pocket model: a quieter grid, better contrast and liquid crystal that keeps up.", "更薄的灰屏口袋版：网格更含蓄、对比度更好，液晶反应也跟得上。", "薄型のグレー画面モデル。控えめなグリッド、上がったコントラスト、追従の速い液晶。", "gb"),
  f("brick-light", "Brick Light", "display", "The backlit version: cyan-green glow leaking through the gaps between pixels, playable in the dark.", "带背光的版本：青绿色的光从像素缝隙里透出来，黑暗中也能玩。", "バックライト版。ピクセルの隙間からもれる青緑の光。暗い場所でも遊べる。", "gb"),
  f("home-computer-crt", "Home Computer CRT", "display", "A home computer plugged into the family TV: a low-bandwidth signal, soft edges and the gentle blur of a consumer tube.", "接在家里电视上的家用电脑：低带宽信号、柔和的边缘，家用显像管特有的轻微模糊。", "家庭用テレビにつないだホームコンピューター。帯域の狭い信号、やわらかなエッジ、家庭用管のほのかなぼけ。"),
  f("pal-consumer-tv", "PAL Consumer TV", "display", "A European living-room set: PAL colour that averages between lines and the rounder, calmer look of a consumer tube.", "欧洲客厅电视：PAL 制式在相邻行之间平均色彩，家用显像管更圆润、更安静的观感。", "ヨーロッパの家庭用テレビ。行ごとに平均化される PAL の色と、家庭用管の丸く落ち着いた見た目。"),
  f("ntsc-rf-tv", "NTSC RF TV", "display", "A console on channel 3 through the antenna input: faint interference, colour bleeding into fine detail and all the nostalgia that comes with it.", "从天线口接到 3 频道的主机：淡淡的干扰、色彩渗进细节里，以及随之而来的全部怀旧感。", "アンテナ端子から 3 チャンネルにつないだゲーム機。かすかな干渉、細部ににじむ色、そして懐かしさのすべて。"),
  f("interlaced-crt", "Interlaced CRT", "display", "Alternating fields that weave into one picture, with a trace of the previous field left behind.", "奇偶场交替织成一幅画面，上一场的痕迹还若隐若现。", "交互に描かれるフィールドが一枚に織り合わされ、前のフィールドの名残がうっすら残る。"),
  f("vhs", "VHS", "display", "A tape recording: smeared colour, wobbling time base, the occasional dropout and the softness of magnetic tape.", "录像带里的画面：色彩拖尾、时基摇晃、偶发的掉磁，以及磁带特有的柔。", "ビデオテープの映像。にじむ色、揺れるタイムベース、ときおりのドロップアウト、テープならではのやわらかさ。"),
  f("game-gear-stn", "Game Gear STN", "display", "A backlit colour STN handheld: saturated colours on a glowing panel and the slow response that smears fast motion.", "带背光的彩色 STN 掌机：发光面板上饱和的色彩，反应较慢，快速运动会拖影。", "バックライト付きのカラー STN 携帯機。光るパネルの鮮やかな色と、速い動きがにじむ遅めの応答。"),
  f("lynx-stn", "Lynx STN", "display", "A warm colour STN panel with gentle diffusion and a balanced response, softer than its rivals.", "暖色调彩色 STN 面板，轻微的漫射，反应均衡，比同期对手更柔和。", "暖かみのあるカラー STN パネル。ほどよい拡散とバランスのよい応答で、ライバルよりやわらか。"),
  f("cga-composite", "CGA Composite", "display", "The trick of early PC graphics: a pixel clock and a colour carrier that interfere to paint colours the palette never had.", "早期 PC 图形的妙招：像素时钟与色彩载波相互干涉，画出调色板里本来没有的颜色。", "初期 PC グラフィックスの裏技。ピクセルクロックとカラーキャリアの干渉が、パレットにない色を生む。"),
  f("analog-s-video", "Analog S-Video", "display", "Separate brightness and colour over S-Video: a clean analog tube picture without composite fringing.", "S 端子分离传输亮度与色度：干净的模拟显像管画面，没有复合视频的彩边。", "S 端子で輝度と色を分けて伝送。コンポジットの色にじみがない、澄んだアナログ管の映像。"),
  f("amber-terminal", "Amber Terminal", "display", "An amber monochrome phosphor with slow decay and a warm halo around every lit pixel.", "琥珀色单色荧光屏，余辉缓慢，每个亮点周围都有温暖的光晕。", "琥珀色のモノクロ蛍光体。ゆっくり消える残光と、光る点のまわりの温かなハロー。"),
  f("green-terminal", "Green Terminal", "display", "A green monochrome phosphor with crisp text and a restrained afterglow.", "绿色单色荧光屏，文字清晰，余辉克制。", "緑のモノクロ蛍光体。くっきりした文字と控えめな残光。"),
  // Display museum
  f("shadow-mask-delta", "Shadow-Mask Delta", "museum", "Three electron guns in a triangle behind a shadow mask: the round dot triads of classic colour TV.", "三支电子枪呈三角形排列在荫罩后面：经典彩电那种圆点三元组。", "三角形に並ぶ三本の電子銃とシャドウマスク。昔のカラーテレビの丸いドットトライアド。"),
  f("slot-mask-inline", "Slot-Mask Inline", "museum", "In-line guns and vertical phosphor slots: the brick-pattern mask of countless consumer sets.", "直列电子枪与竖向荧光槽：无数家用电视上那种砖纹荫罩。", "インライン電子銃と縦長の蛍光スロット。数えきれない家庭用テレビのレンガ模様のマスク。"),
  f("vfd-cyan", "VFD Cyan", "museum", "A vacuum fluorescent display: cyan-green segments that glow from within, with a faint filament shimmer.", "真空荧光显示屏：从内部发光的青绿色段，灯丝隐约闪动。", "蛍光表示管。内側から光る青緑のセグメントと、かすかなフィラメントのきらめき。"),
  f("tfel-amber", "TFEL Amber", "museum", "A thin-film electroluminescent panel: crisp amber cells that emit their own light, as in rugged industrial displays.", "薄膜电致发光面板：会自己发光的清晰琥珀色像素，像坚固的工业显示屏。", "薄膜 EL パネル。自ら発光するくっきりした琥珀色のセル。頑丈な産業用ディスプレイのよう。"),
  f("cstn-color", "CSTN Color", "museum", "An early passive-matrix colour LCD: rows and columns bleed into each other and colours arrive a little late.", "早期无源矩阵彩色液晶：行列之间互相串扰，色彩总是慢半拍。", "初期のパッシブマトリクス式カラー液晶。行と列が干渉し合い、色が少し遅れてやってくる。"),
  f("3lcd-projector", "3LCD Projector", "museum", "Three LCD panels projected onto a screen: a visible screen-door grid and slightly misaligned colours.", "三片液晶投到幕布上：看得见的纱窗网格，色彩略有错位。", "3 枚の液晶をスクリーンに投写。見える網目と、わずかにずれた色。"),
  f("storage-tube", "Storage Tube", "museum", "A direct-view storage tube that keeps what was drawn: bright traces that linger until they are erased.", "直视存储管会记住画过的内容：明亮的轨迹一直留着，直到被擦除。", "描いたものを保持するストレージ管。消去されるまで残り続ける明るい軌跡。"),
  f("three-tube-crt-projector", "Three-Tube CRT Projector", "museum", "Red, green and blue tubes projected together: optical halo and convergence that drifts toward the corners.", "红绿蓝三支显像管一起投射：光学光晕，越往边角会聚越偏。", "赤・緑・青の三本の管を重ねて投写。光学的なハローと、隅へ行くほどずれるコンバージェンス。"),
  f("dila-lcos-projector", "D-ILA LCoS Projector", "museum", "Reflective liquid crystal projection with a high fill factor: almost no gaps between pixels and a smooth, film-like picture.", "反射式液晶投影，开口率极高：像素间几乎没有缝隙，画面顺滑如胶片。", "開口率の高い反射型液晶プロジェクション。ピクセル間の隙間がほとんどない、なめらかでフィルムのような映像。"),
  f("p7-radar-crt", "P7 Radar CRT", "museum", "A two-layer radar phosphor: a blue flash on impact and a long yellow-green afterglow.", "双层雷达荧光粉：击中时蓝色一闪，随后是长长的黄绿色余辉。", "二層のレーダー用蛍光体。当たった瞬間の青い閃光と、長く続く黄緑の残光。"),
  f("led-matrix", "LED Matrix", "museum", "A multiplexed red-and-green LED board: round lit dots behind a diffusing lens.", "多路扫描的红绿 LED 点阵板：漫射透镜后面一颗颗圆形亮点。", "マルチプレックス駆動の赤緑 LED ボード。拡散レンズ越しの丸い光点。"),
  f("memory-lcd", "Memory LCD", "museum", "A reflective memory-in-pixel panel: paper-like contrast under daylight and pixels that hold their state.", "反射式像素内存储液晶：日光下有纸一样的对比度，像素会保持自己的状态。", "反射型のメモリー液晶。日光の下で紙のようなコントラスト、状態を保持するピクセル。"),
  // Experimental visual lab
  f("dither-lab", "Dither Lab", "lab", "Reduces the picture to a small palette with ordered dithering that stays locked in place as things move.", "把画面压到小调色板，用有序抖动表现层次，画面移动时抖动图案也不乱跳。", "小さなパレットに減色し、秩序ディザで階調を表現。動いても模様が暴れない。"),
  f("ascii-terminal", "ASCII Terminal", "lab", "Rebuilds the picture from text-mode glyphs whose density follows the brightness underneath.", "用文本模式字符重建画面，字符疏密跟着底下的亮度走。", "テキストモードの文字で画面を再構成。文字の密度が下の明るさに合わせて変わる。"),
  f("holographic-scan", "Holographic Scan", "lab", "Spectral interference bands sweep across the picture with a quiet holographic shimmer.", "光谱干涉条纹扫过画面，带着安静的全息微光。", "スペクトル干渉の帯が画面を横切り、静かなホログラムのきらめきを添える。"),
  f("rgb-prism", "RGB Prism", "lab", "Splits bright areas into red, green and blue and recombines them like light through a prism.", "把亮部拆成红绿蓝三束再重新合成，像光穿过棱镜。", "明るい部分を赤・緑・青に分け、プリズムを通した光のように組み直す。"),
  f("film-projector", "Film Projector", "lab", "The game on a cinema screen: gate weave, grain, halation around highlights and a restrained flicker.", "把游戏放上电影银幕：片门晃动、胶片颗粒、高光周围的晕光，以及克制的闪烁。", "映画館のスクリーンに映したゲーム。ゲートの揺れ、粒子、ハイライトのハレーション、控えめなちらつき。"),
  f("datamosh-feedback", "Datamosh Feedback", "lab", "Blocks of the previous frame carry their colour into the next, in the style of broken video compression.", "上一帧的色块带着颜色流进下一帧，像视频压缩坏掉时的样子。", "前のフレームのブロックが色を引き連れて次のフレームへ流れ込む。壊れた映像圧縮のような表現。"),
  f("pixel-sort", "Pixel Sort", "lab", "Sorts pixels by brightness inside small tiles, turning the scene into streaks of ordered light.", "在小块区域内按亮度给像素排序，把场景变成一道道有序的光带。", "小さなタイルの中でピクセルを明るさ順に並べ替え、光の筋に変える。"),
  f("thermal-palette", "Thermal Palette", "lab", "Maps brightness onto a thermal-camera palette while keeping local contrast readable.", "把亮度映射成热成像调色板，同时保持局部对比度清晰可读。", "明るさをサーモカメラのパレットに置き換えつつ、局所的なコントラストは読み取れるように保つ。"),
  f("ink-wash", "Ink Wash", "lab", "An ink painting on rough paper: edge-aware brush tones and a steady paper grain.", "粗纸上的水墨画：沿边缘走的笔墨浓淡，纸纹稳定不乱跳。", "ざらついた紙の水墨画。輪郭に沿った墨の濃淡と、動かない紙の質感。"),
  f("event-camera", "Event Camera", "lab", "Shows only what changes, the way a neuromorphic event camera sees, with a short fading trail.", "只显示发生变化的部分，就像事件相机看世界，并带一段渐隐的尾迹。", "変化した部分だけを映す、イベントカメラのような見え方。短く消えていく尾を残す。"),
  f("woodcut-engraving", "Woodcut Engraving", "lab", "Engraved hatching that follows the shapes of the scene, like an old woodcut print.", "顺着画面形状刻出的排线，像一幅老木刻版画。", "場面の形に沿って彫られたハッチング。古い木版画のよう。"),
  f("photocopy-toner", "Photocopy Toner", "lab", "A photocopy of a photocopy: harsh exposure, spreading toner and fixed speckle.", "复印件的复印件：生硬的曝光、晕开的碳粉和固定的斑点。", "コピーのコピー。きつい露光、広がるトナー、動かない斑点。"),
  f("dct-databending", "DCT Databending", "lab", "Corrupts the picture at the level of compression blocks: lost detail and colour that slips out of place.", "在压缩块层面“弄坏”画面：细节丢失，颜色错位。", "圧縮ブロックの単位で画像を壊す。消えるディテールとずれる色。"),
  f("paper-cut", "Paper Cut", "lab", "Layers of cut paper stacked by tone, each casting a small shadow on the one below.", "按明暗分层的剪纸，一层层叠起来，每层都在下一层投下小小的影子。", "明暗ごとに重ねた切り紙。それぞれが下の層に小さな影を落とす。"),
  f("watercolor", "Watercolor", "lab", "Pigment that bleeds and pools at the edges, on textured watercolour paper.", "颜料晕开、在边缘积聚，画在有纹理的水彩纸上。", "にじみ、縁にたまる顔料。凹凸のある水彩紙の上に。"),
  f("oil-impasto", "Oil Impasto", "lab", "Thick brush strokes that follow the direction of the image, with a restrained sense of relief.", "顺着画面走向的厚重笔触，带着克制的立体感。", "画像の流れに沿った厚い筆致と、控えめな立体感。"),
  f("slit-scan", "Slit Scan", "lab", "Each part of the picture is taken from a slightly different moment, stretching motion across the frame.", "画面的每一部分取自稍有不同的时刻，把运动拉伸到整幅画面上。", "画面の各部分をわずかに違う瞬間から取り出し、動きを画面全体に引き伸ばす。"),
  f("stained-glass", "Stained Glass", "lab", "The scene cut into cells of coloured glass held together by dark lead lines.", "把画面切成一块块彩色玻璃，用深色铅条拼接在一起。", "場面を色ガラスのセルに切り分け、黒い鉛の線でつなぐ。"),
  f("cross-stitch", "Cross Stitch", "lab", "Every pixel becomes a stitched cross of thread on fabric.", "每个像素都变成布面上一针一线绣出来的十字。", "ピクセルひとつひとつが布に刺した糸のクロスに。"),
  f("rolling-shutter", "Rolling Shutter", "lab", "Reads the picture line by line over time, so fast motion leans and wobbles like a phone camera.", "逐行随时间读出画面，快速运动会像手机摄像头一样倾斜、摇晃。", "画面を一行ずつ時間をずらして読み出す。速い動きはスマホカメラのように傾き、揺れる。"),
  f("long-exposure", "Long Exposure", "lab", "Bright moving things leave light trails that slowly fade, like a long photographic exposure.", "明亮的运动物体留下慢慢消退的光轨，像长时间曝光的照片。", "明るく動くものが、長時間露光の写真のようにゆっくり消える光跡を残す。"),
  f("reaction-diffusion", "Reaction Diffusion", "lab", "Organic patterns grown from the picture, like coral or animal markings.", "从画面里“长”出来的有机图案，像珊瑚或动物斑纹。", "画面から育つ有機的な模様。サンゴや動物の斑点のよう。"),
  f("low-poly-mosaic", "Low Poly Mosaic", "lab", "The scene rebuilt from stable triangles of flat colour.", "用稳定的纯色三角形重新拼出整个画面。", "安定したフラットカラーの三角形で場面を組み直す。"),
  f("cyanotype", "Cyanotype", "lab", "A blueprint photograph: Prussian-blue tones on paper.", "蓝晒照片：纸上的普鲁士蓝色调。", "青写真。紙の上のプルシアンブルー。"),
  f("virtual-boy-scanned-led", "Scanned LED", "lab", "A scanned red LED display: a single column of light swept across by a mirror, leaving a brief persistence.", "扫描式红色 LED 显示：一列光由镜面扫过整块屏幕，留下短暂的余辉。", "走査型の赤色 LED 表示。一列の光を鏡で振り、短い残像を残す。"),
  f("pinball-dmd", "Pinball DMD", "lab", "The amber dot-matrix display from a pinball backbox, with its brightness levels flickering in.", "弹珠台背板上的琥珀色点阵屏，亮度层次一闪一闪地出现。", "ピンボールのバックボックスにある琥珀色のドットマトリクス表示。明るさの段階がちらちらと現れる。"),
  f("plato-plasma", "PLATO Plasma", "lab", "Orange gas-plasma cells behind glass, as on early terminals.", "玻璃后面橙色的气体等离子单元，就像早期终端。", "ガラス越しのオレンジ色のプラズマセル。初期の端末のよう。"),
  f("plasma-subfield", "Plasma Subfield", "lab", "A plasma panel's sub-field drive, which shows false contours in moving gradients.", "等离子面板的子场驱动，运动中的渐变会出现伪轮廓。", "プラズマパネルのサブフィールド駆動。動くグラデーションに疑似輪郭が出る。"),
  f("dlp-rainbow", "DLP Rainbow", "lab", "Colour-sequential projection: still images stay clean while fast motion splits into rainbow fringes.", "色序投影：静止画面干净，快速运动时会拆出彩虹边。", "色順次方式の投写。静止画はきれいなまま、速い動きは虹色のふちに分かれる。"),
]

export const filterGroupCopy: Record<FilterGroup, Text> = {
  display: { en: "CRT, analog and handheld displays", "zh-Hans": "显像管、模拟信号与掌机屏", ja: "ブラウン管・アナログ・携帯機" },
  museum: { en: "Display museum", "zh-Hans": "显示技术博物馆", ja: "ディスプレイ・ミュージアム" },
  lab: { en: "Experimental visual lab", "zh-Hans": "实验视觉工坊", ja: "実験的ビジュアルラボ" },
}

export type GalleryCopy = {
  title: string; intro: string; source: string; detail: string; close: string; filtered: string; original: string; count: string; all: string
}
const copy: Partial<Record<Locale, GalleryCopy>> = {
  en: {
    title: "Every Retropa filter, up close.",
    intro: "Sixty-four native filters, each rendered by the app's own Metal pipeline from the same frame of licensed homebrew. Open one to see the full picture and a pixel-for-pixel close-up of its texture.",
    source: "Stills rendered offline by Retropa's native Metal filters at 6× from Metal Warrior 4 (GBA) and uCity (Game Boy). The app renders them live, with motion effects these stills cannot show.",
    detail: "1:1 close-up", close: "Close", filtered: "Filtered", original: "Original", count: "filters", all: "See all 64 filters",
  },
  "zh-Hans": {
    title: "Retropa 每一款滤镜，凑近看。",
    intro: "六十四款原生滤镜，全部由 App 自己的 Metal 管线，对同一帧授权 Homebrew 画面渲染而成。点开任意一款，可以看完整画面和按像素 1:1 放大的质感细节。",
    source: "静帧由 Retropa 原生 Metal 滤镜以 6 倍离线渲染，画面取自 Metal Warrior 4（GBA）与 uCity（Game Boy）。App 内为实时渲染，还有这些静帧无法呈现的动态效果。",
    detail: "1:1 细节", close: "关闭", filtered: "滤镜后", original: "原图", count: "款滤镜", all: "查看全部 64 款滤镜",
  },
  ja: {
    title: "Retropa のすべてのフィルターを、間近で。",
    intro: "64 種類のネイティブフィルターを、アプリと同じ Metal パイプラインで、ライセンス確認済みの Homebrew の同じ一コマから描き出しました。ひとつ開くと、全体像とピクセル等倍のクローズアップで質感を確かめられます。",
    source: "Retropa のネイティブ Metal フィルターで 6 倍にオフライン描画した静止画。素材は Metal Warrior 4（GBA）と uCity（ゲームボーイ）。アプリ内ではリアルタイムに描画され、静止画では伝わらない動きの効果も加わります。",
    detail: "等倍クローズアップ", close: "閉じる", filtered: "フィルター", original: "オリジナル", count: "種類", all: "64 種類すべてを見る",
  },
}
export const galleryCopy = (locale: Locale): GalleryCopy => copy[locale] ?? copy.en!
export const filterText = (filter: GalleryFilter, locale: Locale) => filter.text[locale as keyof Text] ?? filter.text.en
export const filterImage = (id: string) => ({ full: `/media/filters/${id}.webp`, macro: `/media/filters/${id}-macro.webp` })
