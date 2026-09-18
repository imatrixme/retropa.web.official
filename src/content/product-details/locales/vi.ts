import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "Trình giả lập GBA cho iPhone và iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Mang các tệp tin .gba của riêng bạn vào Retropa. Hãy bắt đầu với một game chạy được, sau đó chọn giao diện máy cầm tay, gán tay cầm và tìm cách xử lý màn hình phù hợp với mình.",
    "imageAlt": "Hình ảnh sản phẩm Retropa với bố cục điều khiển máy cầm tay ở cả chiều dọc lẫn chiều ngang",
    "sections": [
      {
        "title": "Bắt đầu với một tệp tin game .gba",
        "body": "Retropa chạy các game GBA được hỗ trợ trên iPhone và iPad dùng iOS 18 trở lên. Ứng dụng tải miễn phí nhưng không kèm theo game hay tệp tin BIOS. Hãy dùng tệp tin game mà bạn có quyền sử dụng, và giữ bản gốc bên ngoài ứng dụng làm bản dự phòng.",
        "points": [
          "Game GBA thường dùng phần mở rộng .gba.",
          "Tệp tin .gb hoặc .gbc thuộc về GB hoặc GBC, không phải GBA.",
          "Đổi phần mở rộng tệp tin không chuyển game sang hệ máy khác."
        ]
      },
      {
        "title": "Nhập game từ ứng dụng Tệp tin",
        "body": "Hãy chắc chắn tệp tin đã có sẵn trên máy trong ứng dụng Tệp tin, chứ không chỉ hiện ra dưới dạng mục giữ chỗ trên đám mây. Mở mục nhập trong thư viện của Retropa và chọn game. Khi game đã xuất hiện trong thư viện, hãy mở lên và xác nhận hình ảnh, âm thanh cùng các tay cầm mặc định đều hoạt động trước khi tùy chỉnh bố cục."
      },
      {
        "title": "Chọn đúng bố cục máy cầm tay",
        "body": "Bố cục GBA cần chỗ cho nút điều hướng, A và B, các nút vai cùng Start và Select. Hãy thử cả các nút lẫn phần hình nền. Retropa hỗ trợ nhập .deltaskin, nhưng giao diện DS không thể thay thế bố cục GBA. Hãy kiểm tra xem gói đó có hỗ trợ hướng màn hình bạn dùng hay không.",
        "points": [
          "Giữ vùng màn hình game không bị che khuất ở cả hai hướng bạn dùng.",
          "Ghép nối tay cầm vật lý tương thích trong iOS, rồi kiểm tra lại việc gán nút trong Retropa.",
          "Giao diện cao cấp và bộ lọc nâng cao cần Plus; việc nhập tệp tin không mở khóa các tính năng trả phí."
        ]
      },
      {
        "title": "Chất LCD hay điểm ảnh sạch?",
        "body": "Hãy bắt đầu với hình ảnh gốc. Một lớp xử lý LCD nhẹ nhàng có thể gợi lại màn hình máy cầm tay, còn xử lý CRT lại tạo ra vẻ ngoài khác hẳn. Bộ lọc nâng cao của Retropa tính đến vùng xuất thực tế mà không đòi hỏi tỉ lệ nguyên. Bộ lọc thay đổi hình ảnh, chứ không thay đổi độ phân giải hay khả năng tương thích tệp tin của game."
      },
      {
        "title": "Khi việc nhập game hoặc lưu game không thành công",
        "body": "Trước tiên hãy kiểm tra phần mở rộng tệp tin, hệ máy đã chọn và thông báo lỗi cụ thể. Nếu ứng dụng Tệp tin không thể mở hoặc tải bản gốc, hãy hoàn tất bước đó rồi mới nhập lại. Với lỗi BIOS, hãy làm theo yêu cầu của nhân giả lập đã chọn; tệp neogeo.zip của arcade không phải BIOS của GBA. Bản lưu của chính game và trạng thái lưu của trình giả lập là hai thứ khác nhau: đừng đổi tên cái này thành cái kia, và hãy giữ bản dự phòng trước khi chuyển giữa các nhân giả lập hoặc ứng dụng.",
        "points": [
          "Hãy thử giao diện mặc định và một bộ lọc đơn giản khi cần khoanh vùng lỗi điều khiển hoặc hiển thị.",
          "Ghi lại phiên bản ứng dụng, hệ máy, nhân giả lập và thông báo lỗi để được hỗ trợ.",
          "Không đính kèm ROM thương mại hay tệp tin BIOS vào yêu cầu hỗ trợ."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Xem các tệp tin và nhân giả lập GBA được hỗ trợ"
  },
  "ds-emulator": {
    "title": "Trình giả lập DS cho iPhone và iPad",
    "label": "DS",
    "image": "library",
    "summary": "Nhập các game .nds của bạn vào Retropa và dành đủ chỗ cho cả hai màn hình. Hãy kiểm tra cảm ứng, tay cầm và yêu cầu về tệp tin trước khi chọn bố cục hay bộ lọc mới.",
    "imageAlt": "Hình ảnh sản phẩm Retropa thể hiện thư viện game và phần cài đặt trên iPhone",
    "sections": [
      {
        "title": "Chuẩn bị một game .nds",
        "body": "DS và GBA là hai hệ máy khác nhau. Retropa hỗ trợ tệp tin .nds cho DS trên iPhone và iPad dùng iOS 18 trở lên. Hãy dùng những tệp tin bạn có quyền sử dụng và giữ một bản dự phòng riêng. Ứng dụng không cung cấp ROM hay BIOS để tải về, và một tệp .gba không thể trở thành game DS chỉ bằng cách đổi tên."
      },
      {
        "title": "Nhập game và kiểm tra cả hai màn hình",
        "body": "Hãy tải tệp tin game về máy trong ứng dụng Tệp tin, rồi chọn nó từ mục nhập trong thư viện của Retropa. Mở game vừa nhập với bố cục mặc định. Kiểm tra cả hai vùng hiển thị và thử cảm ứng ở một đoạn game có dùng đến nó. Chỉ nhìn màn hình tiêu đề là chưa đủ để xác nhận rằng mọi thao tác nhập cần thiết đều làm được.",
        "points": [
          "Bắt đầu với hệ máy được nhận diện hoặc chọn cho tệp tin .nds.",
          "Làm theo mọi yêu cầu về BIOS hoặc firmware mà nhân giả lập đã cài báo ra.",
          "Giữ một bản sao của tệp tin gốc trong lúc tìm nguyên nhân lỗi."
        ]
      },
      {
        "title": "Dành đủ chỗ cho màn hình cảm ứng",
        "body": "Hai màn hình cần bố cục khác với máy cầm tay một màn hình. Hãy chọn giao diện DS hiển thị được cả hai màn hình cùng các nút cần thiết. Chiều dọc có thể cho hai màn hình xếp trên dưới tự nhiên; khả năng hỗ trợ chiều ngang tùy vào giao diện đã chọn. Hãy kiểm tra các vùng chạm nhỏ ở đúng kích thước bạn thường chơi, nhất là trên một chiếc iPhone nhỏ hơn."
      },
      {
        "title": "Tay cầm không thay thế mọi thao tác cảm ứng",
        "body": "Retropa hỗ trợ tay cầm ngoài tương thích và việc gán nút. Hãy ghép nối tay cầm với iOS rồi xác nhận các phép gán trong ứng dụng. Nút điều hướng và nút hành động trên tay cầm không tự động thay thế các tương tác cảm ứng của game. Hãy kiểm tra những tương tác đó trước khi quyết định chỉ chơi bằng tay cầm."
      },
      {
        "title": "Giữ cho lần chơi đầu thật đơn giản",
        "body": "Hãy xác nhận game và các thao tác nhập đều tương thích trước khi áp dụng một chuỗi shader phức tạp. Nếu hình ảnh hoặc nhịp khung hình thay đổi sau khi chọn bộ lọc, hãy quay lại một cấu hình đơn giản để so sánh. Thiết bị, nhân giả lập và kích thước đầu ra đều ảnh hưởng đến hiệu năng; hỗ trợ DS không phải là lời hứa rằng mọi game và mọi điện thoại đều cho kết quả giống nhau.",
        "points": [
          "Giao diện cao cấp và bộ lọc nâng cao cần Retropa Plus.",
          "Hãy giữ bản dự phòng cho bản lưu của game và trạng thái lưu; chúng không phải là định dạng tệp tin có thể hoán đổi cho nhau.",
          "Khi cần hỗ trợ, hãy nêu phiên bản ứng dụng, nhân giả lập đã chọn và thông báo lỗi cụ thể, chứ đừng gửi game hay tệp tin BIOS."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Xem các tệp tin và nhân giả lập DS được hỗ trợ"
  },
  "arcade": {
    "title": "Trình giả lập arcade cho iPhone và iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Chơi các tệp tin arcade CPS, Neo Geo, PGM và M92 được hỗ trợ trong Retropa, với điều khiển cảm ứng, tay cầm ngoài và bộ lọc CRT. Chơi arcade cần Plus; game và tệp tin BIOS không được kèm theo.",
    "imageAlt": "Hình ảnh sản phẩm Retropa thể hiện thư viện game và phần cài đặt",
    "sections": [
      {
        "title": "CPS, Neo Geo và bo mạch arcade",
        "body": "Retropa hỗ trợ nhiều dòng arcade, gồm CPS I, CPS II, CPS III, Neo Geo, PGM và M92. Hãy chọn game khớp với bo mạch và ROM set mà nhân giả lập đã cài yêu cầu. Việc hỗ trợ một dòng máy không bảo đảm mọi tệp lưu trữ đều chạy được.",
        "points": [
          "Xác nhận hệ máy trong ứng dụng trước khi chọn tệp tin.",
          "Chạy game arcade cần Retropa Plus.",
          "Retropa không kèm ROM thương mại hay tệp tin BIOS."
        ]
      },
      {
        "title": "Neo Geo arcade không phải Neo Geo Pocket",
        "body": "Game arcade Neo Geo và game máy cầm tay Neo Geo Pocket dùng hệ máy và tệp tin khác nhau. Với một game arcade báo thiếu BIOS Neo Geo, hãy mở mục BIOS arcade trong Retropa, nhập gói neogeo.zip cần thiết rồi thử lại game. ROM của Pocket hay một tệp ZIP đã đổi tên đều không thay thế được.",
        "points": [
          "Chỉ dùng tệp tin BIOS mà bạn có quyền sử dụng; Retropa không cung cấp bản tải về.",
          "Gói BIOS không thay thế dữ liệu ROM của game, bộ cha hay bộ clone còn thiếu.",
          "Hãy kiểm tra thông báo lỗi cụ thể và giữ nguyên tệp lưu trữ gốc trước khi thay đổi gì."
        ]
      },
      {
        "title": "Vì sao ZIP của arcade lại khác",
        "body": "ROM của máy cầm tay thường là một ảnh game duy nhất. Một set arcade có thể chứa nhiều chip ROM và phụ thuộc vào bộ cha hoặc BIOS. Đổi tên một tệp lưu trữ không liên quan thành .zip không làm nó trở nên tương thích. Hãy giữ nguyên tệp lưu trữ được cung cấp, trừ khi quy trình nhập yêu cầu rõ ràng là phải giải nén."
      },
      {
        "title": "Khi một game không khởi động được",
        "body": "Trước tiên hãy kiểm tra bo mạch đã chọn và thông báo lỗi mà Retropa hiển thị. Tiếp theo, xem set của bạn có đầy đủ không và các tệp BIOS hay bộ cha cần thiết có sẵn không. Chỉ riêng một tệp clone có thể không chứa đủ các tệp mà nhân giả lập cần. Đổi bộ lọc hay mua một giao diện khác đều không thể sửa được dữ liệu ROM còn thiếu.",
        "points": [
          "Giữ lại các tệp tin gốc trong lúc tìm nguyên nhân lỗi nhập game.",
          "Ghi lại phiên bản ứng dụng, hệ máy và thông báo lỗi hiển thị khi liên hệ hỗ trợ.",
          "Không gửi ROM thương mại hay tệp tin BIOS kèm yêu cầu hỗ trợ."
        ]
      },
      {
        "title": "Thiết lập cho lần chơi đầu tiên",
        "body": "Khi game đã khởi động, hãy xác định các nút xu, bắt đầu và hành động. Với tay cầm ngoài, hãy kiểm tra cả phép gán lẫn nhãn hiển thị trên màn hình. Hãy bắt đầu bằng một cấu hình hiển thị đơn giản; chỉ chọn xử lý CRT sau khi đã xác nhận game và tay cầm hoạt động đúng."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Xem danh mục hệ máy và nhân giả lập"
  },
  "delta-skins": {
    "title": "Nhập giao diện Delta trên iPhone và iPad",
    "label": "Giao diện",
    "image": "material",
    "summary": "Thay đổi phần điều khiển quanh game, chứ không chỉ hình nền. Retropa nhập được các gói .deltaskin và có bộ giao diện riêng cho iPhone và iPad.",
    "imageAlt": "Hình ảnh sản phẩm Retropa thể hiện giao diện điều khiển dọc và ngang bằng nhiều chất liệu khác nhau",
    "sections": [
      {
        "title": "Giao diện chính là một bố cục điều khiển",
        "body": "Màn hình game, nút điều hướng, nút hành động và các nút menu đều cần chỗ. Giao diện quy định vị trí của những thành phần này. Hãy chọn theo hệ máy bạn đang chơi và hướng màn hình bạn dùng, chứ đừng chỉ chọn theo màu sắc.",
        "points": [
          "Kiểm tra hệ máy mà gói hướng đến trước khi nhập.",
          "Khả năng hỗ trợ chiều dọc và chiều ngang tùy vào bố cục mà giao diện cung cấp.",
          "Một định dạng gói được hỗ trợ không bảo đảm mọi bố cục của bên thứ ba đều vừa với mọi thiết bị."
        ]
      },
      {
        "title": "Nhập một gói .deltaskin",
        "body": "Hãy giữ tệp tin giao diện gốc, mở mục nhập giao diện của Retropa và chọn gói từ ứng dụng Tệp tin. Sau khi nhập, hãy chọn nó cho hệ máy tương ứng. Khởi động một game và kiểm tra vùng màn hình, các nút điều hướng cùng từng nút hành động trước khi biến nó thành bố cục quen dùng.",
        "points": [
          "Dùng trọn gói .deltaskin, chứ không phải ảnh chụp màn hình của một giao diện.",
          "Nếu gói nhập không thành công, hãy kiểm tra định dạng và hệ máy mà nó hướng đến trước khi thử bố cục khác.",
          "Hãy quay lại một giao diện dùng được nếu các nút thiết yếu bị che khuất."
        ]
      },
      {
        "title": "Điều khiển cảm ứng và tay cầm vật lý",
        "body": "Retropa cũng hỗ trợ tay cầm ngoài tương thích và việc gán nút theo ý muốn. Hãy ghép nối tay cầm với iOS trước, rồi kiểm tra việc gán nút trong Retropa. Giao diện hiển thị và hồ sơ tay cầm phục vụ những mục đích khác nhau: đổi phần hình nền không thay thế việc kiểm tra các phép gán nút vật lý."
      },
      {
        "title": "Ranh giới giữa gói và việc mua",
        "body": "PackHub là nơi để xem các gói giao diện của Retropa. Giao diện cao cấp cần Plus; gói đã nhập không vượt qua bước kiểm tra quyền sử dụng. Hãy xem gói hiện hành và yêu cầu của từng gói trong ứng dụng trước khi mua. Khả năng tương thích với Delta nói về một định dạng tệp tin, chứ không phải mối liên hệ với dự án Delta."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Xem giao diện trên PackHub"
  },
  "crt-filters": {
    "title": "Bộ lọc CRT cho trình giả lập trên iPhone và iPad",
    "label": "Bộ lọc",
    "image": "filter",
    "summary": "Bộ lọc CRT và LCD nâng cao của Retropa thích ứng với vùng hiển thị thực tế mà không đòi hỏi tỉ lệ nguyên. Giữ được chất retro của màn hình trên mọi kích thước iPhone, bố cục iPad và mọi hướng màn hình.",
    "imageAlt": "Hình ảnh sản phẩm Retropa thể hiện việc chọn bộ lọc hiển thị và các hiệu ứng màn hình CRT",
    "sections": [
      {
        "title": "Chọn kiểu hiển thị, rồi chọn độ mạnh",
        "body": "Kiểu điểm ảnh gần nhất giữ ranh giới điểm ảnh gốc rõ ràng. Hiệu ứng CRT dùng đường quét, mặt nạ và đổ bóng viền; hiệu ứng LCD thêm cấu trúc điểm ảnh hoặc điểm ảnh phụ. Những lựa chọn này thay đổi cách hiển thị, chứ không thay đổi độ phân giải của game.",
        "points": [
          "Hãy bắt đầu bằng hình ảnh chưa qua bộ lọc để làm mốc so sánh.",
          "Kiểm tra cả chữ nhỏ, các cạnh sáng và vùng tối, chứ không chỉ màn hình tiêu đề.",
          "Đánh giá kết quả ở đúng kích thước và hướng màn hình bạn thường chơi."
        ]
      },
      {
        "title": "Không đòi hỏi tỉ lệ nguyên",
        "body": "Tỉ lệ nguyên ánh xạ mỗi điểm ảnh của game sang một số nguyên điểm ảnh hiển thị. Cách này hữu ích cho hình ảnh sắc nét kiểu điểm ảnh gần nhất, nhưng có thể để lại phần không gian trống. Bộ lọc nâng cao của Retropa tính đến vùng xuất thực tế, nên cấu trúc hiển thị không bị giới hạn ở bội số 2, 3 hay bất kỳ số nguyên nào khác. Bạn có thể giữ nguyên tỉ lệ khung hình của game trong khi dùng khung nhìn vừa với điện thoại hoặc giao diện.",
        "points": [
          "CRT V4 dựng lại độ phủ của chùm tia và lọc cấu trúc huỳnh quang theo phương pháp giải tích, dựa trên vùng phủ của điểm ảnh đầu ra.",
          "Trinitron dùng chùm tia quét tích phân và các hài của lưới khẩu độ được giới hạn băng tần.",
          "DMG lấy tích phân độ phủ của tế bào tinh thể lỏng thay vì chỉ lấy mẫu điểm trên một lưới."
        ]
      },
      {
        "title": "Không chỉ là một lớp đường quét phủ lên",
        "body": "Các cấu hình cơ bản CRT Lite, LCD Grid và Scanline mang lại cách xử lý hiển thị nhẹ nhàng hơn. Các cấu hình nâng cao mô phỏng nhiều đặc tính của chính màn hình hơn: độ rộng chùm tia, độ truyền qua của huỳnh quang, hay vật liệu tinh thể lỏng phản xạ. Lưới được lấy mẫu trực tiếp có thể trở nên không đều ở tỉ lệ không nguyên; việc lấy tích phân theo điểm ảnh đầu ra giúp những chi tiết không thể phân giải hòa trộn tự nhiên hơn. Đây không phải là khẳng định rằng mọi bộ lọc thông thường đều cần tỉ lệ nguyên, cũng không phải bảo đảm rằng mọi thiết bị và cấu hình sẽ không có lỗi hiển thị."
      },
      {
        "title": "Phần so sánh trên trình duyệt cho thấy điều gì",
        "body": "Phần xem trước trên tivi trình bày các bộ lọc cơ bản cùng CRT V4, Trinitron V1 và DMG dựa trên công thức gốc. Các chế độ nâng cao áp dụng một phần công thức gốc, bao gồm việc lấy tích phân theo vùng phủ điểm ảnh, với cùng một đường cong hiển thị. Trình kết xuất trên web bỏ qua hiện tượng lưu ảnh theo thời gian, toàn bộ chuỗi tỏa sáng nhiều lượt và quản lý màu gốc. Nó minh họa các đặc tính hiển thị, chứ không phải kết quả Metal giống hệt từng điểm ảnh hay cảnh chơi thật."
      },
      {
        "title": "Nhập cấu hình shader của RetroArch",
        "body": "Một cấu hình .slangp có thể tham chiếu nhiều lượt shader, nhiều họa tiết và nhiều giá trị tham số. Hãy giữ những tệp phụ thuộc đó đi cùng nhau khi nhập. Chỉ riêng một tệp cấu hình có thể chưa đầy đủ; tệp .slang mô tả một shader chứ không mô tả cả một bộ sưu tập.",
        "points": [
          "Hãy dùng những gói được thiết kế cho quy trình shader được hỗ trợ.",
          "Nếu một cấu hình không tải được, hãy kiểm tra các tệp được tham chiếu và khả năng tương thích trước khi thay đổi game.",
          "Hãy thử một cấu hình nhẹ hơn nếu chuỗi phức tạp ảnh hưởng đến nhịp khung hình hoặc mức tiêu thụ pin."
        ]
      },
      {
        "title": "Chất lượng hình ảnh đi kèm chi phí hiệu năng",
        "body": "Một bộ lọc nhiều lượt có thể cần nhiều công việc GPU hơn so với hình ảnh dùng điểm ảnh gần nhất. Hiệu năng phụ thuộc vào thiết bị, nhân giả lập, độ phân giải đầu ra và cấu hình. Retropa không hứa rằng mọi shader đã nhập đều chạy tốt như nhau trên mọi chiếc iPhone. Bộ lọc nâng cao cần Plus; hãy xác nhận các lựa chọn hiện có trong ứng dụng."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Xem bộ lọc trên PackHub"
  }
}
