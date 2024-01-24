function myFunction() {
    // responsive 클래스를 토글 시킴
    
    let x = document.getElementById('myTopnav');
    x.classList.toggle('responsive');
    
}

// function hospitalInfo() {

//     let QN = document.getElementsByName("QN")[0].value.trim();
//     // let  = document.getElementsByName("password")[0].value.trim();
//     var frm_hospital = document.frm_hospital;

//     if(QN === null || QN === '') {
//         alert("검색할 병원명을 입력하세요.");
//         return;
//     }
    
//     // if(password === null || password === '') {
//     //     alert("비밀번호를 입력하세요.")
//     //     return;
//     // }

//     frm_hospital.submit();
// }

function loginCheck() {

    let id = document.getElementsByName("id")[0].value.trim();
    let password = document.getElementsByName("password")[0].value.trim();
    var frm1 = document.frm1;
    
    if(id === null || id === '') {
        alert("아이디를 입력하세요.");
        return;
    }

    if(password === null || password === '') {
        alert("비밀번호를 입력하세요.")
        return;
    }

    frm1.submit();
}


// 회원가입 페이지 유효성 검사

function joinCheck() {
    let id = document.getElementById("id").value.trim();
    let password = document.getElementById("password").value.trim();
    let name = document.getElementById("name").value.trim();
    let yy = document.getElementById("yy").value.trim();
    let mm = document.getElementById("mm").value.trim();
    let dd = document.getElementById("dd").value.trim();
    let email = document.getElementById("email").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let num = document.getElementById("num").value.trim();
    var frm2 = document.frm2;
    
    if(id === null || id === '') {
        alert("아이디를 입력하세요.");
        return;
    }
    
    if(password === null || password === '') {
        alert("비밀번호를 입력하세요.");
        return;
    }
    
    if(name === null || name === '') {
        alert("이름을 입력하세요.");
        return;
    }
    
    
    if(yy === null || yy === '') {
        alert("생년월일을 입력하세요.");
        return;
    }
    
    if(mm === null || mm === '') {
        alert("생년월일을 입력하세요.");
        return;
    }
    
    if(dd === null || dd === '') {
        alert("생년월일을 입력하세요.");
        return;
    }
    
    let reg_yy = /^(19[0-9][0-9]|20\d{2})$/;
    let reg_mm = /(0[0-9]|1[0-2])$/;
    let reg_dd = /(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if(!reg_yy.test(yy)) {
        alert("유효하지 않은 생년월일 형식입니다.");
        return;
    }
    
    if(!reg_mm.test(mm)) {
        alert("유효하지 않은 생년월일 형식입니다.");
        return;
    }
    
    if(!reg_dd.test(dd)) {
        alert("유효하지 않은 생년월일 형식입니다.");
        return;
    }
    
    if(email === null || email === '') {
        alert("이메일을 입력하세요.");
        return;
    }
    let reg_email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(!reg_email.test(email)) {
        alert("유효하지 않은 이메일 형식입니다.");
        return;
    }
    
    if(tel === null || tel === '') {
        alert("전화번호를 입력하세요.");
        tel.focus();
        return;
    }
    
    let reg_tel = /^\d{3}\d{3,4}\d{4}$/;
    if(!reg_tel.test(tel)) {
        alert("유효하지 않은 전화번호 형식입니다.");
        return;
    }
    
    if(num === null || num === '') {
        alert("인증번호를 입력하세요.");
        num.focus();
        return;
    }
    
    frm2.submit();
}

 // 시도 선택 드롭다운 선택 → 시군구 선택 드롭다운.
 var q0 = document.getElementById("Q0");
 var q1 = document.getElementById("Q1");

 q0.addEventListener("change", function() {
     var selectedQ0 = q0.value;

     q1.innerHTML = "";

     if (selectedQ0 === "서울특별시") {
         var seoulQ1List = ["선택","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
         for (var i = 0; i < seoulQ1List.length; i++) {
             var option = document.createElement("option");
             option.text = seoulQ1List[i];
             option.value = seoulQ1List[i];
             q1.appendChild(option);
            }
     } else if (selectedQ0 === "인천광역시") {
         var busanq1List = ["선택","계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "대전광역시") {
         var busanq1List = ["선택","동구","중구","서구","유성구","대덕구"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "대구광역시") {
         var busanq1List = ["선택","중구","동구","서구","남구","북구","수성구","달서구","달성군","군위군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }

    } else if (selectedQ0 === "광주광역시") {
        var busanq1List = ["선택","광산구","동구","서구","남구","북구"];
        for (var i = 0; i < busanq1List.length; i++) {
            var option = document.createElement("option");
            option.text = busanq1List[i];
            option.value = busanq1List[i];
            q1.appendChild(option);
        }
     } else if (selectedQ0 === "울산광역시") {
         var busanq1List = ["선택","중구","남구","동구","북구","울주군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "부산광역시") {
         var busanq1List = ["선택","강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "경기도") {
         var busanq1List = ["선택","수원시 장안구","수원시 권선구","수원시 팔달구","수원시 영통구","성남시 중원구","성남시 수정구","성남시 분당구","용인시 처인구","용인시 기흥구","용인시 수지구",
        "안양시 만안구","안양시 동안구","안산시 단원구","안산시 상록구","과천시","광명시","광주시","군포시","부천시","시흥시","김포시","안성시","오산시","의왕시","이천시","평택시","하남시","화성시",
        "여주시","양평군","고양시 덕양구","고양시 일산서구","고양시 일산동구","구리시","남양주시","동두천시","양주시","의정부시","파주시","포천시","연천군","가평군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "강원도") {
         var busanq1List = ["선택","원주시","춘천시","강릉시","동해시","속초시","삼척시","태백시","홍천군","철원군","횡성군","평창군","정선군","영월군","인제군","고성군","양양군","화천군","양구군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "충청북도") {
         var busanq1List = ["선택","청주시","충주시","제천시","보은군","옥천군","영동군","증평군","진천군","괴산군","음성군","단양군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "충청남도") {
         var busanq1List = ["선택","천안시","공주시","보령시","아산시","서산시","논산시","계룡시","당진시","금산군","부여군","서천군","청양군","홍성군","예산군","태안군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "전라북도") {
         var busanq1List = ["선택","전주시","익산시","군산시","정읍시","김제시","남원시","완주군","고창군","부안군","임실군","순창군","진안군","무주군","장수군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "전라남도") {
         var busanq1List = ["선택","목포시","여수시","순천시","나주시","광양시","담양군","곡성군","구례군","고흥군","보성군","화순군","장흥군","강진군","해남군","영암군","무안군","함평군","영광군","장성군","완도군","진도군","신안군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "경상북도") {
         var busanq1List = ["선택","포항시","경주시","김천시","안동시","구미시","영주시","영천시","상주시","문경시","경산시","의성군","청송군","영양군","영덕군","청도군","고령군","성주군","칠곡군","예천군","봉화군","울진군","울릉군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "경상남도") {
         var busanq1List = ["선택","창원시","김해시","진주시","양산시","거제시","통영시","사천시","밀양시","함안군","거창군","창녕군","고성군","하동군","합천군","남해군","함양군","산청군","의령군"];
         for (var i = 0; i < busanq1List.length; i++) {
             var option = document.createElement("option");
             option.text = busanq1List[i];
             option.value = busanq1List[i];
             q1.appendChild(option);
         }
     } else if (selectedQ0 === "제주도") {
         var jejuq1List = ["선택","제주시","서귀포시"];
         for (var i = 0; i < jejuq1List.length; i++) {
             var option = document.createElement("option");
             option.text = jejuq1List[i];
             option.value = jejuq1List[i];
             q1.appendChild(option);
         }
     }
 });

 // 병원 정보 페이지
var api_key = "J8PrTBaAdSOCeLnyBjw9bmy%2FfwolJYN7gzspJ4V1lDdkcXkn91IE%2FY2OZrFhewei%2FiwdJBssG%2FLCMGhnoRMnSA%3D%3D";

$(document).ready(function(){
    var req_url = "http://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire";
    $("#btnLoad_hospital").click(function(){
        let QN = encodeURIComponent(document.getElementsByName("QN")[0].value.trim());
        let Q0 = $("#Q0").val();
        // Q0 = encodeURIComponent(Q0);
        let Q1 = $("#Q1").val();
        // Q1 = encodeURIComponent(Q1);
        // 진료과목 선택 (체크된 항목 수집)
        let QD = [];
        let checkboxes1 = document.getElementsByName("QD");
        for (var i = 0; i < checkboxes1.length; i++) {
            if (checkboxes1[i].checked) {
                QD.push(checkboxes1[i].value);
            }
        }
        // 진료요일 선택 (체크된 항목 수집)
        let QT = [];
        let checkboxes2 = document.getElementsByName("QT");
        for (var i = 0; i < checkboxes2.length; i++) {
            if (checkboxes2[i].checked) {
                QT.push(checkboxes2[i].value);
            }
        }
        let url;
        
        // XML
        url = req_url + `?serviceKey=${api_key}&QN=${QN}&Q0=${Q0}&Q1=${Q1}&QD=${QD}&QT=${QT}&numOfRows=10`;

        // 유효성 검사
        if(QN === null || QN === '') {
            alert("검색할 병원명을 입력하세요.");
            return;
        }

        if(Q0 === "선택") {
            alert("시/도를 선택하세요.");
            return;
        } else {
            Q0 = encodeURIComponent(Q0);
        }

        if(Q1 === "선택") {
            alert("시/군/구를 선택하세요.");
            return;
        } else {
            Q1 = encodeURIComponent(Q1);
        }

        if(QD.length === 0) {
            alert("적어도 하나의 진료과목을 선택하세요.");
            return;
        }

        if(QT.length === 0) {
            alert("적어도 하나의 진료요일을 선택하세요.");
            return;
        }
       
       $.ajax({
           url: url,
           type: "GET", 
           cache: false,
           success: function(data, status) {
               (status == "success") && parseXML(data);
           },
       });
    });


    function parseXML(xmlDOM) {
        const table = [];
        table.push("<tr><th>일련번호</th><th>병·의원명</th><th>주소</th><th>진료요일</th></tr>");
      
        $(xmlDOM).find("item").each(function(){
          const rnum = $(this).find("rnum").text();
          const dutyName = $(this).find("dutyName").text();
          const dutyAddr = $(this).find("dutyAddr").text();
      
          const days = [];
          if ($(this).find("dutyTime1c").text() && $(this).find("dutyTime1s").text()) days.push("월");
          if ($(this).find("dutyTime2c").text() && $(this).find("dutyTime2s").text()) days.push("화");
          if ($(this).find("dutyTime3c").text() && $(this).find("dutyTime3s").text()) days.push("수");
          if ($(this).find("dutyTime4c").text() && $(this).find("dutyTime4s").text()) days.push("목");
          if ($(this).find("dutyTime5c").text() && $(this).find("dutyTime5s").text()) days.push("금");
          if ($(this).find("dutyTime6c").text() && $(this).find("dutyTime6s").text()) days.push("토");
          if ($(this).find("dutyTime7c").text() && $(this).find("dutyTime7s").text()) days.push("일");
          if ($(this).find("dutyTime8c").text() && $(this).find("dutyTime8s").text()) days.push("공휴일");
      
          const row = `
            <tr class="result-row" data-rnum="${rnum}" data-dutyName="${dutyName}" data-dutyAddr="${dutyAddr}" data-days="${days.join(', ')}">
              <td>${rnum}</td>
              <td>${dutyName}</td>
              <td>${dutyAddr}</td>
              <td>${days.join(', ')}</td>
            </tr>
          `;
          table.push(row);
        });
      
        $("#demoXML_hospital").html(table.join('\n'));
    }
});

// 약국 정보 페이지
$(document).ready(function(){
    var req_url = "http://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire";
    $("#btnLoad_pharmacy").click(function(){
        let QN = encodeURIComponent(document.getElementsByName("QN")[0].value.trim());
        let Q0 = $("#Q0").val();
        // Q0 = encodeURIComponent(Q0);
        let Q1 = $("#Q1").val();
        // Q1 = encodeURIComponent(Q1);
        // 진료과목 선택 (체크된 항목 수집)
        let QD = [];
        let checkboxes1 = document.getElementsByName("QD");
        for (var i = 0; i < checkboxes1.length; i++) {
            if (checkboxes1[i].checked) {
                QD.push(checkboxes1[i].value);
            }
        }
        // 진료요일 선택 (체크된 항목 수집)
        let QT = [];
        let checkboxes2 = document.getElementsByName("QT");
        for (var i = 0; i < checkboxes2.length; i++) {
            if (checkboxes2[i].checked) {
                QT.push(checkboxes2[i].value);
            }
        }
        let url;

        // 유효성 검사
        if(QN === null || QN === '') {
            alert("검색할 약국명을 입력하세요.");
            return;
        }

        if(Q0 === "선택") {
            alert("시/도를 선택하세요.");
            return;
        } else {
            Q0 = encodeURIComponent(Q0);
        }

        if(Q1 === "선택") {
            alert("시/군/구를 선택하세요.");
            return;
        } else {
            Q1 = encodeURIComponent(Q1);
        }

        if(QT.length === 0) {
            alert("적어도 하나의 운영요일을 선택하세요.");
            return;
        }
        
        // XML
        url = req_url + `?serviceKey=${api_key}&QN=${QN}&Q0=${Q0}&Q1=${Q1}&QD=${QD}&QT=${QT}&numOfRows=10`;
       
       $.ajax({
           url: url,
           type: "GET", 
           cache: false,
           success: function(data, status) {
               (status == "success") && parseXML(data);
           },
       });
    });

    function parseXML(xmlDOM) {
        const table = [];
        table.push("<tr><th>일련번호</th><th>병·의원명</th><th>주소</th><th>진료요일</th></tr>");
      
        $(xmlDOM).find("item").each(function(){
          const rnum = $(this).find("rnum").text();
          const dutyName = $(this).find("dutyName").text();
          const dutyAddr = $(this).find("dutyAddr").text();
      
          const days = [];
          if ($(this).find("dutyTime1c").text() && $(this).find("dutyTime1s").text()) days.push("월");
          if ($(this).find("dutyTime2c").text() && $(this).find("dutyTime2s").text()) days.push("화");
          if ($(this).find("dutyTime3c").text() && $(this).find("dutyTime3s").text()) days.push("수");
          if ($(this).find("dutyTime4c").text() && $(this).find("dutyTime4s").text()) days.push("목");
          if ($(this).find("dutyTime5c").text() && $(this).find("dutyTime5s").text()) days.push("금");
          if ($(this).find("dutyTime6c").text() && $(this).find("dutyTime6s").text()) days.push("토");
          if ($(this).find("dutyTime7c").text() && $(this).find("dutyTime7s").text()) days.push("일");
          if ($(this).find("dutyTime8c").text() && $(this).find("dutyTime8s").text()) days.push("공휴일");
      
          const row = `
            <tr class="result-row" data-rnum="${rnum}" data-dutyName="${dutyName}" data-dutyAddr="${dutyAddr}" data-days="${days.join(', ')}">
              <td>${rnum}</td>
              <td>${dutyName}</td>
              <td>${dutyAddr}</td>
              <td>${days.join(', ')}</td>
            </tr>
          `;
          table.push(row);
        });
      
        $("#demoXML_pharmacy").html(table.join('\n'));
    }
});

// AED 페이지
// function myMap() {
	
// 	let lat, lng;
// 	[lat, lng] = [37.499553, 127.035888];  // 역삼역
	
// 	const mapProp = {
// 	    center:new google.maps.LatLng(lat, lng),
// 	    zoom:17,
// 	};
// 	const map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	
// 	var myPos1 = {lat: lat, lng: lng};
// 	var marker1 = new google.maps.Marker({position: myPos1});
// 	marker1.setMap(map);

// 	// 마커를 클릭하면 Zoom 레벨을 조정
// 	google.maps.event.addListener(marker1, "click", function(){
// 		// alert(map.getZoom());

// 		map.setZoom(map.getZoom() - 1);
// 		map.setCenter(marker1.getPosition());
// 	});

// }

$(document).ready(function(){
    var req_url = "http://apis.data.go.kr/B552657/AEDInfoInqireService/getEgytAedManageInfoInqire";
    $("#btnLoad_aed").click(function(){
        let Q0 = $("#Q0").val();
        // Q0 = encodeURIComponent(Q0);
        let Q1 = $("#Q1").val();
        // Q1 = encodeURIComponent(Q1);
        // 진료과목 선택 (체크된 항목 수집)
        let url;

        // 유효성 검사
        if(Q0 === "선택") {
            alert("시/도를 선택하세요.");
            return;
        } else {
            Q0 = encodeURIComponent(Q0);
        }

        if(Q1 === "선택") {
            alert("시/군/구를 선택하세요.");
            return;
        } else {
            Q1 = encodeURIComponent(Q1);
        }
        
        // XML
        url = req_url + `?serviceKey=${api_key}&Q0=${Q0}&Q1=${Q1}&numOfRows=10`;
       
       $.ajax({
           url: url,
           type: "GET", 
           cache: false,
           success: function(data, status) {
               (status == "success") && parseXML(data);
           },
       });
    });

    function parseXML(xmlDOM) {
        const table = [];
        table.push("<tr><th>설치기관명</th><th>제조사</th><th>설치위치</th></tr>");
      
        $(xmlDOM).find("item").each(function(){
          const org = $(this).find("org").text();
          const mfg = $(this).find("mfg").text();
          const buildplace = $(this).find("buildplace").text();
      
          const row = `
            <tr class="result-row" data-org="${org}" data-mfg="${mfg}" data-buildplace="${buildplace}">
              <td>${org}</td>
              <td>${mfg}</td>
              <td>${buildplace}</td>
            </tr>
          `;
          table.push(row);
        });
      
        $("#demoXML_aed").html(table.join('\n'));
    }
});