const DG={ink:'#25344a',muted:'#61738a',blue:'#4285e9',brown:'#bc712e',green:'#159b7e',amber:'#eba635',red:'#e26a55',pale:'#e8f1f8',slate:'#dae5ed'};
const S=(x,y,t,sz=18,color=DG.ink,weight=600,anchor='middle')=>`<text x="${x}" y="${y}" font-size="${sz}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}" font-family="system-ui,Arial,sans-serif">${t}</text>`;
const R=(x,y,w,h,c='#fff',r=13,stroke='#c2d0da')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}" stroke="${stroke}" stroke-width="2"/>`;
const L=(x1,y1,x2,y2,c=DG.blue,w=5,d='')=>`<path d="M${x1} ${y1} L${x2} ${y2}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${d?`stroke-dasharray="${d}"`:''}/>`;
const P=(d,c=DG.blue,w=4,dash='')=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const C=(x,y,r=18,fill='#fff',stroke=DG.blue)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
const B=(x,y,w,h,title,sub='',fill='#e9f2f7')=>R(x,y,w,h,fill)+S(x+w/2,y+h/2-(sub?4:-6),title,19)+ (sub?S(x+w/2,y+h/2+22,sub,13,DG.muted,500):'');
const A=(x1,y1,x2,y2,c=DG.blue)=>L(x1,y1,x2,y2,c,4)+`<path d="M${x2-11} ${y2-7} L${x2} ${y2} L${x2-11} ${y2+7}" stroke="${c}" stroke-width="3" fill="none" transform="rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI} ${x2} ${y2})"/>`;
const source=(x,y)=>R(x,y,108,105,'#e9f2fb')+S(x+54,y+35,'NGUỒN',18)+S(x+54,y+69,'220 V~',21,DG.blue,700);
const bulb=(x,y,on=true)=>C(x,y,27,on?'#fff0bd':'#f0f3f6',on?DG.amber:'#8291a0')+P(`M${x-10} ${y-10} L${x+10} ${y+10} M${x+10} ${y-10} L${x-10} ${y+10}`,on?DG.amber:'#8291a0',3);
const wireKey=(x,y)=>`${L(x,y,x+37,y,DG.brown,6)}${S(x+48,y+5,'L',16,DG.brown,700,'start')}${L(x+90,y,x+127,y,DG.blue,6)}${S(x+138,y+5,'N',16,DG.blue,700,'start')}${L(x+180,y,x+217,y,DG.green,6)}${S(x+228,y+5,'PE',16,DG.green,700,'start')}`;
function diagramSVG(type){let q='';const heading={grid:'Điện từ hệ thống quốc gia tới thiết bị',atom:'Từ nguyên tử đến dòng điện',ohm:'Điện áp – Dòng điện – Điện trở',wave:'Dạng sóng AC 50 Hz',power:'Công suất và điện năng',wires:'Ba dây điện và ba chức năng',circuit:'Mạch kín, hở và ngắn mạch',parallel:'Nối tiếp và song song',socket:'Bên trong công tắc và ổ cắm',phases:'Một pha và ba pha',cable:'Bên trong dây điện',outlet:'Giới hạn của chuỗi cấp điện',mcb:'Hai cơ chế bên trong MCB',rcd:'So sánh dòng qua L và N',panel:'Bản đồ tủ điện căn hộ',loads:'Chia nhóm tải theo mạch',shock:'Dòng điện qua cơ thể',faults:'Bốn cơ chế sự cố',earth:'Ba lớp bảo vệ',diagnose:'Suy luận theo chuỗi',safety:'Quy trình an toàn điện',tools:'Dụng cụ và chức năng',meter:'Đồng hồ vạn năng',symbols:'Ba loại sơ đồ điện',replace:'Vòng kiểm tra thay thế ổ cắm',switches:'Công tắc đơn và đảo chiều',appliances:'Bên trong thiết bị',floorplan:'Hệ điện căn hộ mô phỏng',logic:'Cây phân tích triệu chứng',roadmap:'Bức tranh điện dân dụng'}[type]||'Minh họa nguyên lý';
switch(type){
case 'grid':
q=B(22,83,155,105,'Nhà máy','Điện năng','#e7f0fa')+B(239,83,155,105,'Truyền tải','Điện áp cao','#eaf4fd')+B(455,83,155,105,'Biến áp','Phân phối','#eaf4fd')+B(672,83,155,105,'Căn hộ','Tủ → tải','#e2f7ee')+A(177,135,227,135)+A(395,135,445,135)+A(610,135,660,135)+S(430,248,'Ổ cắm là điểm kết nối, không phải nơi tạo ra điện.',20,DG.muted,500);break;
case 'atom':
q=C(177,147,46,'#fff0c7',DG.amber)+S(177,155,'+',30,DG.brown)+`<ellipse cx="177" cy="147" rx="110" ry="55" fill="none" stroke="#91adcb" stroke-width="3" transform="rotate(35 177 147)"/><ellipse cx="177" cy="147" rx="110" ry="55" fill="none" stroke="#91adcb" stroke-width="3" transform="rotate(-35 177 147)"/>`+C(87,93,13,DG.blue,DG.blue)+C(266,94,13,DG.blue,DG.blue)+S(177,265,'Nguyên tử (mô hình đơn giản)',18,DG.muted,500)+B(413,90,380,104,'Dây đồng + điện trường','Dòng điện có hướng','#e8f6f2')+P('M450 217 H761',DG.blue,6)+A(477,217,553,217,DG.blue)+A(582,217,659,217,DG.blue)+A(677,217,739,217,DG.blue)+S(607,257,'Tín hiệu lan truyền nhanh',18,DG.muted,500);break;
case 'ohm':
q=B(35,85,220,120,'U · Volt','Chênh lệch điện thế','#e5efff')+B(321,85,220,120,'I · Ampere','Dòng điện tích','#e7f7f0')+B(607,85,220,120,'R · Ohm','Mức cản trở','#fff0df')+S(430,261,'U = I × R  ·  áp dụng với phần tử thuần trở',23,DG.ink,700)+L(255,145,306,145,DG.slate)+L(541,145,592,145,DG.slate);break;
case 'wave':{
q=P('M63 74 V253 H794',DG.slate,3)+L(57,163,802,163,'#9aaebe',2,'8 8');let d='';for(let x=63;x<=794;x+=4){const y=163-75*Math.sin((x-63)/731*Math.PI*4);d+=(x===63?'M':'L')+x+' '+y+' ';}q+=P(d,DG.blue,5)+S(78,62,'Điện áp',17,DG.muted,500)+S(735,284,'Thời gian',17,DG.muted,500)+S(430,58,'50 Hz = 50 chu kỳ / giây',21,DG.ink)+S(430,304,'220 V là giá trị hiệu dụng (RMS)',20,DG.blue);break;}
case 'power':
q=B(30,84,214,126,'Đèn LED','10 W','#e9f3ff')+B(322,84,214,126,'Bếp điện','2.000 W','#fff1db')+B(616,84,214,126,'Công tơ','Tính kWh','#e5f8ed')+S(430,264,'Điện năng (kWh) = kW × số giờ sử dụng',23,DG.ink,700)+A(245,146,304,146,DG.slate)+A(537,146,596,146,DG.slate);break;
case 'wires':
q=[['L','Dây pha','Đường cấp làm việc',DG.brown,82],['N','Dây trung tính','Đường về làm việc',DG.blue,175],['PE','Dây bảo vệ','Không mang dòng tải thường',DG.green,268]].map(([a,b,c,color,y])=>L(64,y,350,y,color,13)+C(70,y,20,'#fff',color)+S(70,y+6,a,14,color)+B(419,y-33,361,66,b,c,'#f4f7fb')).join('');break;
case 'circuit':
q=source(35,101)+B(345,102,145,105,'CÔNG TẮC','Đóng / Mở','#e5f6f1')+B(690,102,130,105,'TẢI','Bóng đèn','#fff0df')+P('M143 129 H345 M490 129 H690',DG.brown,6)+P('M690 192 H490 M345 192 H143',DG.blue,6)+S(431,251,'Mạch kín → có thể có dòng  ·  Mạch hở → dòng bị ngắt',18,DG.muted,500);break;
case 'parallel':
q=B(31,69,350,58,'NỐI TIẾP','','#eaf0fa')+P('M56 207 H355 M56 207 V168 M355 207 V168',DG.blue,4)+bulb(160,207)+bulb(266,207)+B(474,69,350,58,'SONG SONG','','#e6f7ed')+P('M490 165 H796 M490 248 H796 M566 165 V248 M721 165 V248',DG.blue,4)+bulb(566,207)+bulb(721,207)+S(208,281,'Cùng một nhánh dòng',18,DG.muted,500)+S(646,281,'Các nhánh độc lập',18,DG.muted,500);break;
case 'socket':
q=B(49,77,336,153,'CÔNG TẮC','Tiếp điểm đóng / mở','#f0f6ff')+P('M110 205 H193',DG.blue,6)+C(193,205,7,DG.blue,DG.blue)+P('M193 205 L256 159',DG.blue,6)+C(279,205,7,DG.blue,DG.blue)+B(465,77,336,153,'Ổ CẮM','Tiếp điểm giữ chân phích','#fff2df')+R(598,141,73,67,'#fff',13)+R(612,155,8,29,DG.ink,4,DG.ink)+R(647,155,8,29,DG.ink,4,DG.ink)+S(430,271,'Tiếp điểm lỏng → tăng điện trở tiếp xúc → phát nhiệt',18,DG.red);break;
case 'phases':{
q=P('M62 149 H790','#aebcc9',2,'6 7');const co=[DG.brown,DG.blue,DG.green];for(let k=0;k<3;k++){let d='';for(let x=60;x<=790;x+=5){const y=148-69*Math.sin((x-60)/730*Math.PI*3+k*Math.PI*2/3);d+=(x===60?'M':'L')+x+' '+y+' ';}q+=P(d,co[k],4);}q+=S(430,270,'Ba pha lệch nhau 120°',22,DG.ink,700)+S(430,299,'Hệ danh định 380/220 V: pha–pha / pha–trung tính',15,DG.muted,500);break;}
case 'cable':
q=C(218,159,101,'#eef2f6','#657992')+C(218,159,80,'#fff4db',DG.amber)+C(218,159,56,'#b8783f','#955f2f')+S(424,125,'Lõi dẫn',24,DG.ink,700,'start')+S(424,153,'Đồng / nhôm',16,DG.muted,500,'start')+P('M274 159 H414',DG.brown,3)+S(424,211,'Lớp cách điện',24,DG.ink,700,'start')+S(424,237,'Ngăn dòng đi sai đường',16,DG.muted,500,'start')+P('M279 203 H415',DG.blue,3)+S(430,290,'Tiết diện lõi tính bằng mm², không phải đường kính.',19,DG.muted,500);break;
case 'outlet':
q=B(33,91,182,120,'Ổ tường','Giới hạn A','#e5f3ff')+B(334,91,192,120,'Ổ kéo dài','Giới hạn A','#fff0db')+B(648,91,177,120,'Thiết bị','Công suất W','#e5f7ed')+A(216,150,320,150)+A(527,150,632,150)+S(430,264,'Giới hạn thực tế phụ thuộc tất cả các mắt xích.',20,DG.muted,500);break;
case 'mcb':
q=B(57,79,224,142,'LƯỠNG KIM','Phản ứng theo nhiệt','#fff1df')+B(342,79,224,142,'ĐIỆN TỪ','Ngắt nhanh khi dòng lớn','#e8f1fd')+B(625,79,176,142,'CƠ CẤU','Mở tiếp điểm','#e9f6ef')+A(282,150,325,150)+A(568,150,609,150)+S(430,264,'MCB bảo vệ quá dòng; không phải RCD.',22,DG.red,700);break;
case 'rcd':
q=R(320,92,232,145,'#ebf4fb',28,'#8ba8c3')+C(436,164,64,'#fff','#8aa9bd')+P('M70 144 H794',DG.brown,6)+P('M794 195 H70',DG.blue,6)+S(115,118,'I đi',20,DG.brown)+S(118,223,'I về',20,DG.blue)+S(436,87,'RCD',26,DG.ink,700)+S(436,169,'ΣI = 0?',22,DG.ink)+S(436,271,'Có dòng rò → có thể xuất hiện chênh lệch',18,DG.muted,500);break;
case 'panel':
q=B(40,105,140,105,'Nguồn','L / N','#e8eff9')+B(249,105,144,105,'Tổng','Cô lập / bảo vệ','#e7f3fe')+B(458,105,149,105,'Thanh cái','Phân phối','#e6f7ef')+A(181,157,236,157)+A(394,157,445,157)+P('M607 158 H654 M654 94 V248',DG.blue,4)+[100,170,240].map(y=>B(680,y-31,140,61,['Đèn','Ổ cắm','Tải riêng'][[100,170,240].indexOf(y)],'', '#f6f2e9')+L(654,y,680,y,DG.green,3)).join('');break;
case 'loads':
q=B(24,111,150,112,'Tủ điện','Phân mạch','#e8f1fc')+P('M174 168 H320 M320 79 V255',DG.blue,4)+[['Chiếu sáng',58],['Ổ sinh hoạt',120],['Bếp',182],['Điều hòa',244]].map(([t,y])=>L(320,y,428,y,DG.blue,3)+B(428,y-24,352,48,t,'','#edf7f3')).join('')+S(227,290,'Mỗi nhóm tải có đặc điểm và điều kiện bảo vệ riêng.',17,DG.muted,500);break;
case 'shock':
q=R(35,100,219,123,'#ffefec')+S(145,133,'NGUỒN',22,DG.red)+S(145,169,'Điểm có điện áp',17,DG.ink,500)+S(145,197,'nguy hiểm',17,DG.ink,500)+P('M254 164 H355',DG.red,5)+C(467,112,28,'#e6edf4','#7f96a8')+P('M467 143 V213 M467 167 L416 194 M467 167 L518 194 M467 213 L431 258 M467 213 L505 258','#8297a8',8)+P('M518 194 H636',DG.red,5)+B(636,100,181,123,'ĐƯỜNG DÒNG','qua cơ thể','#fff3dc')+S(430,298,'Không dùng cơ thể để thử điện — kể cả “thử tê”.',18,DG.red,700);break;
case 'faults':
q=[['Quá tải','Dòng lớn','#fff0d7'],['Ngắn mạch','Đường lỗi thấp Ω','#ffe9e6'],['Rò điện','Dòng đi sai đường','#e6f2fd'],['Hồ quang','Phóng điện / nhiệt','#e5f7ee']].map(([a,b,c],i)=>B(28+i*213,95,196,132,a,b,c)).join('')+S(430,283,'Cơ chế khác nhau → cách bảo vệ, chẩn đoán khác nhau.',19,DG.muted,500);break;
case 'earth':
q=[['1','Cách điện','Ngăn chạm trực tiếp','#eaf3fd'],['2','Nối đất PE','Bảo vệ khi có lỗi','#e6f6ed'],['3','RCD/RCBO','Bổ sung bảo vệ','#fff0dd']].map(([n,a,b,c],i)=>B(32+i*283,100,246,122,a,b,c)+C(60+i*283,101,22,'#fff',DG.green)+S(60+i*283,108,n,17,DG.green,700)).join('')+S(430,282,'Không có một lớp nào bảo đảm an toàn tuyệt đối.',18,DG.red,600);break;
case 'diagnose':
q=B(30,112,155,95,'NGUỒN','Có cấp điện?','#e8f1fc')+B(237,112,155,95,'BẢO VỆ','Đã ngắt?','#e8f1fc')+B(443,112,155,95,'ĐIỀU KHIỂN','Công tắc?','#fff0db')+B(651,112,176,95,'THIẾT BỊ','Bóng / tải?','#e5f7ec')+A(185,157,223,157)+A(393,157,430,157)+A(599,157,638,157)+S(430,268,'Triệu chứng → giả thuyết → quan sát an toàn.',20,DG.muted,500);break;
case 'safety':
q=[['1','Xác định','đúng nguồn'],['2','Cô lập','ngăn bật lại'],['3','Xác nhận','mất điện'],['4','Thao tác','đúng năng lực']].map(([n,a,b],i)=>B(24+i*214,105,192,117,a,b,i===2?'#e5f7e9':'#e7f0fa')+C(42+i*214,100,20,'#fff',DG.green)+S(42+i*214,107,n,17,DG.green)).join('')+S(430,277,'OFF không đồng nghĩa đã chứng minh mất điện.',20,DG.red,700);break;
case 'tools':
q=[['Tua vít','Tháo lắp cơ khí'],['Kìm tuốt','Chuẩn bị đầu dây'],['Bộ thử 2 cực','Xác nhận điện áp'],['Multimeter','Đo các đại lượng']].map(([a,b],i)=>B(25+i*212,100,194,120,a,b,i===2?'#e6f7eb':'#eaf2fd')).join('')+S(430,277,'Mỗi dụng cụ có giới hạn, cấp an toàn và cách dùng.',19,DG.muted,500);break;
case 'meter':
q=R(120,64,246,221,'#e5f0f6',24,'#789ab0')+R(148,86,188,61,'#dbf6e8',8,'#9bbdae')+S(244,127,'220.0',34,DG.green,700)+C(243,213,47,'#fff','#7795ae')+S(243,221,'V~',25,DG.ink,700)+B(451,88,319,68,'V~ / V⎓','Đo chênh điện áp','#eaf2fd')+B(451,179,319,68,'Ω / Thông mạch','Chỉ đo khi đã cô lập','#fff0df')+S(431,300,'Chọn nhầm chế độ A có thể tạo ngắn mạch.',18,DG.red,600);break;
case 'symbols':
q=[['Nguyên lý','Quan hệ điện'],['Đơn tuyến','Nguồn → nhánh'],['Mặt bằng','Vị trí vật lý']].map(([a,b],i)=>B(39+i*284,92,253,145,a,b,['#e8f1fd','#e7f8f0','#fff0df'][i])).join('')+S(430,288,'Ba sơ đồ trả lời ba câu hỏi khác nhau.',20,DG.muted,500);break;
case 'replace':
q=[['Đánh giá','Ổ & dây'],['Cô lập','Xác nhận'],['Lắp đúng','Thông số'],['Đo kiểm','Sau lắp']].map(([a,b],i)=>B(25+i*212,105,190,116,a,b,['#eaf1fa','#fff0dd','#e5f5ef','#e8f1fa'][i])).join('')+S(430,276,'Chỉ “có điện” sau lắp không chứng minh an toàn.',20,DG.red,700);break;
case 'switches':
q=B(42,77,362,166,'CÔNG TẮC ĐƠN','Một đường đóng / mở','#eaf1fa')+P('M114 198 H190 M190 198 L255 149 M275 198 H343',DG.blue,5)+C(190,198,6,DG.blue,DG.blue)+C(275,198,6,DG.blue,DG.blue)+B(457,77,362,166,'HAI VỊ TRÍ','Hai bộ chuyển mạch','#e9f6ef')+P('M511 166 H750 M511 211 H750',DG.green,4)+P('M535 240 L587 166 M690 211 L741 240',DG.brown,5)+S(430,283,'Minh họa logic, không phải sơ đồ đấu dây.',16,DG.muted,500);break;
case 'appliances':
q=B(25,92,251,136,'ĐÈN LED','Driver → ánh sáng','#eaf1fa')+B(304,92,251,136,'QUẠT','Động cơ → chuyển động','#e7f6ef')+B(583,92,251,136,'BẾP / ẤM','Điện trở → nhiệt','#fff0dd')+S(430,283,'Một nguồn điện — nhiều dạng chuyển hóa năng lượng.',19,DG.muted,500);break;
case 'floorplan':
q=R(65,65,705,206,'#edf3f8',8,'#7d9ab5')+P('M310 65 V271 M535 65 V271 M65 160 H535 M535 190 H770','#9eb1c3',5)+S(188,115,'Khách',23)+S(411,115,'Phòng ngủ',21)+S(648,127,'Bếp',23)+S(189,219,'Phòng ngủ',21)+S(418,221,'Phòng tắm',21)+S(648,234,'Tủ điện',18,DG.green)+R(605,249,81,18,'#bbecdf',3,DG.green)+S(430,300,'Mỗi khu vực có các nhánh và thiết bị khác nhau.',16,DG.muted,500);break;
case 'logic':
q=B(306,52,246,73,'Triệu chứng','Ổ nóng / đèn tắt','#fff0df')+P('M429 125 V155 M160 155 H698 M160 155 V180 M430 155 V180 M698 155 V180',DG.blue,3)+B(33,180,254,88,'Nguồn / Mạch','Có cấp điện?','#eaf1fa')+B(303,180,254,88,'Đầu nối','Có tiếp xúc kém?','#eaf1fa')+B(573,180,254,88,'Thiết bị','Tải có lỗi?','#eaf1fa')+S(430,307,'Không thử bằng cách tạo sự cố.',17,DG.red,600);break;
case 'roadmap':
q=[['VẬT LÝ','U · I · R'],['MẠCH','L · N · PE'],['BẢO VỆ','MCB · RCD'],['THỰC TẾ','Phân tích & an toàn']].map(([a,b],i)=>B(22+i*213,109,196,111,a,b,i===3?'#e6f7ed':'#eaf1fa')).join('')+S(430,282,'Hiểu bản chất → nhìn hệ thống → quyết định an toàn.',20,DG.ink,600);break;
}
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 332" role="img" aria-label="${heading}"><rect x="1" y="1" width="858" height="330" rx="24" fill="#fcfefe" stroke="#e2ebef" stroke-width="2"/>${S(430,41,heading,23,DG.ink,750)}${q}</svg>`;
}
