const PARTS = [
  {id:1,title:'Bản chất của điện',short:'Hiểu từ gốc',desc:'Từ hạt mang điện đến điện xoay chiều và công suất.',color:'#e49a2b',icon:'atom',range:[1,5]},
  {id:2,title:'Mạch điện trong nhà',short:'Hiểu đường điện',desc:'L, N, PE, mạch kín, công tắc, ổ cắm và điện 3 pha.',color:'#17a68d',icon:'route',range:[6,10]},
  {id:3,title:'Hệ thống điện gia đình',short:'Hiểu toàn hệ thống',desc:'Cáp điện, tủ điện, aptomat và cách phân phối tải.',color:'#618cf2',icon:'house',range:[11,16]},
  {id:4,title:'An toàn & tìm lỗi',short:'Hiểu sự cố',desc:'Điện giật, rò điện, cháy xém và chẩn đoán.',color:'#e87959',icon:'shield',range:[17,21]},
  {id:5,title:'Dụng cụ & kỹ năng',short:'Hiểu công việc',desc:'Đo kiểm, đọc sơ đồ và công việc lắp đặt có kiểm soát.',color:'#a57ad9',icon:'tool',range:[22,27]},
  {id:6,title:'Làm chủ ngôi nhà',short:'Tổng hợp thực tế',desc:'Đọc một căn hộ mẫu, suy luận và bảo trì.',color:'#2b9bb3',icon:'check',range:[28,30]}
];
const LESSONS = [
{
 id:1,part:1,title:'Điện là gì và đến nhà bằng cách nào?',time:16,diagram:'grid',subtitle:'Nhìn toàn cảnh từ nhà máy điện đến bóng đèn trên trần.',
 goal:'Phân biệt điện tích, dòng điện, điện năng và các chặng của hệ thống cấp điện.',
 sections:[
 {h:'Bức tranh lớn: điện không sinh ra trong ổ cắm',p:'Ổ cắm là một điểm lấy điện trong mạng lưới lớn. Nhà máy chuyển năng lượng từ nước, hơi nước, gió hoặc ánh sáng thành điện năng. Lưới truyền tải đưa năng lượng đi xa, trạm biến áp thay đổi cấp điện áp, lưới phân phối đưa điện đến công trình. Bên trong nhà, công tơ đo điện năng sử dụng và tủ điện chia thành nhiều mạch nhánh.\n\nĐừng hình dung nhà máy gửi những electron riêng của mình chạy hàng chục kilômét vào chiếc quạt nhà mày. Electron đã có sẵn trong dây dẫn kim loại; nguồn điện tạo ra điện trường khiến điện tích phản ứng và năng lượng được truyền qua hệ thống.'},
 {h:'Điện tích và dòng điện khác nhau thế nào?',p:'Vật chất cấu tạo từ nguyên tử. Proton mang điện tích dương, electron mang điện tích âm. Trong kim loại, một số electron có thể chuyển động tương đối tự do. Khi điện tích chuyển động có hướng qua một tiết diện của dây dẫn, ta gọi đó là dòng điện.\n\nĐiện tích là thuộc tính của hạt; dòng điện là tốc độ điện tích đi qua một tiết diện. Vì vậy, có điện tích chưa chắc đã có dòng điện liên tục: một vật bị nhiễm điện tĩnh có điện tích nhưng không phải lúc nào cũng tạo ra một dòng điện cấp cho thiết bị.'},
 {h:'Bốn mắt xích trong căn hộ',p:'Hãy tưởng tượng hành trình từ lưới điện → đầu cấp điện của tòa nhà → công tơ/tủ phân phối → mạch chiếu sáng → bóng đèn. Mỗi mắt xích có nhiệm vụ riêng: cung cấp năng lượng, đo đếm, điều khiển hoặc bảo vệ. Một bóng đèn không sáng có thể do chính bóng, công tắc, dây dẫn, thiết bị bảo vệ hoặc mất nguồn từ phía trước.\n\nCách suy nghĩ đúng là hỏi “năng lượng bị gián đoạn ở mắt xích nào?” thay vì đoán ngay “ổ cắm hỏng”.'},
 {h:'Một nguồn điện 220 V có nghĩa là gì?',p:'Điện áp giữa hai điểm thể hiện chênh lệch điện thế. Với nguồn xoay chiều 220 V danh định, con số 220 V thường là giá trị hiệu dụng (RMS), không phải điện áp tức thời cố định. Mạch cấp điện một pha thường dùng dây pha L và dây trung tính N; dây bảo vệ PE có nhiệm vụ riêng. Mày sẽ học kỹ ba dây này ở bài 6.'}
 ],takeaways:['Ổ cắm chỉ là giao diện kết nối vào hệ thống lớn.','Dòng điện là chuyển động có hướng của điện tích.','Muốn tìm lỗi phải suy luận từ nguồn đến tải.'],question:{q:'Trong hệ thống điện gia đình, bộ phận nào chủ yếu dùng để chia điện thành các mạch nhánh?',choices:['Bóng đèn','Tủ điện phân phối','Phích cắm điện thoại','Vỏ nhựa ổ cắm'],correct:1,why:'Tủ điện chứa các thiết bị đóng cắt và bảo vệ để phân phối điện ra các mạch như đèn, ổ cắm, điều hòa.'}
},
{
 id:2,part:1,title:'Electron, điện trường và dòng điện',time:17,diagram:'atom',subtitle:'Tại sao bấm công tắc là đèn sáng gần như ngay?',
 goal:'Hiểu chuyển động electron, chiều dòng điện quy ước và điều kiện để có dòng điện.',
 sections:[
 {h:'Bên trong một sợi dây đồng',p:'Dây đồng là mạng các nguyên tử kim loại. Electron dẫn trong kim loại có thể dịch chuyển dưới tác dụng của điện trường. Khi chưa đặt điện áp, electron vẫn có chuyển động vi mô hỗn loạn nhưng không có dòng điện trung bình có hướng qua tiết diện dây. Khi có điện trường, chuyển động có thêm một thành phần trôi rất nhỏ tạo ra dòng điện.\n\nĐiều bất ngờ: tốc độ trôi trung bình của electron thường rất chậm so với tốc độ lan truyền tín hiệu điện trong dây. Vì thế đèn sáng nhanh không có nghĩa một electron vừa chạy từ công tắc tới bóng trong tích tắc.'},
 {h:'Hai chiều dễ gây nhầm',p:'Electron có điện tích âm nên khi xét chuyển động trôi, nó đi ngược chiều điện trường. Trong kỹ thuật, người ta quy ước “chiều dòng điện” là chiều chuyển động của điện tích dương. Bởi vậy trong dây kim loại, chiều dòng điện quy ước ngược chiều trôi của electron.\n\nQuy ước này hình thành trước khi cấu trúc electron được hiểu đầy đủ và vẫn được dùng nhất quán trong sơ đồ điện, phương trình và phép đo.'},
 {h:'Điều gì cần để thiết bị chạy?',p:'Để có dòng điện làm việc liên tục trong một mạch đơn giản cần nguồn tạo chênh lệch điện thế, đường dẫn thích hợp và một đường đi kín qua tải. Nếu mạch bị hở, dòng điện duy trì qua tải sẽ không còn. Nếu vô tình tạo đường dẫn điện trở rất thấp bỏ qua tải, dòng có thể tăng mạnh: đó là nguyên lý của ngắn mạch.\n\n“Vật dẫn điện” không có nghĩa là không có điện trở. Dây đồng vẫn cản trở dòng điện ở mức nhất định và vì vậy có thể phát nóng.'},
 {h:'Điện trong nhà khác điện pin',p:'Pin thường tạo điện áp một chiều (DC): cực tính tương đối ổn định. Nguồn lưới trong nhà là xoay chiều (AC): điện áp và chiều dòng điện thay đổi theo chu kỳ. Tuy nhiên, cả DC và AC đều truyền năng lượng và đều có thể gây nguy hiểm ở mức điện áp, dòng điện phù hợp.'}
 ],takeaways:['Dòng điện quy ước ngược chiều trôi của electron trong kim loại.','Tín hiệu điện lan truyền nhanh hơn rất nhiều so với chuyển động trôi của electron.','Mạch kín và chênh lệch điện thế là hai ý tưởng nền tảng.'],question:{q:'Vì sao bật công tắc, đèn sáng rất nhanh dù dây dẫn dài?',choices:['Electron từ nhà máy tức thì chạy tới bóng','Tín hiệu điện trường lan truyền qua mạch nhanh','Đèn tự có pin ẩn','Điện trở của dây luôn bằng 0'],correct:1,why:'Nguồn thiết lập tín hiệu điện từ lan truyền trong mạch rất nhanh; không cần một electron cụ thể đi hết quãng đường từ nguồn đến tải.'}
},
{
 id:3,part:1,title:'Điện áp – Dòng điện – Điện trở',time:20,diagram:'ohm',subtitle:'Ba đại lượng xây nên toàn bộ tư duy điện học.',
 goal:'Giải thích V, A, Ω và dùng định luật Ohm đúng phạm vi.',
 sections:[
 {h:'Điện áp U (volt) = chênh lệch điện thế',p:'Điện áp là năng lượng trên một đơn vị điện tích giữa hai điểm. Hình dung hai bể nước có chênh cao: chênh lệch tạo khả năng làm nước chảy qua đường dẫn. Tương tự, chênh lệch điện thế tạo điều kiện cho điện tích chuyển động. Hình ảnh này chỉ là phép ví von, không tương đương hoàn toàn với điện trường.\n\nKhông có khái niệm “một điểm có điện áp 220 V” một cách tuyệt đối: điện áp luôn đo giữa hai điểm tham chiếu. Trong mạch gia đình thường nói 220 V giữa L và N.'},
 {h:'Dòng điện I (ampere) = tốc độ dòng điện tích',p:'1 A nghĩa là điện lượng 1 coulomb đi qua một tiết diện trong 1 giây. Dòng lớn hơn đồng nghĩa lượng điện tích qua tiết diện mỗi giây lớn hơn. Trong dây dẫn, dòng điện làm phát nhiệt vì các hạt mang điện tương tác với mạng tinh thể.\n\nDây điện không được chọn chỉ theo điện áp 220 V. Độ lớn dòng điện, cách lắp, nhiệt độ, số dây đi chung và khả năng bảo vệ đều quan trọng.'},
 {h:'Điện trở R (ohm) và định luật Ohm',p:'Điện trở biểu thị mức cản trở dòng điện. Với phần tử thuần trở và điều kiện áp dụng phù hợp: **U = I × R**. Nếu U không đổi và R giảm một nửa, I tăng gấp đôi.\n\nVí dụ lý tưởng: điện trở 110 Ω đặt giữa nguồn 220 V tạo dòng I = 220/110 = 2 A và công suất nhiệt 440 W. Đây là ví dụ tính toán, tuyệt đối không dùng điện trở tùy ý thử trực tiếp vào ổ cắm.'},
 {h:'Tại sao công thức không giải thích mọi thiết bị?',p:'Động cơ quạt, nguồn xung của máy tính, bóng LED, điều hòa inverter không phải điện trở thuần đơn giản. Với AC, ngoài điện trở còn có cảm kháng, dung kháng và hệ số công suất. Vì vậy lấy 220 V chia cho một “điện trở” đo bằng đồng hồ khi thiết bị tắt sẽ không nhất thiết cho dòng khi thiết bị đang hoạt động.'}
 ],takeaways:['Điện áp đo giữa hai điểm, không phải thuộc tính tuyệt đối của một dây.','U = I × R hữu ích cho phần tử thuần trở.','Dòng điện quyết định nhiều rủi ro phát nóng và bảo vệ.'],question:{q:'Một điện trở lý tưởng 100 Ω được đặt ở điện áp DC 10 V. Dòng điện là bao nhiêu?',choices:['0,1 A','1 A','10 A','1.000 A'],correct:0,why:'Theo I = U/R = 10/100 = 0,1 A.'}
},
{
 id:4,part:1,title:'Điện xoay chiều 220 V / 50 Hz',time:19,diagram:'wave',subtitle:'Tại sao điện áp thay đổi liên tục nhưng vẫn gọi là 220 V?',
 goal:'Hiểu AC, chu kỳ, tần số, RMS và khác biệt với DC.',
 sections:[
 {h:'Điện xoay chiều là gì?',p:'Ở nguồn điện AC, điện áp thay đổi theo thời gian và đổi dấu có chu kỳ. Với dạng sin lý tưởng, một chu kỳ có nửa dương và nửa âm. Tần số 50 Hz nghĩa là 50 chu kỳ mỗi giây, hay mỗi chu kỳ kéo dài 20 mili giây.\n\nDòng điện trong mạch AC cũng thay đổi theo thời gian, tùy theo tính chất của tải. Không được hình dung dòng luôn chảy một chiều từ L sang N.'},
 {h:'220 V là điện áp hiệu dụng',p:'Điện áp xoay chiều hình sin có giá trị hiệu dụng U_RMS = U_đỉnh/√2. Nếu U_RMS = 220 V, đỉnh điện áp xấp xỉ 311 V. Con số này giải thích vì sao không thể coi 220 V là mức điện áp lớn nhất tại từng thời điểm.\n\nGiá trị hiệu dụng được chọn vì liên hệ với khả năng tạo nhiệt tương đương của nguồn DC trên cùng điện trở.'},
 {h:'Tại sao lưới điện dùng AC?',p:'Máy biến áp truyền thống thay đổi điện áp AC rất hiệu quả. Nâng điện áp để truyền tải cùng công suất với dòng nhỏ hơn giúp giảm tổn thất I²R trên đường dây. Hiện nay vẫn có hệ thống truyền tải DC cao áp cho các trường hợp riêng; “AC luôn tốt hơn DC” là kết luận sai.'},
 {h:'Thiết bị DC vẫn cắm được vào ổ AC bằng cách nào?',p:'Bộ sạc điện thoại chứa mạch chuyển đổi: đầu vào nhận AC lưới, sau đó chỉnh lưu và điều khiển để tạo đầu ra DC thích hợp. Trên nhãn bộ sạc thường ghi INPUT 100–240 V~ 50/60 Hz và OUTPUT với điện áp/dòng DC. Ký hiệu “~” thường chỉ AC; “⎓” chỉ DC.'}
 ],takeaways:['50 Hz = 50 chu kỳ/giây.','220 V AC là giá trị hiệu dụng; đỉnh sin khoảng 311 V.','Bộ sạc điện thoại biến đổi AC thành DC phù hợp.'],question:{q:'Điện áp 220 V AC hình sin có điện áp đỉnh xấp xỉ bao nhiêu?',choices:['110 V','220 V','311 V','440 V'],correct:2,why:'Với hình sin, U_đỉnh = U_RMS × √2 ≈ 220 × 1,414 ≈ 311 V.'}
},
{
 id:5,part:1,title:'Công suất, điện năng và tiền điện',time:21,diagram:'power',subtitle:'Vì sao bếp 2.000 W tiêu thụ nhiều hơn đèn 10 W?',
 goal:'Phân biệt W, Wh, kWh, công suất biểu kiến và tính chi phí điện.',
 sections:[
 {h:'Công suất = tốc độ sử dụng năng lượng',p:'Watt (W) đo tốc độ chuyển đổi năng lượng. Một bóng LED 10 W dùng ít năng lượng mỗi giây hơn một bếp thuần trở 2.000 W khi cả hai hoạt động đúng công suất danh định. Đơn vị watt không phải lượng điện tiêu thụ trong cả tháng.\n\nVới tải DC hoặc tải AC thuần trở, P = U × I. Với nhiều tải AC thực tế, công suất tác dụng P = U_RMS × I_RMS × cosφ (đối với dạng sin, một pha), trong đó cosφ là hệ số công suất.'},
 {h:'Điện năng = công suất nhân thời gian',p:'Điện năng E = P × t. Quy đổi: 1 kWh là 1.000 W hoạt động liên tục trong 1 giờ. Bếp 2 kW chạy 30 phút ở đúng công suất trung bình 2 kW sẽ dùng 1 kWh; đèn 10 W chạy 100 giờ cũng dùng 1 kWh.\n\nCông tơ tính điện năng, không chỉ đếm số thiết bị cắm vào ổ. Một thiết bị cắm điện nhưng ở chế độ chờ vẫn có thể tiêu thụ một lượng nhỏ.'},
 {h:'Công thức thực tế',p:'Muốn ước lượng điện tiêu thụ theo tháng: **kWh = (W/1.000) × số giờ/ngày × số ngày**. Tiền điện ước tính bằng số kWh nhân đơn giá áp dụng, có xét bậc giá và các khoản liên quan theo hóa đơn thực tế.\n\nVí dụ: quạt 50 W, trung bình 8 giờ/ngày trong 30 ngày → 0,05 × 8 × 30 = 12 kWh.'},
 {h:'Công suất lớn có nghĩa là nguy hiểm hơn?',p:'Ở cùng điện áp, tải có công suất tác dụng cao thường kéo dòng điện lớn hơn nếu hệ số công suất tương đương. Dòng lớn làm dây và các mối nối nóng hơn nếu điện trở của chúng không đổi. Nhưng nguy cơ không chỉ phụ thuộc W: ổ tiếp xúc lỏng, dây xuống cấp, môi trường ẩm, thiếu bảo vệ cũng tạo nguy hiểm.'}
 ],takeaways:['W là công suất; kWh là lượng điện năng.','Tiền điện phụ thuộc công suất, thời gian và biểu giá.','P = U × I chỉ dùng trực tiếp cho DC hoặc trường hợp AC phù hợp.'],question:{q:'Một đèn 20 W hoạt động 5 giờ/ngày trong 10 ngày sẽ tiêu thụ bao nhiêu điện năng?',choices:['0,1 kWh','1 kWh','10 kWh','100 kWh'],correct:1,why:'20 W = 0,02 kW; E = 0,02 × 5 × 10 = 1 kWh.'}
},
{
 id:6,part:2,title:'Ba dây L, N và PE thực chất là gì?',time:22,diagram:'wires',subtitle:'Ba dây có vai trò khác nhau; màu dây không phải bằng chứng.',
 goal:'Phân biệt chức năng làm việc, nối đất và nguy cơ của từng dây.',
 sections:[
 {h:'L — dây pha',p:'L (Line) là dây pha của mạch một pha. Trong hệ thống thông thường, điện áp giữa L và N khoảng 220 V danh định. Dây L có thể gây điện giật khi người chạm vào và tạo đường dòng điện qua cơ thể.\n\nTrong thực hành, không được suy đoán dây nào là L chỉ vì thấy màu đỏ, nâu hay đen; nhà cũ có thể lắp không theo quy ước hoặc bị đấu sai.'},
 {h:'N — dây trung tính',p:'N (Neutral) thường liên hệ với điểm trung tính của nguồn. Trong mạch làm việc, N có thể mang dòng điện trở về nguồn. N không phải “dây không có điện” theo nghĩa an toàn: điện áp tại N có thể khác điện thế đất do sụt áp, đứt trung tính hoặc sự cố hệ thống.\n\nTuyệt đối không chạm tay vào N chỉ vì ai đó gọi là “dây nguội”.'},
 {h:'PE — dây bảo vệ',p:'PE (Protective Earth) kết nối các phần dẫn điện để hở cần bảo vệ, chẳng hạn khung kim loại của thiết bị thuộc lớp bảo vệ I, vào hệ thống bảo vệ nối đất. Bình thường PE không phải đường dẫn dòng điện làm việc; khi có lỗi chạm vỏ, PE giúp tạo điều kiện cho thiết bị bảo vệ hoạt động.\n\nMột ổ ba lỗ chưa chứng minh nhà có PE tốt. Không tự nối N với chân PE ngay tại ổ cắm để “chế tiếp địa”.'},
 {h:'Vì sao dây thường có màu khác nhau?',p:'Màu dây giúp thợ giảm nhầm lẫn khi thiết kế, thi công và bảo trì đúng tiêu chuẩn. Quy ước IEC hiện hành thường dùng xanh dương cho N, xanh-vàng cho PE và màu pha như nâu, đen, xám cho L. Nhưng thực tế công trình khác nhau, có thể đã sửa chữa không đúng. Phải xác định bằng hồ sơ và phép kiểm tra phù hợp.'}
 ],takeaways:['L và N tham gia mạch làm việc; PE dùng để bảo vệ.','Dây N vẫn có thể nguy hiểm.','Không suy ra chức năng dây chỉ từ màu hoặc số lỗ ổ cắm.'],question:{q:'Dây nào không được dùng làm đường mang dòng làm việc bình thường?',choices:['L','N','PE','Cả L và N'],correct:2,why:'PE là dây bảo vệ; nó không được thiết kế làm đường dẫn dòng tải thông thường.'},caution:'Không thử phân biệt L–N–PE bằng cách chạm tay, dùng bóng đèn thử tự chế hoặc dựa vào màu dây.'
},
{
 id:7,part:2,title:'Mạch kín, mạch hở, ngắn mạch',time:18,diagram:'circuit',subtitle:'Ba trạng thái, ba kết quả hoàn toàn khác nhau.',
 goal:'Mô tả đường dòng điện, hiểu ngắn mạch khác quá tải.',
 sections:[
 {h:'Mạch kín tạo đường truyền năng lượng',p:'Trong mạch đơn giản gồm pin, dây và đèn, dòng làm việc được duy trì khi đường dẫn kín qua đèn. Khi công tắc đóng, nó hoàn tất mạch. Khi mở, nó tạo một khe hở và ngăn dòng đi qua đoạn đó.\n\nMạch điện AC trong nhà có cấu trúc bảo vệ phức tạp hơn, nhưng nguyên tắc đường dẫn liên tục vẫn đúng.'},
 {h:'Mạch hở là gì?',p:'Mạch hở có điểm gián đoạn: công tắc tắt, dây đứt, cầu chì đã ngắt hoặc tiếp điểm hỏng. Thiết bị có thể không chạy, dù một phần mạch vẫn có điện áp nguy hiểm. Đó là lý do bóng tắt không chứng minh đui đèn đã mất điện.\n\nTrong mạch nối tiếp, một điểm hở làm toàn bộ đường dòng ngừng; trong mạch song song, một nhánh hở có thể không ảnh hưởng nhánh khác.'},
 {h:'Ngắn mạch là gì?',p:'Ngắn mạch xảy ra khi có đường dẫn ngoài ý muốn có tổng trở rất thấp nối các điểm khác điện thế, khiến dòng sự cố tăng rất lớn. Ví dụ mang tính khái niệm: L chạm trực tiếp N do cách điện hỏng. Năng lượng sự cố có thể gây hồ quang, cháy, hư hỏng và nguy cơ điện giật.\n\nKhông bao giờ thử tạo ngắn mạch để xem aptomat có nhảy hay không.'},
 {h:'Quá tải khác ngắn mạch',p:'Quá tải là khi mạch phải cấp dòng vượt khả năng mang tải được thiết kế, ví dụ nhiều thiết bị công suất lớn hoạt động đồng thời. Ngắn mạch là lỗi đường dẫn tạo dòng sự cố bất thường. Cả hai đều có thể làm aptomat quá dòng hoạt động, nhưng cơ chế và mức dòng khác nhau.'}
 ],takeaways:['Mạch hở không đồng nghĩa mọi vị trí đã an toàn.','Ngắn mạch có thể tạo dòng sự cố rất lớn.','Quá tải và ngắn mạch là hai tình huống khác nhau.'],question:{q:'Một dây nối không chủ ý trực tiếp giữa L và N làm dòng tăng mạnh thuộc loại sự cố nào?',choices:['Mạch hở','Ngắn mạch','Điện năng thấp','Hệ số công suất cao'],correct:1,why:'Đó là đường dẫn tổng trở thấp giữa các điểm có chênh lệch điện thế, đặc trưng của ngắn mạch.'}
},
{
 id:8,part:2,title:'Nối tiếp và song song: bí mật của điện nhà',time:20,diagram:'parallel',subtitle:'Vì sao một bóng đèn hỏng mà cả nhà không tối?',
 goal:'Phân biệt các kiểu mắc và hệ quả điện áp, dòng điện.',
 sections:[
 {h:'Nối tiếp: cùng một đường dòng',p:'Hai tải mắc nối tiếp nằm trên cùng một đường dẫn, nên dòng qua chúng bằng nhau trong mạch đơn giản. Tổng điện áp trên các tải bằng điện áp nguồn. Nếu một phần tử hở mạch, cả đường dẫn đó ngừng dòng.\n\nNối tiếp không phải cách điển hình để cấp nguồn cho nhiều thiết bị gia đình vì mỗi thiết bị sẽ không nhận được điện áp nguồn ổn định một cách độc lập.'},
 {h:'Song song: các nhánh nhận cùng điện áp',p:'Các tải mắc song song giữa cùng hai nút sẽ có cùng điện áp đặt lên chúng. Dòng tổng là tổng dòng các nhánh. Khi nhánh này hở, nhánh khác vẫn có thể hoạt động.\n\nĐây là nguyên lý cơ bản của hệ thống cấp điện cho đèn, ổ cắm và thiết bị trong nhà: nhiều tải dùng chung nguồn nhưng có đường nhánh riêng.'},
 {h:'Cùng aptomat không có nghĩa mắc nối tiếp',p:'Một mạch nhánh có thể cấp cho nhiều ổ cắm với các điểm lấy điện mắc song song. Nếu aptomat mạch đó ngắt, tất cả cùng mất điện do nguồn chung bị cắt. Cũng cần phân biệt “dây cấp đi qua lần lượt các hộp ổ” với việc các thiết bị mắc nối tiếp về điện.'},
 {h:'Dòng tổng là điều rất quan trọng',p:'Giả sử hai tải thuần trở ở 220 V lần lượt dùng 500 W và 1.500 W. Khi cùng hoạt động, công suất khoảng 2.000 W và dòng tổng khoảng 9,1 A. Một ổ hay nhánh chỉ cần xem xét tổng tải sử dụng, không phải số lượng phích cắm.'}
 ],takeaways:['Nối tiếp: dòng các tải giống nhau trong mạch đơn giản.','Song song: điện áp các nhánh giống nhau.','Dòng tổng là yếu tố quan trọng khi xét tải chung.'],question:{q:'Hai bóng đèn mắc song song đúng cách. Một bóng bị hở mạch. Điều nào có thể xảy ra?',choices:['Bóng còn lại vẫn sáng','Bóng còn lại chắc chắn cháy','Nguồn lập tức đổi thành DC','Điện trở dây dẫn bằng 0'],correct:0,why:'Nhánh còn lại vẫn có đường dẫn điện riêng nếu nguồn và mạch chung không bị ngắt.'}
},
{
 id:9,part:2,title:'Công tắc và ổ cắm hoạt động bên trong',time:22,diagram:'socket',subtitle:'Từ tiếp điểm cơ khí đến điểm tiếp xúc giữa phích và ổ.',
 goal:'Phân biệt công tắc, ổ cắm, tiếp điểm, cực đấu và nguy cơ tiếp xúc kém.',
 sections:[
 {h:'Công tắc thực chất làm gì?',p:'Công tắc cơ thông thường là cơ cấu đưa hai tiếp điểm kim loại chạm nhau hoặc tách nhau. Khi đóng, đường dẫn có thể cho dòng đi qua; khi mở, đường dẫn bị ngắt. Vì vậy công tắc không “tạo điện”, chỉ điều khiển một đường dẫn điện.\n\nTrong mạch đèn một pha thông thường, việc cắt dây pha bằng thiết bị phù hợp quan trọng hơn rất nhiều so với cắt sai vào dây trung tính. Nhưng không được suy đoán công tắc cũ đã đấu đúng.'},
 {h:'Bên trong ổ cắm có gì?',p:'Ổ cắm chứa các tiếp điểm lò xo bằng kim loại để giữ chân phích cắm, đầu nối dây, kết cấu cách điện và lớp vỏ bảo vệ. Ổ có tiếp điểm PE phù hợp sẽ tạo đường nối đất bảo vệ cho thiết bị cần tiếp địa. Mỗi ổ có định mức dòng, điện áp, kiểu phích tương thích và điều kiện sử dụng riêng.\n\nTiếp điểm yếu làm diện tích tiếp xúc hiệu dụng giảm, điện trở tiếp xúc tăng và có thể phát nóng ngay cả khi dòng chưa vượt ngưỡng aptomat.'},
 {h:'Vì sao có ổ 2 lỗ và 3 lỗ?',p:'Ổ hai cực chỉ có các tiếp điểm nguồn cho mạch làm việc; ổ ba cực phù hợp có thêm tiếp điểm bảo vệ nối đất. Có ba lỗ trên mặt nhựa không đảm bảo ổ đã được nối PE thật. Một ổ “đa năng” không phù hợp phích có thể giữ chân phích lỏng, tăng nguy cơ phát nóng.'},
 {h:'Công tắc hai chiều có gì khác?',p:'Công tắc một chiều thường điều khiển một đường đóng/mở. Hệ công tắc đảo chiều (two-way switching) có thể điều khiển một đèn từ hai vị trí bằng hai cơ cấu chuyển mạch và các đường liên kết. Đây không phải chỉ là hai công tắc thường mắc bừa vào cùng một dây. Phần sơ đồ sẽ được học kỹ ở bài 26.'}
 ],takeaways:['Ổ cắm chứa tiếp điểm có lực ép, không phải chỉ hai lỗ nhựa.','Tiếp xúc lỏng có thể gây nóng cháy dù MCB chưa ngắt.','Công tắc điều khiển đường dẫn, không tạo ra điện.'],question:{q:'Vì sao phích cắm bị lỏng trong ổ có thể nguy hiểm?',choices:['Điện áp tự giảm về 12 V','Điện trở tiếp xúc có thể tăng và phát nhiệt','Ổ sẽ tự sinh ra điện mới','Dây trung tính biến thành dây tiếp địa'],correct:1,why:'Tiếp điểm lỏng tạo điện trở tiếp xúc lớn, nhiệt sinh ra theo cơ chế I²R ngay tại điểm tiếp xúc.'},caution:'Không sử dụng ổ nóng, xém, có mùi khét hoặc phích cắm bị lỏng. Cần cô lập mạch an toàn và kiểm tra cả đầu nối phía sau.'
},
{
 id:10,part:2,title:'Điện một pha, ba pha và máy biến áp',time:20,diagram:'phases',subtitle:'Tại sao có nơi 220 V, có nơi 380 V?',
 goal:'Hiểu mối liên hệ pha–trung tính, pha–pha và vai trò máy biến áp.',
 sections:[
 {h:'Điện một pha trong căn hộ',p:'Phần lớn thiết bị gia đình ở Việt Nam dùng nguồn một pha danh định 220 V giữa L và N. Một căn hộ có thể được cấp từ một pha của mạng phân phối ba pha trong tòa nhà. Điều này không có nghĩa cả tòa nhà chỉ có một pha.'},
 {h:'Ba pha nghĩa là ba điện áp lệch nhau',p:'Trong hệ ba pha cân bằng, ba điện áp hình sin cùng tần số lệch pha nhau 120°. Với hệ 380/220 V danh định, điện áp giữa hai pha xấp xỉ 380 V và giữa mỗi pha với trung tính xấp xỉ 220 V. Quan hệ lý tưởng là U_dây = √3 × U_pha.\n\nBa pha phổ biến trong cấp điện công nghiệp, hệ thống điều hòa lớn, thang máy và phân phối điện tòa nhà.'},
 {h:'Máy biến áp làm gì?',p:'Máy biến áp AC dùng cảm ứng điện từ giữa các cuộn dây để tăng hoặc giảm điện áp. Trong máy lý tưởng, công suất vào và ra gần bằng nhau: tăng điện áp tương ứng với giảm dòng điện. Thực tế máy có tổn thất.\n\nLợi ích của truyền tải điện áp cao là với cùng công suất truyền, dòng nhỏ hơn và tổn thất I²R nhỏ hơn.'},
 {h:'Vì sao không được tự đấu hai pha để tăng công suất?',p:'Hai pha có thể tạo điện áp khoảng 380 V, không phù hợp với thiết bị chỉ thiết kế cho 220 V. Việc xác định pha, cân bằng tải, lựa chọn thiết bị bảo vệ và hệ thống tiếp địa thuộc phạm vi thiết kế điện. Không được tự lấy “hai dây nóng” để cấp cho thiết bị một pha thông thường.'}
 ],takeaways:['Hệ ba pha có ba điện áp lệch nhau 120°.','380/220 V là hai điện áp khác nhau trong hệ ba pha danh định tương ứng.','Biến áp thay đổi điện áp nhưng không tự tạo thêm năng lượng.'],question:{q:'Trong hệ ba pha cân bằng danh định 380/220 V, điện áp giữa một pha và trung tính gần bằng bao nhiêu?',choices:['12 V','110 V','220 V','380 V'],correct:2,why:'Điện áp pha–trung tính danh định là 220 V, còn pha–pha là khoảng 380 V.'}
},
{
 id:11,part:3,title:'Dây điện: lõi, vỏ, tiết diện và nhiệt',time:22,diagram:'cable',subtitle:'Vì sao có dây 1,5 mm², 2,5 mm², 4 mm²?',
 goal:'Hiểu cấu tạo cáp, vai trò tiết diện và giới hạn mang dòng.',
 sections:[
 {h:'Cấu tạo một dây điện',p:'Dây dẫn thường gồm lõi đồng hoặc nhôm và lớp cách điện. Cáp có thể chứa nhiều lõi, lớp đệm và lớp vỏ bảo vệ. Lõi dẫn điện; cách điện ngăn dòng điện đi đến nơi không mong muốn; vỏ ngoài bảo vệ trước tác động cơ học, ẩm và môi trường trong giới hạn thiết kế.'},
 {h:'Tiết diện khác đường kính',p:'Tiết diện lõi dẫn tính bằng mm², không phải đường kính dây tính bằng mm. Nếu lõi tròn đặc có đường kính d thì diện tích A = πd²/4. Dây 2,5 mm² không có nghĩa đường kính bằng 2,5 mm. Cáp mềm nhiều sợi có tổng tiết diện kim loại được nhà sản xuất công bố.'},
 {h:'Dây phát nhiệt vì sao?',p:'Dây dẫn có điện trở. Với một đoạn dây, R xấp xỉ ρL/A: chiều dài lớn hơn làm R tăng, tiết diện lớn hơn làm R giảm, cùng vật liệu và điều kiện. Nhiệt tổn hao là P_mất = I²R. Dòng tăng gấp đôi thì nhiệt tổn hao trên cùng điện trở tăng gấp bốn.\n\nNhiệt độ còn phụ thuộc khả năng tản nhiệt: dây đi trong ống, trong tường, bó chung hoặc gần nguồn nóng khác sẽ khác nhau.'},
 {h:'Vì sao không có bảng “dây X chịu Y A” dùng mọi nơi?',p:'Dòng cho phép phải xét vật liệu lõi, loại cách điện, nhiệt độ môi trường, số dây mang tải, phương thức đi dây, chiều dài, độ sụt áp và tiêu chuẩn áp dụng. Vì vậy không được tự nâng aptomat chỉ vì thấy dây “trông khá to”. Người thiết kế phải bảo đảm thiết bị bảo vệ phối hợp với khả năng chịu dòng của dây.'}
 ],takeaways:['mm² đo diện tích lõi dẫn.','Tổn hao nhiệt trên dây tỉ lệ với I²R.','Khả năng chịu tải phụ thuộc cách lắp và điều kiện môi trường.'],question:{q:'Giữ nguyên vật liệu và chiều dài dây, tăng gấp đôi tiết diện lõi thì điện trở xấp xỉ thay đổi ra sao?',choices:['Tăng gấp đôi','Giảm một nửa','Giữ nguyên','Tăng gấp bốn'],correct:1,why:'Theo R = ρL/A, điện trở tỉ lệ nghịch với tiết diện.'}
},
{
 id:12,part:3,title:'Ổ cắm, phích cắm và giới hạn tải',time:20,diagram:'outlet',subtitle:'Nhìn một ổ 16 A phải hiểu điều gì?',
 goal:'Đọc thông số ổ/phích và hiểu vì sao không nên dồn tải.',
 sections:[
 {h:'Thông số định mức là giới hạn thiết kế',p:'Ký hiệu 16 A – 250 V~ trên ổ cắm cho biết định mức theo điều kiện và tiêu chuẩn của sản phẩm. 16 A không có nghĩa mọi ổ đó luôn an toàn khi dùng tải 16 A bất kể chất lượng phích, dây dẫn, nhiệt độ, thời gian hoặc cách lắp. Phải kiểm tra toàn bộ chuỗi từ nguồn, dây, ổ, phích đến thiết bị.'},
 {h:'Giới hạn của bộ chia và ổ kéo dài',p:'Nếu cắm một thiết bị 1.500 W và một thiết bị 1.000 W vào cùng bộ chia, tổng công suất là 2.500 W. Với tải thuần trở 220 V, dòng vào khoảng 11,4 A. Nhưng giới hạn thực tế phụ thuộc định mức của bộ chia, dây, phích và ổ tường. Một thành phần có giới hạn thấp sẽ trở thành điểm yếu của cả chuỗi.\n\nKhông nối tiếp nhiều ổ kéo dài để chạy tải công suất lớn.'},
 {h:'Vì sao một ổ nóng dù không quá tải?',p:'Phích cắm lỏng, tiếp điểm oxy hóa, đầu nối dây siết sai, đầu nối không phù hợp loại dây hoặc sản phẩm kém chất lượng làm tăng điện trở cục bộ. Nhiệt tập trung có thể gây biến dạng nhựa, đổi màu và cháy. MCB quá dòng có thể không ngắt vì dòng tổng vẫn ở mức bình thường.'},
 {h:'Mỗi loại ổ cắm có kiểu tương thích riêng',p:'Số lỗ hoặc hình dạng giống nhau không đảm bảo mọi phích đều tiếp xúc đủ lực hoặc có nối đất bảo vệ. Không cắt chân tiếp địa của phích. Với máy công suất lớn, ổ và mạch cấp cần được đánh giá đúng theo tài liệu sản phẩm và điều kiện lắp đặt.'}
 ],takeaways:['16 A là định mức sản phẩm theo điều kiện, không phải lời bảo đảm tuyệt đối.','Toàn chuỗi cấp điện phải đáp ứng tải.','Tiếp xúc kém có thể phát nhiệt không làm nhảy aptomat.'],question:{q:'Một ổ kéo dài ghi tối đa 10 A. Có thể kết luận nào chính xác nhất?',choices:['Cắm tổng tải nào cũng được nếu dùng 220 V','Giới hạn bộ kéo dài là một yếu tố phải tôn trọng','Chỉ số A là điện năng theo tháng','Ổ kéo dài có thể thay thế thiết bị chống dòng rò'],correct:1,why:'Định mức 10 A là giới hạn dòng thiết kế của sản phẩm trong điều kiện quy định; cần xét thêm cả ổ tường, dây và thiết bị.'}
},
{
 id:13,part:3,title:'MCB: aptomat quá tải và ngắn mạch',time:22,diagram:'mcb',subtitle:'Bên trong chiếc cần gạt nhỏ là hai cơ chế bảo vệ.',
 goal:'Hiểu MCB bảo vệ gì, ký hiệu B/C và giới hạn của nó.',
 sections:[
 {h:'Aptomat có nhiệm vụ nào?',p:'MCB (Miniature Circuit Breaker) là thiết bị ngắt mạch khi quá dòng ở mức và khoảng thời gian đặc trưng của thiết bị. Nó bảo vệ dây và mạch trước quá tải và ngắn mạch khi được lựa chọn, lắp đặt đúng. MCB không phải thiết bị chuyên dùng phát hiện dòng rò nhỏ qua người.'},
 {h:'Hai cơ chế thường có bên trong',p:'Cơ cấu nhiệt dùng phần tử lưỡng kim: khi dòng vượt định mức trong một thời gian, nhiệt làm cơ cấu cong và tác động. Cơ cấu điện từ phản ứng nhanh hơn trước dòng sự cố lớn do ngắn mạch. Thời gian ngắt phụ thuộc đặc tuyến và mức dòng, chứ không phải cứ vượt định mức một chút là nhảy ngay.'},
 {h:'C16, B16, 6 kA là gì?',p:'Con số 16 thường là dòng định mức 16 A. Chữ B/C biểu thị đặc tuyến tác động tức thời theo tiêu chuẩn thiết bị, không phải mức chất lượng. “6 kA” thường liên quan khả năng cắt dòng ngắn mạch danh định theo tiêu chuẩn tương ứng, không phải mức dòng mà mạch nên dùng hàng ngày. Việc lựa chọn phải xét dòng sự cố dự kiến và phối hợp bảo vệ.'},
 {h:'Tại sao không thay C16 bằng C32 để khỏi nhảy?',p:'Bởi dây và mối nối phía sau có thể chỉ được thiết kế cho dòng nhỏ hơn. Khi tăng định mức aptomat không phù hợp, dây có thể quá nhiệt trước khi thiết bị bảo vệ tác động. Cách xử lý aptomat nhảy là tìm nguyên nhân và kiểm tra thiết kế tải, không phải tăng số A tùy tiện.'}
 ],takeaways:['MCB bảo vệ quá dòng; không thay thế RCD/RCBO.','MCB có cơ chế nhiệt và điện từ.','Không nâng định mức aptomat nếu chưa đánh giá dây và tải.'],question:{q:'MCB thông thường KHÔNG có chức năng chính nào dưới đây?',choices:['Ngắt khi ngắn mạch','Bảo vệ quá tải','Phát hiện dòng rò nhỏ bằng so sánh L–N','Dùng làm thiết bị đóng cắt phù hợp'],correct:2,why:'Phát hiện chênh lệch dòng L–N là chức năng của thiết bị bảo vệ dòng dư (RCD), không phải MCB thông thường.'},caution:'Aptomat nhảy lặp lại, có mùi khét hoặc vỏ nóng: dừng sử dụng, không giữ cần gạt hoặc thay aptomat lớn hơn để “chữa cháy”.'
},
{
 id:14,part:3,title:'RCCB, RCBO và nguyên lý chống dòng rò',time:24,diagram:'rcd',subtitle:'Vì sao một thiết bị có thể phát hiện dòng chạy sai đường?',
 goal:'Hiểu so sánh dòng vào–ra và phân biệt MCB, RCCB, RCBO.',
 sections:[
 {h:'RCD phát hiện điều gì?',p:'Trong mạch một pha lý tưởng không có rò, dòng tức thời qua L và N cộng đại số bằng 0. RCD (Residual Current Device) giám sát mất cân bằng dòng qua các dây làm việc. Nếu một phần dòng đi theo đường khác, chẳng hạn qua đất hoặc cơ thể, và đạt điều kiện tác động, thiết bị có thể ngắt.\n\nNgưỡng 30 mA thường gặp trong bảo vệ bổ sung chống điện giật, nhưng không có nghĩa mọi dòng nhỏ hơn 30 mA đều an toàn và cũng không bảo đảm mọi tình huống sẽ được bảo vệ.'},
 {h:'Bên trong bộ phát hiện',p:'Một máy biến dòng vi sai bao quanh các dây làm việc. Dòng bình thường ngược chiều nhau làm tổng từ thông gần bằng 0; dòng rò tạo chênh lệch, kích hoạt cơ cấu ngắt khi thỏa điều kiện. Dòng PE không được dùng làm đường trở về tải qua thiết bị vi sai theo cách làm mất khả năng bảo vệ.'},
 {h:'RCCB khác RCBO ở đâu?',p:'RCCB bảo vệ dòng dư, thường phải phối hợp với thiết bị bảo vệ quá dòng thích hợp. RCBO kết hợp bảo vệ dòng dư và quá dòng trong một thiết bị. MCB chỉ bảo vệ quá dòng. Bề ngoài cùng có cần gạt không có nghĩa chức năng giống nhau; phải đọc nhãn và sơ đồ.'},
 {h:'Giới hạn của chống giật',p:'Nếu một người đồng thời tiếp xúc L và N, dòng đi–về có thể cân bằng và RCD có thể không phát hiện. Điện giật còn phụ thuộc điện áp chạm, đường đi qua cơ thể, thời gian, môi trường ẩm, sức khỏe và nhiều yếu tố khác. Cắt nguồn, che chắn, nối đất bảo vệ và sử dụng đúng thiết bị phải được kết hợp.'}
 ],takeaways:['RCD kiểm tra chênh lệch dòng qua các dây làm việc.','RCCB không thay MCB về bảo vệ quá dòng.','RCBO kết hợp hai chức năng bảo vệ nhưng không loại bỏ mọi nguy cơ.'],question:{q:'Một RCBO thường kết hợp những chức năng nào?',choices:['Chống sét và đo kWh','Bảo vệ quá dòng và dòng dư','Tăng điện áp và chống sụt áp','Đổi AC thành DC'],correct:1,why:'RCBO tích hợp bảo vệ quá dòng cùng bảo vệ dòng dư.'}
},
{
 id:15,part:3,title:'Tủ điện gia đình: đọc toàn bộ cấu trúc',time:23,diagram:'panel',subtitle:'Một hộp nhỏ có nhiều lớp bảo vệ và nhiều mạch nhánh.',
 goal:'Hiểu cấp nguồn chính, thanh cái, bảo vệ mạch và nhãn.',
 sections:[
 {h:'Tủ điện có nhiệm vụ gì?',p:'Tủ điện tập trung các thiết bị đóng cắt, bảo vệ và phân phối điện. Dây cấp vào, thiết bị cách ly/tổng, hệ thống phân phối, thiết bị bảo vệ nhánh và dây đi đến các khu vực tạo thành cấu trúc thông thường. Cách bố trí thực tế có nhiều biến thể theo tiêu chuẩn, hệ thống nối đất và thiết kế công trình.'},
 {h:'Aptomat tổng và aptomat nhánh',p:'Thiết bị tổng dùng quản lý nguồn cấp cho tủ hoặc phần hệ thống; aptomat nhánh phục vụ các mạch cụ thể như chiếu sáng, ổ cắm, điều hòa. Tên nhánh giúp biết nên kiểm tra đâu khi mất điện một phần. Không coi cần gạt “OFF” là bằng chứng duy nhất rằng toàn bộ đầu cực trong tủ hết điện.'},
 {h:'Thanh phân phối, trung tính và PE',p:'Các thanh dẫn hoặc dây nối phân phối điện đến những nhánh tương ứng. Thanh trung tính và thanh PE có chức năng riêng. Việc nối trộn sau một thiết bị bảo vệ dòng dư có thể làm thiết bị tác động sai hoặc giảm an toàn. Vị trí và kiểu nối phụ thuộc hệ thống nối đất, không thể sao chép sơ đồ từ nhà khác.'},
 {h:'Tủ điện không dành cho thử mò',p:'Bên trong tủ có các đầu cực có thể vẫn mang điện dù một nhánh đã tắt; một số hệ thống còn có nhiều nguồn như điện mặt trời hoặc UPS. Người mới chỉ nên quan sát phía ngoài và học đọc sơ đồ. Mở nắp bảo vệ, đo đầu cực và chỉnh hệ thống phân phối cần người có năng lực.'}
 ],takeaways:['Tủ điện chia nguồn thành các mạch có bảo vệ.','N và PE có thanh/đường chức năng khác nhau.','Một aptomat OFF không bảo đảm mọi điểm trong tủ đã mất điện.'],question:{q:'Trong nhà mất điện riêng khu bếp, phòng khác còn điện. Giả thuyết đầu tiên hợp lý là gì?',choices:['Nhà máy điện chắc chắn dừng','Một mạch nhánh cấp bếp có thể bị ngắt','Điện xoay chiều đổi thành một chiều','Đất mất khả năng dẫn điện'],correct:1,why:'Các khu vực có thể được cấp bởi mạch nhánh riêng; cần kiểm tra an toàn tình trạng mạch cấp bếp.'},caution:'Không tháo mặt che tủ điện hoặc chạm đầu cực. Tủ là khu vực có khả năng xuất hiện năng lượng sự cố cao.'
},
{
 id:16,part:3,title:'Chia mạch và tính tải cho ngôi nhà',time:22,diagram:'loads',subtitle:'Tại sao điều hòa, bếp và bình nóng lạnh thường cần xét riêng?',
 goal:'Hiểu dòng thiết kế, tổng tải, hệ số đồng thời và phân nhánh.',
 sections:[
 {h:'Vì sao phải chia nhiều mạch?',p:'Một mạch duy nhất cấp mọi phòng sẽ khó bảo vệ phù hợp và làm sự cố ở một chỗ ảnh hưởng cả nhà. Chia mạch theo chức năng, vị trí hoặc thiết bị giúp chọn dây và thiết bị bảo vệ đúng tải, dễ cô lập và bảo trì. Một số thiết bị công suất cao thường được cân nhắc có mạch riêng theo yêu cầu thiết kế và nhà sản xuất.'},
 {h:'Dòng tải tính thế nào?',p:'Với tải thuần trở một pha, có thể ước lượng I ≈ P/U. Ví dụ 2.200 W ở 220 V cho dòng khoảng 10 A. Với động cơ hoặc nguồn điện tử, cần tính theo công suất đầu vào, hệ số công suất, hiệu suất và dòng danh định trên nhãn. Dòng khởi động có thể lớn hơn dòng chạy ổn định.'},
 {h:'Không cộng bừa công suất rồi chọn aptomat',p:'Phải xem thiết bị có hoạt động đồng thời không, dòng liên tục hay ngắn hạn, tiết diện và cách đi dây, độ sụt áp, điều kiện môi trường, khả năng cắt ngắn mạch và hệ thống bảo vệ rò điện. Bảng công suất thiết bị chỉ là bước đầu, không thay được thiết kế điện.'},
 {h:'Ví dụ căn hộ giả định',p:'Một căn hộ có mạch chiếu sáng, mạch ổ cắm sinh hoạt, mạch ổ bếp, mạch điều hòa và mạch bình nước nóng. Đây là sơ đồ chức năng, không phải khuyến nghị số aptomat hay tiết diện dây cho nhà thật. Mỗi mạch có đặc điểm tải và môi trường khác nhau: bình nóng lạnh còn cần chú ý nước, nối đất và bảo vệ dòng dư.'}
 ],takeaways:['Chia mạch giúp bảo vệ và cô lập khu vực.','Dòng hoạt động phải tính theo đặc tính tải thực.','Chọn dây/MCB là bài toán phối hợp hệ thống, không chỉ tính P/U.'],question:{q:'Lợi ích lớn của việc chia nhánh trong nhà là gì?',choices:['Mọi dây đều không cần cách điện','Giúp cô lập, bảo vệ và quản lý từng nhóm tải','Không cần aptomat tổng nữa','Biến 220 V thành 12 V'],correct:1,why:'Mạch nhánh cho phép tổ chức tải và bảo vệ phù hợp, hạn chế phạm vi ảnh hưởng của sự cố.'}
},
{
 id:17,part:4,title:'Điện giật: dòng điện đi qua cơ thể',time:22,diagram:'shock',subtitle:'Nguy hiểm nằm ở đường dòng, thời gian và điều kiện tiếp xúc.',
 goal:'Giải thích điện giật bằng đường dẫn dòng điện và cách phòng ngừa nhiều lớp.',
 sections:[
 {h:'Con người có thể trở thành một phần của mạch',p:'Cơ thể chứa nước và các ion nên có khả năng dẫn điện. Nếu hai phần cơ thể chạm vào hai điểm có chênh lệch điện thế, một dòng điện có thể chạy qua người. Dòng đi từ tay này sang tay kia, tay xuống chân hoặc qua vùng ngực có thể đặc biệt nguy hiểm.\n\nKhông có mức “chạm điện thử một chút” an toàn để người mới kiểm chứng. Điện áp tiếp xúc, điện trở da, độ ẩm, thời gian và đường dòng đều ảnh hưởng mức nguy hiểm.'},
 {h:'Vì sao chân ướt nguy hiểm hơn?',p:'Da ướt hoặc tổn thương thường giảm điện trở tiếp xúc, tạo điều kiện cho dòng qua cơ thể lớn hơn khi có cùng điện áp. Nền dẫn điện và môi trường ẩm cũng có thể thay đổi đường dòng. Bởi vậy phòng tắm, sân ướt và khu giặt cần được xem xét bảo vệ điện đặc biệt.'},
 {h:'Aptomat thường có chống giật không?',p:'MCB thường bảo vệ quá dòng, không phải dòng qua người ở mức thấp. RCD/RCBO được lắp và thử đúng có thể giảm nguy cơ trong nhiều tình huống rò điện, nhưng không thay thế cách điện, che chắn, nối đất và quy tắc không chạm vào phần có điện. Đặc biệt RCD có thể không tác động nếu chạm đồng thời L và N mà dòng không rò khỏi mạch.'},
 {h:'Nếu có người bị điện giật',p:'Không chạm trực tiếp vào nạn nhân khi chưa bảo đảm nguồn nguy hiểm đã được ngắt. Ưu tiên ngắt điện từ vị trí an toàn, gọi cấp cứu 115 và nhờ người có chuyên môn hỗ trợ. Sau khi bảo đảm hiện trường an toàn, thực hiện sơ cứu/CPR nếu đã được huấn luyện và có chỉ định. Không kéo bằng tay trần hoặc dùng nước xử lý.'}
 ],takeaways:['Điện giật liên quan dòng điện qua người, không chỉ nhãn V.','Da ướt làm nguy cơ tăng.','Bảo vệ cần nhiều lớp; RCD không bảo đảm an toàn tuyệt đối.'],question:{q:'Vì sao môi trường ẩm thường làm tăng nguy cơ điện giật?',choices:['Da ướt thường có điện trở tiếp xúc thấp hơn','Dòng AC biến thành DC','Ổ cắm tự tăng tần số','PE biến mất khỏi mạng điện'],correct:0,why:'Độ ẩm có thể giảm điện trở đường dòng qua cơ thể, làm mức dòng nguy hiểm tăng trong cùng điều kiện điện áp.'},caution:'Không thử cảm giác “tê” để kiểm tra rò điện. Nếu có người điện giật, ưu tiên cách ly nguồn an toàn và gọi 115.'
},
{
 id:18,part:4,title:'Quá tải, ngắn mạch, rò và hồ quang',time:24,diagram:'faults',subtitle:'Bốn loại sự cố cần phân biệt tuyệt đối.',
 goal:'Phân loại lỗi theo cơ chế vật lý và bảo vệ thường phù hợp.',
 sections:[
 {h:'Quá tải: dòng làm việc quá lớn',p:'Đường mạch vẫn đúng nhưng tổng tải lớn hơn mức cho phép. Một dây hoặc mối nối phải mang dòng lớn trong thời gian dài có thể nóng quá mức. Thiết bị bảo vệ quá dòng đúng thiết kế nhằm ngắt trước khi điều kiện nhiệt trở nên nguy hiểm.'},
 {h:'Ngắn mạch: đường dẫn lỗi có tổng trở thấp',p:'L và N hoặc hai phần khác điện thế tiếp xúc ngoài ý muốn do hỏng cách điện, lỗi đấu nối hay vật dẫn lọt vào. Dòng sự cố có thể rất lớn, gây nhiệt, lực điện từ và hồ quang. Chức năng ngắt nhanh của MCB/MCCB phù hợp có vai trò quan trọng.'},
 {h:'Rò điện: một phần dòng đi sai đường',p:'Dòng từ dây pha có thể đi qua vỏ kim loại và hệ thống nối đất hoặc qua vật dẫn khác khi cách điện hỏng. RCD/RCBO có thể phát hiện dòng dư đủ điều kiện. “Rò” không đồng nghĩa chắc chắn sẽ làm aptomat quá dòng nhảy.'},
 {h:'Hồ quang: điện phóng qua khoảng hở',p:'Hồ quang điện là dòng điện qua môi trường đã bị ion hóa, có thể xuất hiện tại tiếp điểm lỏng, dây hỏng hoặc ngắn mạch. Nó tạo nhiệt rất cao và có thể gây cháy. Một số hồ quang nối tiếp có dòng thấp, MCB và RCD thông thường không nhất thiết phát hiện được. Không tự ý tháo thử ổ khi nghe tiếng lép bép.'}
 ],takeaways:['Quá tải là nhiều dòng trên đường làm việc đúng.','Ngắn mạch là đường lỗi tổng trở thấp.','Rò điện và hồ quang có cơ chế khác nhau, yêu cầu kiểm tra phù hợp.'],question:{q:'Ổ cắm xém đen, phát tiếng lép bép nhưng MCB không nhảy. Lỗi nào vẫn có thể xảy ra?',choices:['Tiếp xúc kém gây hồ quang','Nguồn AC chuyển thành pin','Dòng điện bắt buộc bằng 0','Máy biến áp chắc chắn mất lõi sắt'],correct:0,why:'Tiếp xúc lỏng có thể gây hồ quang và nhiệt cục bộ mà dòng chưa đủ lớn để MCB ngắt.'}
},
{
 id:19,part:4,title:'Nối đất, cách điện và bảo vệ nhiều lớp',time:22,diagram:'earth',subtitle:'PE có ý nghĩa gì khi vỏ máy bị chạm điện?',
 goal:'Hiểu bảo vệ cơ bản, bảo vệ khi sự cố và phối hợp thiết bị.',
 sections:[
 {h:'Lớp một: ngăn chạm vào phần mang điện',p:'Cách điện của dây và linh kiện, vỏ che, khoảng cách an toàn và thiết kế chống tiếp xúc trực tiếp là tuyến bảo vệ đầu tiên. Thiết bị lớp II thường có cách điện kép hoặc tăng cường, có biểu tượng hai hình vuông lồng nhau và không dùng PE theo cách của thiết bị lớp I.'},
 {h:'Lớp hai: khi cách điện bị hỏng',p:'Với thiết bị lớp I có vỏ kim loại cần nối đất bảo vệ, PE tạo đường bảo vệ cho dòng sự cố trong hệ thống được thiết kế phù hợp, hỗ trợ thiết bị bảo vệ tự ngắt nguồn. Vai trò chi tiết phụ thuộc hệ thống TT, TN và các điều kiện nối đất. Một dây xanh-vàng nối vào tường tùy tiện không tạo thành hệ thống PE đạt chuẩn.'},
 {h:'Lớp ba: bổ sung bảo vệ bằng dòng dư',p:'RCD/RCBO với thông số phù hợp có thể bổ sung bảo vệ, nhất là trong môi trường tăng nguy cơ. Nhưng không thể dùng “có chống giật” để bỏ dây PE hoặc bỏ qua việc che chắn, sử dụng đúng thiết bị.'},
 {h:'Ba sai lầm tuyệt đối tránh',p:'Không cắt bỏ chân tiếp địa ở phích cắm thiết bị cần PE. Không dùng đường ống nước, lan can hoặc đường khí đốt làm tiếp địa tự chế. Không nối cầu N–PE tùy ý ở ổ cắm. Đánh giá nối đất cần thiết bị đo và người hiểu cấu hình nguồn của công trình.'}
 ],takeaways:['Cách điện bảo vệ trước khi sự cố xảy ra.','PE giúp giảm nguy cơ khi chạm vỏ trong hệ thống được thiết kế đúng.','RCD là bảo vệ bổ sung, không thay PE hoặc cách điện.'],question:{q:'Thấy ổ 3 lỗ trong nhà, kết luận nào an toàn nhất?',choices:['Chắc chắn PE được nối tốt','Chắc chắn mọi máy đều chống giật','Phải kiểm tra hệ thống tiếp địa thực tế','Có thể nối N với PE tại ổ'],correct:2,why:'Hình dạng ổ cắm không chứng minh tình trạng dây PE hoặc hiệu quả của hệ thống bảo vệ.'},caution:'Không tự chế dây tiếp địa hoặc cầu nối N–PE. Hệ thống tiếp địa cần thiết kế, đo kiểm và nghiệm thu phù hợp.'
},
{
 id:20,part:4,title:'Chẩn đoán: mất điện, ổ nóng, đèn nháy',time:23,diagram:'diagnose',subtitle:'Dùng cây nguyên nhân thay vì đoán mò.',
 goal:'Tạo quy trình suy luận không cần chạm dây mang điện.',
 sections:[
 {h:'Tìm từ triệu chứng đến nguyên nhân',p:'“Đèn không sáng” có thể do nguồn, mạch bảo vệ, công tắc, đui đèn, bộ nguồn LED hoặc bóng. “Ổ không có điện” có thể do mạch nhánh ngắt, điểm nối hỏng, cơ cấu ổ bị hỏng. Một triệu chứng hiếm khi chỉ có một nguyên nhân. Cách tốt hơn là đặt giả thuyết theo từng mắt xích của chuỗi cấp điện.'},
 {h:'Phân biệt mất điện toàn nhà và một phần',p:'Nếu cả nhà mất điện, có thể là mất nguồn bên ngoài, thiết bị tổng tác động hoặc vấn đề nguồn vào. Nếu chỉ một nhóm ổ mất điện, mạch nhánh liên quan đáng được xem xét. Có thể quan sát đèn báo ngoài tủ, xem thông tin mất điện khu vực và đọc nhãn mà không mở nắp tủ hoặc đụng tới dây.'},
 {h:'Ổ nóng, đổi màu, mùi khét',p:'Đây là dấu hiệu cần ưu tiên phòng cháy, không phải lúc để thử thêm thiết bị xem “có sao không”. Ngừng sử dụng, cách ly nguồn nếu có thể làm an toàn, tránh chạm vào phần bị nóng/cháy và gọi người có chuyên môn. Khi sửa cần đánh giá cả phích, ổ, đầu cực, dây nguồn và tải; thay mỗi mặt ổ có thể chưa giải quyết nguyên nhân.'},
 {h:'Aptomat nhảy nhiều lần',p:'Aptomat bảo vệ quá dòng có thể tác động do quá tải hoặc ngắn mạch. Thiết bị dòng dư có thể tác động do rò, lỗi nối dây hoặc bản thân thiết bị. Xem loại thiết bị và thời điểm nhảy giúp đặt giả thuyết, nhưng không thay việc đo kiểm. Không cố bật lặp đi lặp lại hoặc giữ cần gạt.'}
 ],takeaways:['Suy luận theo chuỗi: nguồn → bảo vệ → dây → điều khiển → tải.','Quan sát bên ngoài khác với mở và đo mạch.','Ổ xém/nóng cần dừng sử dụng trước khi tìm nguyên nhân.'],question:{q:'Aptomat nhánh thường xuyên nhảy sau khi bật thêm bếp điện. Suy luận nào hợp lý?',choices:['Có thể tổng dòng vượt mức mạch','Tất cả dây đều chắc chắn bị đứt','Bếp làm nguồn đổi tần số','Cần lắp aptomat lớn hơn ngay'],correct:0,why:'Tải mới có thể làm dòng tổng vượt khả năng mạch; cần đánh giá toàn bộ tải và mạch trước khi xử lý.'}
},
{
 id:21,part:4,title:'Quy trình an toàn: khi nào phải dừng?',time:21,diagram:'safety',subtitle:'Biết giới hạn năng lực còn quan trọng hơn biết cầm tua vít.',
 goal:'Nhớ cách cô lập, xác nhận mất điện và ngưỡng gọi chuyên gia.',
 sections:[
 {h:'Nguyên tắc số một: làm việc trên mạch đã cách ly',p:'Trước mọi thao tác trên dây cố định, phải xác định đúng mạch và tất cả nguồn cấp có thể có, cô lập bằng thiết bị phù hợp, ngăn đóng điện lại, và xác nhận mất điện tại nơi làm việc. Chỉ gạt aptomat xuống không đủ chứng minh điện đã hết. Nguồn UPS, máy phát hoặc điện mặt trời có thể tạo tình huống cấp ngược.'},
 {h:'Xác nhận mất điện như thế nào về mặt nguyên tắc?',p:'Người có năng lực dùng bộ chỉ thị điện áp hai cực phù hợp để kiểm tra giữa các dây liên quan và với bảo vệ/đất theo quy trình, đồng thời kiểm tra dụng cụ trên nguồn thử phù hợp trước và sau (live–dead–live). Bút dò không tiếp xúc và tua vít thử điện một cực không đủ làm bằng chứng duy nhất. Đây là kỹ năng nên được huấn luyện trực tiếp trước khi tự thao tác.'},
 {h:'Những việc người mới không tự làm',p:'Không làm việc khi đang có điện; không mở phần đầu cực nguồn vào tủ tổng; không tự cải tạo tiếp địa, đường điện ba pha, dây âm tường không rõ nguồn, mạng điện ngập/ẩm hoặc hệ thống điện mặt trời/UPS. Không tự xử lý ổ cháy, dây giòn, thiết bị chống giật tác động bất thường khi chưa kiểm tra.'},
 {h:'Nhận biết tình huống khẩn cấp',p:'Khói, mùi khét mạnh, tia lửa, âm thanh nổ, vỏ thiết bị có điện hoặc người bị điện giật đều là dấu hiệu cần dừng ngay. Cô lập nguồn nếu an toàn, tránh tiếp xúc và gọi dịch vụ phù hợp. Có cháy đang phát triển thì báo cháy 114 và di chuyển đến nơi an toàn; cấp cứu y tế 115.'}
 ],takeaways:['Cắt nguồn ≠ đã xác nhận hết điện.','Không dùng bút thử điện một cực làm bằng chứng mất điện.','Biết dừng đúng lúc là một kỹ năng điện dân dụng cốt lõi.'],question:{q:'Sau khi gạt aptomat nhánh về OFF, bước nào vẫn cần trước khi chạm vào dây?',choices:['Tin rằng đèn đã tắt là đủ','Xác nhận mất điện bằng quy trình và dụng cụ phù hợp','Dùng tay thử dây nguội','Gạt bật lại để kiểm tra tia lửa'],correct:1,why:'Trạng thái cần gạt không bảo đảm không có điện hoặc không có nguồn cấp khác; phải xác nhận tại vị trí thao tác.'},caution:'Đây là nội dung an toàn định hướng, không thay khóa huấn luyện thực hành kiểm tra mất điện.'
},
{
 id:22,part:5,title:'Dụng cụ điện: biết chức năng trước khi mua',time:20,diagram:'tools',subtitle:'Đừng mua dụng cụ chỉ vì thợ trên mạng đang dùng.',
 goal:'Hiểu vai trò tua vít cách điện, kìm, dụng cụ tuốt dây và kiểm tra điện áp.',
 sections:[
 {h:'Dụng cụ cơ khí khác dụng cụ kiểm tra điện',p:'Tua vít dùng mở/vặn vít đúng cỡ; kìm cắt/tuốt dùng chuẩn bị dây đã cô lập; dụng cụ bấm cos tạo đầu nối khi được thiết kế phù hợp. Vỏ cách điện của tua vít hoặc kìm không biến việc sửa điện sống thành an toàn. Dụng cụ đo và kiểm tra điện có tiêu chuẩn, cấp đo và cách sử dụng riêng.'},
 {h:'Bút thử điện một cực có giới hạn gì?',p:'Bút thử điện kiểu đèn neon và bút dò không tiếp xúc có thể cho dấu hiệu sơ bộ tại một số điều kiện, nhưng cũng có thể báo sai hoặc không báo khi vẫn nguy hiểm. Chúng không thay được thiết bị xác nhận mất điện hai cực và quy trình cô lập đúng.'},
 {h:'Bộ kiểm tra điện áp hai cực',p:'Thiết bị hai cực được thiết kế để đo/nhận biết hiệu điện thế giữa hai điểm. Để xác nhận mất điện an toàn, người được đào tạo kiểm tra tình trạng thiết bị, thử trên bộ chứng minh hoạt động hoặc nguồn phù hợp, kiểm tra đúng các cặp điểm và thử lại sau. Từng bước có quy định kỹ thuật chi tiết.'},
 {h:'Chọn đồ theo tiêu chuẩn, không theo vẻ ngoài',p:'Dụng cụ phải phù hợp điện áp và môi trường, có dấu hiệu chứng nhận thích hợp từ nhà sản xuất tin cậy. Cách điện bị nứt, đầu dò hỏng, dây đo sờn hoặc đồng hồ sai cấp sử dụng đều nguy hiểm. Dụng cụ dùng để đo điện sống đòi hỏi kiến thức và đào tạo, không phải thử cho biết.'}
 ],takeaways:['Dụng cụ cách điện không cho phép tùy ý sửa khi có điện.','Bút thử điện một cực không xác nhận được mất điện an toàn.','Dụng cụ cần đúng chức năng, định mức và tình trạng.'],question:{q:'Dụng cụ nào là lựa chọn phù hợp hơn để xác nhận mất điện theo quy trình chuyên môn?',choices:['Tua vít kiểm tra một cực','Bút dò không tiếp xúc duy nhất','Thiết bị chỉ thị điện áp hai cực phù hợp','Đầu ngón tay khô'],correct:2,why:'Thiết bị hai cực phù hợp và quy trình kiểm tra trước–sau là phương pháp được hướng dẫn trong các tài liệu an toàn điện.'}
},
{
 id:23,part:5,title:'Đồng hồ vạn năng và giới hạn phép đo',time:24,diagram:'meter',subtitle:'Tại sao đo điện trở và đo điện áp là hai phép đo rất khác?',
 goal:'Biết các núm V~, V⎓, Ω, thông mạch và rủi ro chọn sai cổng.',
 sections:[
 {h:'Đồng hồ vạn năng đo cái gì?',p:'Multimeter có thể đo điện áp AC/DC, điện trở, thông mạch và nhiều đại lượng khác tùy model. Ở chế độ đo V, đồng hồ đo chênh lệch điện thế giữa hai đầu đo. Ở chế độ Ω, máy tự dùng nguồn nhỏ bên trong để suy ra điện trở. Bởi vậy không đo Ω hoặc thông mạch trên một mạch đang có điện.'},
 {h:'Vì sao chọn sai chế độ rất nguy hiểm?',p:'Ở chế độ đo dòng A, đồng hồ thường có điện trở nội rất thấp và phải được dùng đúng cách theo thiết kế. Nếu đặt đồng hồ ở chế độ A và cắm trực tiếp giữa L và N, có thể tạo ngắn mạch nguy hiểm. Chọn sai lỗ cắm que đo, sai cấp CAT, sai phạm vi hoặc đầu dò hư cũng có thể gây tai nạn.'},
 {h:'CAT đo điện nghĩa là gì?',p:'Các cấp CAT theo IEC mô tả môi trường đo và khả năng chịu xung quá áp của dụng cụ trong điều kiện quy định. Không thể chỉ nhìn chữ “1000 V” để cho rằng đồng hồ phù hợp mọi vị trí. Đo tại tủ phân phối có yêu cầu khác với đo đầu ra mạch điện tử thấp áp.'},
 {h:'Thứ tự học thực hành',p:'Bắt đầu với mạch pin thấp áp, đèn LED/bóng đèn tương thích và điện trở phù hợp, không dùng trực tiếp 220 V. Học đọc đơn vị, chọn chế độ, đọc giá trị và so sánh với tính toán trước. Sau đó mới học kiểm tra lưới điện trong môi trường huấn luyện có giám sát.'}
 ],takeaways:['V đo chênh điện thế; Ω đo điện trở khi mạch đã cô lập.','Đo A sai cách có thể tạo ngắn mạch.','Phải hiểu CAT, giới hạn đầu dò và cổng đo.'],question:{q:'Đo điện trở Ω trên mạch vẫn đang có điện là thao tác như thế nào?',choices:['Được khuyến nghị để chính xác','Không phù hợp và nguy hiểm','Luôn làm aptomat tổng nhảy','Cách xác nhận dây PE tốt nhất'],correct:1,why:'Chế độ Ω dùng nguồn đo nội bộ và không được dùng trên mạch có điện; phải cô lập và xác nhận theo quy trình trước.'},caution:'Không thử đo điện áp tại ổ/tủ 220 V khi chưa được hướng dẫn sử dụng dụng cụ và các biện pháp an toàn.'
},
{
 id:24,part:5,title:'Đọc sơ đồ điện từ cơ bản đến sơ đồ đơn tuyến',time:23,diagram:'symbols',subtitle:'Đọc được ngôn ngữ của thợ điện thay vì nhìn dây như mê cung.',
 goal:'Phân biệt sơ đồ nguyên lý, bố trí và sơ đồ một sợi.',
 sections:[
 {h:'Sơ đồ nguyên lý mô tả quan hệ điện',p:'Các ký hiệu nguồn, dây, điểm nối, tải, công tắc và thiết bị bảo vệ diễn tả cách các phần tử tương tác. Nó không nhất thiết chỉ vị trí vật lý của dây đi trong tường. Trên sơ đồ, đường giao nhau không phải lúc nào cũng được nối: cần xem ký hiệu chấm nút hoặc quy ước bản vẽ.'},
 {h:'Sơ đồ bố trí mô tả vị trí thực tế',p:'Sơ đồ mặt bằng cho thấy đèn ở đâu, công tắc đặt chỗ nào, ổ cắm thuộc phòng nào, đường đi cáp dự kiến. Thực tế thi công có thể khác bản vẽ cũ; không được khoan tường dựa trên phỏng đoán vị trí dây điện.'},
 {h:'Sơ đồ đơn tuyến (single-line)',p:'Trong sơ đồ đơn tuyến, một nét đại diện cho một mạch hoặc nhóm dây, thuận tiện mô tả hệ thống từ nguồn tới các thiết bị bảo vệ và nhánh tải. Nhãn 1P, 2P, số A, ký hiệu RCD/MCB và cỡ cáp có thể được thể hiện để đọc thiết kế. Đây là biểu diễn lược giản, không đủ để tự suy ra mọi cực đấu nối.'},
 {h:'Cách đọc có trình tự',p:'Đầu tiên tìm nguồn; tiếp đó tìm thiết bị cách ly/bảo vệ; theo từng mạch nhánh đến tải. Đặt ba câu hỏi: nguồn cấp ở đâu, thiết bị nào bảo vệ mạch và điểm nào điều khiển tải? Nếu thiếu thông tin, đánh dấu chưa biết thay vì tự vẽ thêm một dây nối.'}
 ],takeaways:['Sơ đồ nguyên lý và sơ đồ mặt bằng trả lời câu hỏi khác nhau.','Sơ đồ đơn tuyến lược giản hệ thống.','Đọc từ nguồn đến thiết bị bảo vệ rồi tới tải.'],question:{q:'Sơ đồ đơn tuyến chủ yếu giúp hiểu điều gì?',choices:['Màu sơn của mọi ổ cắm','Cấu trúc phân phối nguồn và các mạch','Vị trí chính xác từng electron','Nhiệt độ ngoài trời'],correct:1,why:'Sơ đồ đơn tuyến cho thấy các cấp phân phối, bảo vệ và tải bằng biểu diễn giản lược.'}
},
{
 id:25,part:5,title:'Thay ổ cắm: từ cấu tạo đến đánh giá an toàn',time:26,diagram:'replace',subtitle:'Hiểu được việc thay thế tương đương và tại sao không thể chỉ bắt chước đấu màu.',
 goal:'Nắm quy trình kiểm soát rủi ro trước, trong và sau thay ổ cắm.',
 sections:[
 {h:'Trước khi đụng đến ổ',p:'Phải xác định công việc có thực sự là thay tương đương hay không: cùng loại nguồn, định mức, kiểu ổ, yêu cầu tiếp địa và cách đấu phù hợp. Ổ nóng/xém, dây cháy, dây nhôm lẫn dây đồng, ổ nhiều dây ra/vào hoặc mạch không rõ nguồn là trường hợp phải kiểm tra kỹ bởi người có chuyên môn.'},
 {h:'Cách ly và xác nhận không điện',p:'Xác định đầy đủ nguồn cấp, cô lập tại thiết bị phù hợp, chống đóng điện trở lại và dùng bộ kiểm tra hai cực theo quy trình trước–sau để xác nhận tất cả các điểm liên quan không còn điện áp. Đây là bước quyết định, không được thay bằng “tắt đèn thấy ổ không chạy” hoặc bút thử điện một cực.'},
 {h:'Nhìn cấu tạo ở mặt sau',p:'Trên ổ phù hợp có các đầu cực chức năng L, N và PE (nếu có) theo thiết kế của nhà sản xuất. Loại đầu nối vít và kẹp lò xo có yêu cầu chiều dài tuốt dây, số dây được phép kẹp, dạng dây và lực siết khác nhau. Dây phải được xác định bằng quy trình đáng tin cậy, không theo màu và không sao chép ổ cũ nếu chưa kiểm chứng.'},
 {h:'Sau khi lắp không chỉ là “có điện là xong”',p:'Người có chuyên môn còn kiểm tra độ chắc của đầu nối, khoảng hở cách điện, khả năng giữ dây, cực tính, liên tục dây bảo vệ, hiệu quả bảo vệ và các thử nghiệm phù hợp trước khi đưa vào sử dụng. Thay sai có thể vẫn làm thiết bị chạy nhưng để lại nguy cơ giật hoặc cháy. Khi chưa làm chủ quy trình xác nhận mất điện và các phép kiểm tra, chỉ nên thực hành trên mô hình nguồn thấp áp.'}
 ],takeaways:['Thay ổ phải đánh giá cả dây, đầu nối, định mức và PE.','Không đấu theo màu hoặc sơ đồ cũ chưa kiểm chứng.','Có điện sau lắp không chứng minh đã an toàn.'],question:{q:'Phát hiện dây bên trong ổ có vỏ giòn và dấu cháy, việc nào đúng nhất?',choices:['Chỉ thay mặt ổ nhựa','Quấn băng keo rồi dùng tiếp','Dừng và kiểm tra cả mạch bằng người có chuyên môn','Lắp aptomat lớn hơn'],correct:2,why:'Dây và đầu nối đã bị ảnh hưởng bởi nhiệt cần được đánh giá; thay riêng mặt ổ có thể để nguyên nguyên nhân sự cố.'},caution:'Không tự thay ổ nối với lưới 220 V nếu chưa được huấn luyện trực tiếp về cô lập, xác nhận mất điện và kiểm tra an toàn sau lắp.'
},
{
 id:26,part:5,title:'Công tắc đèn một chiều và hai vị trí',time:22,diagram:'switches',subtitle:'Phân biệt đường pha được điều khiển với dây trung tính liên tục.',
 goal:'Hiểu sơ đồ logic công tắc đơn và chuyển mạch hai vị trí.',
 sections:[
 {h:'Công tắc đơn về nguyên lý',p:'Một công tắc đơn đóng hoặc mở một đường dẫn. Với mạch đèn một pha được thiết kế chuẩn, công tắc đơn thường ngắt đường pha cấp đến đèn để giảm nguy cơ khi tắt. Tuy vậy trong nhà cũ có thể có các sơ đồ khác hoặc lỗi đấu nối; không được dựa vào vị trí công tắc để kết luận đui đèn hết điện.'},
 {h:'Hai công tắc điều khiển một đèn',p:'Hệ chuyển mạch hai vị trí dùng hai công tắc có tiếp điểm chung (COM) và hai ngả chuyển đổi (travellers). Sự kết hợp trạng thái hai công tắc quyết định đường dẫn đến tải có được khép kín hay không. Nguyên lý giống chọn một trong hai đường đi, không phải đơn giản mắc hai công tắc thường nối tiếp.'},
 {h:'Công tắc thông minh có đặc thù',p:'Một số loại cần dây trung tính ở hộp công tắc, một số loại hoạt động không cần N theo thiết kế riêng. Công suất tải tối thiểu, loại bóng LED, dòng rò nhỏ và cấu hình điện tử có thể gây chớp hoặc sáng mờ. Không được tự lấy dây PE làm dây N cho công tắc.'},
 {h:'Tư duy kiểm tra',p:'Nếu đèn không sáng, nên chia các khả năng thành nguồn cấp, thiết bị bảo vệ, công tắc, đầu nối, driver LED và bóng. Nếu nhiều vị trí điều khiển hoạt động lạ, cần đọc đúng sơ đồ của loại công tắc thay vì thử đảo dây ngẫu nhiên.'}
 ],takeaways:['Công tắc đơn làm đóng/mở đường mạch.','Điều khiển hai vị trí cần cơ cấu đảo chiều phù hợp.','Một số công tắc thông minh cần N, không được dùng PE thay N.'],question:{q:'Hai công tắc hai vị trí điều khiển một đèn thường sử dụng cơ cấu gì?',choices:['Hai bộ chuyển mạch có ngả lựa chọn','Hai điện trở nung nóng','Hai máy biến áp','Hai cầu chì thủy tinh'],correct:0,why:'Công tắc chuyển mạch chọn đường dẫn; hai trạng thái phối hợp để quyết định mạch cấp đèn kín hay hở.'}
},
{
 id:27,part:5,title:'Đèn, driver LED, quạt và thiết bị gia dụng',time:22,diagram:'appliances',subtitle:'Tháo được vỏ chưa đủ: phải hiểu thiết bị lấy và đổi năng lượng thế nào.',
 goal:'Nhận ra các khối chức năng của thiết bị và chọn mức can thiệp phù hợp.',
 sections:[
 {h:'Bóng LED và driver',p:'LED là linh kiện bán dẫn phát sáng khi có dòng phù hợp. Bóng LED dùng điện lưới thường có mạch driver chuyển đổi và ổn định dòng cho LED. Nhấp nháy có thể liên quan driver, chất lượng nguồn, công tắc điện tử hoặc tiếp xúc kém. Không tháo driver đang cấp điện; tụ bên trong có thể còn điện sau khi ngắt.'},
 {h:'Động cơ quạt và tải cảm',p:'Động cơ biến điện năng thành chuyển động dựa trên từ trường. Một số quạt dùng tụ làm việc, một số quạt DC/inverter dùng bộ điều khiển điện tử. Những linh kiện này khác điện trở thuần; dòng hoạt động và dòng khởi động có thể có đặc trưng riêng. Không tự chập, thay hoặc thử tụ khi chưa biết cách xả và kiểm tra an toàn.'},
 {h:'Thiết bị tạo nhiệt',p:'Bếp điện trở, bình nước nóng và bàn là biến điện năng thành nhiệt với công suất lớn. Chúng đòi hỏi tiếp điểm, phích, dây và bảo vệ được chọn phù hợp. Với bình nước nóng còn có yếu tố nước, tiếp địa, dòng dư và lắp đặt đúng quy chuẩn.'},
 {h:'Mức công việc phù hợp người mới',p:'Có thể học nhận diện nhãn thiết bị, đọc W/V/A, vệ sinh phần ngoài theo hướng dẫn nhà sản xuất khi thiết bị đã được rút phích và an toàn, hoặc thay bóng đèn theo hướng dẫn với nguồn được cô lập phù hợp. Việc can thiệp dây cố định, sửa mạch nguồn và tụ điện đòi hỏi thêm đào tạo và thiết bị kiểm tra.'}
 ],takeaways:['LED cần mạch điều khiển dòng; quạt dùng cơ chế từ trường.','Tụ điện có thể còn tích điện sau khi ngắt nguồn.','Thiết bị nước và nhiệt có rủi ro cao hơn cần đánh giá riêng.'],question:{q:'Vì sao tháo bộ nguồn LED ngay sau khi rút điện vẫn có thể nguy hiểm?',choices:['Trong mạch có thể còn tụ tích điện','Đèn tự tạo ra điện ba pha','Dây đồng biến thành vật cách điện','LED chứa bình nhiên liệu'],correct:0,why:'Tụ điện trong mạch nguồn có thể giữ điện tích trong một thời gian ngay cả sau khi nguồn ngoài đã được ngắt.'}
},
{
 id:28,part:6,title:'Mô phỏng căn hộ: theo dấu một kWh điện',time:26,diagram:'floorplan',subtitle:'Gắn tất cả khái niệm thành một hệ thống duy nhất.',
 goal:'Đọc cấu trúc điện căn hộ mẫu và liên hệ thiết bị, mạch, công suất.',
 sections:[
 {h:'Ngôi nhà giả định của khóa học',p:'Hãy hình dung căn hộ gồm phòng khách, hai phòng ngủ, bếp và phòng tắm. Tủ phân phối cấp các nhánh logic: đèn, ổ sinh hoạt, bếp, điều hòa, bình nước nóng. Trên sơ đồ mô phỏng, các nhánh chỉ thể hiện chức năng và không mặc định số dây, tiết diện hay loại bảo vệ.'},
 {h:'Theo dấu điện đến quạt',p:'Năng lượng đi từ mạng phân phối qua công tơ, tủ điện và mạch ổ cắm đến phích cắm quạt. Bên trong quạt, điện năng được chuyển hóa thành chuyển động và nhiệt. Nếu quạt 40 W dùng 5 giờ ở công suất trung bình này, điện năng là 0,2 kWh. Công tơ cộng điện năng của mọi tải theo thời gian.'},
 {h:'Đọc bản đồ theo tình huống',p:'Nếu đèn phòng ngủ không chạy nhưng ổ cắm hoạt động, suy luận đến mạch đèn, công tắc, bóng và đầu nối. Nếu cả căn hộ mất điện, xem xét nguồn vào và phần bảo vệ tổng. Nếu chỉ bình nước nóng tác động bảo vệ, có thể có lỗi riêng của mạch/thiết bị đó; không được vô hiệu hóa bảo vệ.'},
 {h:'Cái gì còn chưa biết?',p:'Sơ đồ căn hộ mẫu không cung cấp chính xác cấu hình nối đất, mức dòng ngắn mạch, loại cáp, chiều dài, điều kiện đi dây hay chọn lọc bảo vệ. Đó là các thông tin cần thiết trong thiết kế kỹ thuật thật. Người hiểu hệ thống biết phân biệt cái gì bản vẽ cho biết và cái gì chưa đủ dữ kiện.'}
 ],takeaways:['Năng lượng đi qua nhiều mắt xích trước khi đến tải.','Mỗi nhóm tải cần được xem theo nguồn cấp và nhánh tương ứng.','Sơ đồ chức năng không thay sơ đồ thi công.'],question:{q:'Một quạt sử dụng trung bình 40 W trong 5 giờ tiêu thụ bao nhiêu kWh?',choices:['0,02 kWh','0,2 kWh','2 kWh','20 kWh'],correct:1,why:'40 W = 0,04 kW; E = 0,04 × 5 = 0,2 kWh.'}
},
{
 id:29,part:6,title:'Tình huống tổng hợp: suy luận thay vì đoán',time:25,diagram:'logic',subtitle:'Biến triệu chứng thành giả thuyết có thể kiểm tra.',
 goal:'Dùng tư duy hệ thống trước một sự cố điện giả định.',
 sections:[
 {h:'Tình huống 1: ổ cắm vẫn cấp điện nhưng bị nóng',p:'Đừng kết luận “không sao vì aptomat chưa nhảy”. Khả năng gồm tiếp xúc giữa chân phích và ổ kém, đầu nối dây lỏng, sản phẩm không phù hợp tải, hoặc điều kiện tản nhiệt xấu. Vì có nguy cơ cháy, quyết định đầu tiên là ngừng sử dụng và cách ly nguồn nếu an toàn. Việc đo kiểm sau đó thuộc người có chuyên môn.'},
 {h:'Tình huống 2: bật bình nóng lạnh thì RCD nhảy',p:'Khả năng có rò điện từ bộ phận gia nhiệt, dây, hơi ẩm hoặc lỗi liên quan đường trung tính và bảo vệ. RCD có thể cũng bị hỏng hoặc lắp sai. Không được tháo dây PE hoặc bỏ RCD để bình chạy; phải giữ thiết bị ngừng dùng cho đến khi có kết quả kiểm tra.'},
 {h:'Tình huống 3: đèn LED sáng mờ khi đã tắt công tắc',p:'Có thể có dòng rất nhỏ qua công tắc có đèn báo, điện dung ký sinh trên đường dây hoặc mạch điều khiển LED. Nhưng cũng có thể đấu sai cực hoặc lỗi điện khác. Hiện tượng tương tự có nhiều cơ chế, cần kiểm tra sơ đồ và điều kiện thực tế; không tự đấu điện trở vào lưới để xử lý.'},
 {h:'Một quy trình tư duy chuẩn',p:'Bước 1: nhận diện nguy cơ khẩn cấp. Bước 2: mô tả triệu chứng (đâu, khi nào, kéo dài bao lâu). Bước 3: chia chuỗi thành nguồn–bảo vệ–dây–điều khiển–tải. Bước 4: liệt kê nhiều giả thuyết. Bước 5: chọn quan sát không xâm lấn trước. Bước 6: quyết định cần người có chuyên môn đo kiểm ở đâu.'}
 ],takeaways:['Một triệu chứng không chỉ có một nguyên nhân.','Phân tích nguy cơ trước tìm lỗi.','Không vô hiệu hóa PE, RCD hoặc tăng MCB để né vấn đề.'],question:{q:'Bình nóng lạnh khiến thiết bị chống dòng rò nhảy liên tục. Việc nào hợp lý nhất?',choices:['Tháo PE để tránh nhảy','Bỏ qua RCD và cấp điện trực tiếp','Ngừng dùng, yêu cầu kiểm tra sự cố','Bật đi bật lại đến khi không nhảy'],correct:2,why:'Thiết bị có thể rò điện nguy hiểm; cần xác định và sửa nguyên nhân thay vì vô hiệu hóa lớp bảo vệ.'}
},
{
 id:30,part:6,title:'Tổng kết: hệ thống tư duy & lộ trình thực hành',time:28,diagram:'roadmap',subtitle:'Từ người mới đến người hiểu và quản lý điện dân dụng an toàn.',
 goal:'Tổng hợp các nguyên lý cốt lõi và biết bước tiếp theo để thực hành an toàn.',
 sections:[
 {h:'Bức tranh tổng thể hoàn chỉnh',p:'Một hệ điện gia đình có nguồn năng lượng, hệ thống truyền và phân phối, thiết bị đo đếm, tủ bảo vệ, các mạch nhánh, điểm điều khiển và những thiết bị tiêu thụ. Vật lý điện giải thích vì sao có dòng và nhiệt; thiết kế điện giải thích tại sao chọn dây và bảo vệ; an toàn điện giải thích cách phòng ngừa lỗi khi hệ thống không còn lý tưởng.'},
 {h:'Mười câu hỏi kiểm tra trước một công việc',p:'Nguồn ở đâu? Có bao nhiêu nguồn? Mạch nào cấp? Có dây bảo vệ không? Dòng tải là bao nhiêu? Dây có chịu được không? Thiết bị bảo vệ là loại nào? Có dấu hiệu nhiệt hoặc ẩm không? Có xác nhận mất điện đúng quy trình chưa? Sau khi làm cần kiểm tra gì để chứng minh an toàn? Nếu không trả lời được các câu then chốt thì chưa nên làm.'},
 {h:'Phân cấp công việc',p:'Cấp xanh: học lý thuyết, đọc nhãn, tính kWh, phân tích sơ đồ, quan sát mặt ngoài thiết bị. Cấp vàng: bài thực hành trên mô hình pin thấp áp và dụng cụ cơ khí; sau huấn luyện trực tiếp có thể xét công việc thay thế tương đương trong điều kiện kiểm soát. Cấp đỏ: tủ điện, tiếp địa, dây cháy, cấp nguồn nhiều nơi, ba pha, điện ẩm ướt, tăng tải, cải tạo âm tường — cần người có chuyên môn và đo kiểm.'},
 {h:'Cách duy trì kiến thức',p:'Lưu các thuật ngữ khó ở Từ điển, dùng công cụ tính công suất và điện năng để ước lượng, làm câu hỏi cuối bài, xem bản đồ kiến thức khi bị lạc chủ đề. Ghi chú điều mình chưa hiểu trước khi học bài tiếp theo. Kỹ năng điện bền vững đến từ việc hiểu cơ chế, không phải thuộc một ảnh đấu dây.'}
 ],takeaways:['Hiểu đủ từ vật lý → sơ đồ → bảo vệ → sự cố.','Luôn đánh giá rủi ro trước thao tác.','Thực hành trên điện lưới chỉ khi đã có kỹ năng và điều kiện kiểm tra an toàn.'],question:{q:'Tư duy nào phù hợp nhất trước khi sửa một ổ điện có dấu cháy?',choices:['Thay ổ trước rồi tính sau','Thử kéo thêm tải để tìm lỗi','Cô lập an toàn, đánh giá nguyên nhân cả chuỗi và nhờ kiểm tra phù hợp','Gắn aptomat lớn hơn'],correct:2,why:'Cháy xém có thể do tiếp xúc kém và hư hại dây; sửa đúng phải xác định và giải quyết cả nguyên nhân lẫn hậu quả.'}
}
];
const GLOSSARY = [
 ['AC','Dòng điện xoay chiều: hướng và biên độ dòng có thể đổi tuần hoàn.'],
 ['DC','Dòng điện một chiều: hướng dòng điện thường không đổi.'],
 ['Điện tích','Thuộc tính vật lý của hạt, có thể dương hoặc âm; đơn vị C.'],
 ['Electron','Hạt mang điện tích âm, tham gia dẫn điện trong kim loại.'],
 ['Điện trường','Trường tạo lực lên điện tích; giúp giải thích chuyển động của điện tích.'],
 ['Điện áp (V)','Chênh lệch điện thế giữa hai điểm, đơn vị volt.'],
 ['Dòng điện (A)','Tốc độ điện tích qua tiết diện, đơn vị ampere.'],
 ['Điện trở (Ω)','Đại lượng cản trở dòng điện; ohm.'],
 ['Công suất (W)','Tốc độ chuyển hóa năng lượng; watt.'],
 ['Điện năng (kWh)','Lượng điện năng: 1 kWh = 1.000 W × 1 giờ.'],
 ['RMS','Giá trị hiệu dụng của đại lượng biến thiên, liên hệ tác dụng tạo nhiệt.'],
 ['Tần số (Hz)','Số chu kỳ trong một giây, đơn vị hertz.'],
 ['Hệ số công suất','Tỉ số công suất tác dụng/công suất biểu kiến; với dạng sin thường là cosφ.'],
 ['L (Line)','Dây pha, có điện áp so với trung tính/đất tùy hệ thống.'],
 ['N (Neutral)','Dây trung tính, có thể mang dòng làm việc.'],
 ['PE','Dây dẫn bảo vệ, không dùng làm dây mang dòng tải thông thường.'],
 ['Mạch kín','Đường dẫn điện liên tục cho dòng điện làm việc.'],
 ['Mạch hở','Đường dẫn bị gián đoạn; tải có thể ngừng hoạt động.'],
 ['Nối tiếp','Các phần tử nằm trên cùng đường dòng điện.'],
 ['Song song','Các nhánh kết nối giữa cùng hai nút điện.'],
 ['Quá tải','Dòng vận hành vượt khả năng được thiết kế của mạch.'],
 ['Ngắn mạch','Đường dẫn lỗi tổng trở rất thấp giữa các điểm khác điện thế.'],
 ['Rò điện','Một phần dòng điện đi ngoài đường làm việc dự định.'],
 ['Hồ quang','Dòng điện đi qua môi trường bị ion hóa; có thể sinh nhiệt lớn.'],
 ['MCB','Aptomat tép bảo vệ quá dòng: quá tải, ngắn mạch.'],
 ['RCCB','Thiết bị ngắt dòng dư; không tích hợp bảo vệ quá dòng.'],
 ['RCBO','Thiết bị ngắt kết hợp quá dòng và dòng dư.'],
 ['RCD','Tên chung của thiết bị bảo vệ dòng dư.'],
 ['Dòng định mức','Mức dòng danh định ghi trên thiết bị với điều kiện sử dụng quy định.'],
 ['Tiết diện mm²','Diện tích mặt cắt vật liệu dẫn điện, không phải đường kính.'],
 ['Sụt áp','Chênh lệch điện áp do tổng trở dây và dòng tải.'],
 ['Tiếp địa','Hệ thống nối đất phục vụ an toàn/chức năng phù hợp thiết kế.'],
 ['Cách điện','Vật liệu/cấu trúc hạn chế dòng điện đi sai đường.'],
 ['Cấp bảo vệ I','Thiết bị thường cần nối PE cho phần kim loại có thể chạm.'],
 ['Cấp bảo vệ II','Thiết bị có cách điện kép hoặc tăng cường, ký hiệu hai hình vuông.'],
 ['CAT đo điện','Phân loại điều kiện quá áp và môi trường dùng dụng cụ đo.'],
 ['Vôn kế','Thiết bị đo chênh lệch điện áp.'],
 ['Đồng hồ vạn năng','Dụng cụ đo V, Ω, A và nhiều đại lượng tùy loại.'],
 ['Sơ đồ đơn tuyến','Biểu diễn giản lược hệ thống cấp điện bằng một đường cho một mạch.'],
 ['Driver LED','Mạch điện tử điều khiển nguồn/dòng cấp cho LED.'],
 ['Bộ biến áp','Thiết bị dùng cảm ứng điện từ thay đổi mức điện áp AC.'],
 ['Công tơ','Thiết bị đo lượng điện năng sử dụng qua thời gian.']
];
