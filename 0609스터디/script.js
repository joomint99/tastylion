var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.582106, 127.001907), //지도의 중심좌표.
	level: 4 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.58180291310545 , 127.0010868471269); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});





// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        title: '돌쇠아저씨', 
        latlng: new kakao.maps.LatLng(37.582812025192425,127.0011576210283),
        content : '피자랑 떡볶이가 맛있다.',
        type : "밥약"
    },
    {
        title: '동네아저씨치킨', 
        latlng: new kakao.maps.LatLng(37.5843797554693 ,127.00094819358667),
        content : '양이 많다.',
        type : "밥약",
    },
    {
        title : '정돈',
        latlng: new kakao.maps.LatLng(37.58180291310545 , 127.0010868471269),
        content: '비싸지만 맛있다.',
        type : "JMT"
    },
    {
        title : '크래프트밈',
        latlng: new kakao.maps.LatLng(37.58183445275475, 127.00017548059974),
        content: '수제버거 + 맥주 조합 굿',
        type : "데이트 무드"
    },
    {
        title : 'Snob',
        latlng: new kakao.maps.LatLng(37.58245838617936,127.00105855309693),
        content: '커피와 케이크의 여유 ',
        type : "디저트"
    },
    {
        title : '천향록',
        latlng: new kakao.maps.LatLng(37.58399006522795, 126.99815173974771),
        content: '마라탕+꿔바로우👍',
        type : "JMT"
    },
    {
        title : '히든스시',
        latlng: new kakao.maps.LatLng( 37.58316792325106, 127.00007358995116),
        content: '초밥을 좋아한다면🍣 ',
        type : "밥약"
    },
    {
        title : '물결식당',
        latlng: new kakao.maps.LatLng(37.58462974683326, 126.99700256607142),
        content: '아기자기한 밥집 + 강아지(말랑이)🐶',
        type : "밥약"
    },
    {
        title : '기꾸스시',
        latlng: new kakao.maps.LatLng(37.583291801685114, 126.99861027977371),
        content: '정문쪽 초밥집🍣',
        type : "밥약"
    },
    {
        title : '돈돈정',
        latlng: new kakao.maps.LatLng(37.58264759847301, 126.99949336501632),
        content: '일본 가정식🍱',
        type : "밥약"
    },
    {
        title : '낫컴플리트',
        latlng: new kakao.maps.LatLng(37.58421756535376, 126.99810927778603),
        content: '분위기&크로플 맛집+고양이(구름이)🐱',
        type : "디저트"
    },
    {
        title : '공공거실',
        latlng: new kakao.maps.LatLng(37.58429866739519, 126.99923295467683),
        content: '굉장히 넓고 루프탑+야외 자리까지!+성대생 10%할인(학생증 제시)',
        type : "디저트"
    },
    {
        title : '도밍고 팩토리',
        latlng: new kakao.maps.LatLng(37.58413871772452, 126.99752904378465),
        content: '쑥라떼로 유명하지만 다른 메뉴들도 맛있음 + 성대생 500원 할인 (학생증 제시)',
        type : "디저트"
    },
    {
        title : '카페 혜화동',
        latlng: new kakao.maps.LatLng(37.581906532329405, 126.99989810794064),
        content: '티라미스와 밀크티가 맛있는 카페',
        type : "디저트"
    },
    {
        title : '칠린',
        latlng: new kakao.maps.LatLng(37.582174576198454, 126.99935468131044),
        content: '칵테일까지 파는 카페 겸 바🍹',
        type : "디저트"
    },
    {
        title : '클류치',
        latlng: new kakao.maps.LatLng(37.58437295214506, 126.9965751816857),
        content: '유자 맥주 맛있음',
        type : "디저트"
    },
    {
        title : '선선혜화',
        latlng: new kakao.maps.LatLng(37.58243811816101, 126.99968866093825),
        content: '가게가 예쁘고 메뉴가 다양함+맛있음',
        type : "디저트"
    },
    {
        title: '틈새라면',	
        latlng: new kakao.maps.LatLng(37.58314764806862,126.99917918922908),
        content:'라면이라서 혼밥하기 좋음',
        type : '혼밥'
    },
    {

    
        title: '밴프',	
        latlng: new kakao.maps.LatLng(37.58803096540207,126.99600040901309),
        content:'밥약의 성지',
        type: '밥약'
    },
    {
        title: '후쿠후쿠',	
        latlng: new kakao.maps.LatLng(37.588889116926666,126.99486529274834),
        content: '여기도 밥약의 성지, 가성비가 특히 좋음',
        type:'밥약'
    },
    {
        title:'청춘직화',	
        latlng: new kakao.maps.LatLng(37.5886909036796, 126.99498419122288),
        content:'12~2시 같이 사람들 붐빌 때 말고, 3~5시쯤에 가면, 혼자 혼밥하기 안성맞춤',
        type:'혼밥'
    },
    {
        title:'쇼타돈부리',	
        latlng: new kakao.maps.LatLng(37.58887336269152, 126.99517665969515),
        content:'일식 맛집, 가끔씩 웨이팅(?)같은 거 존재',
        type:'JMT'
    },
    {
        title:'후라이팬',
        latlng: new kakao.maps.LatLng(37.588997227115016, 126.99466431247595),
        content:'미친 가성비의 양식집, 맛있음',
        type:'JMT'
    },
    {
        title:'대가곱창',	
        latlng: new kakao.maps.LatLng(37.5892652546246, 126.9942849911189),
        content:'곱창에 소주 한잔 하기 좋은 곳',
        type:'JMT'
    },
    {
        title:'우보장',
        latlng: new kakao.maps.LatLng(37.58810530475156, 126.99622685061001), 
        content:'동방이나 과방에서 자주 시켜 먹는 중국집',
        type:'JMT'

    },
    {
        title:'명륜쭈꾸미',
        latlng: new kakao.maps.LatLng(37.58608934584598, 126.99664020439691),
        content:'회식하러 자주 가는 곳. 삼겹살에 소주하기 좋은 곳',
        type:'JMT'
    },
    {
        title:'명륜진사갈비',
        latlng: new kakao.maps.LatLng(37.58536179723565, 126.99675628619416),
        content:'명륜당 앞에 있는 근본 고깃집. 무한으로 즐길 수 있음',
        type:'JMT'
    },
    {
        title:'화로상회',
        latlng: new kakao.maps.LatLng(37.584276104219704, 126.99689502411267),
        content:'명진갈의 갈비가 질릴 때 먹으러 가는 곳. 여기도 고기 무한 리필',
        type:'JMT'
    },
    {
        title:'혼가츠',
        latlng: new kakao.maps.LatLng(37.583388666354, 127.00026605676283),
        content:'왕돈까스 가성비 굿. 갠적으로 돈돈정보다 자주 가는 곳',
        type:'JMT'
    },
    {
        title:'호호식당',
        latlng: new kakao.maps.LatLng(37.58190202740454, 127.00001415167408),
        content:'소문으로만 들었던 전설의 식당. 비싼 만큼 맛있다고 함',
        type:'JMT'
    },
    {
        title:'멘야산다이메',
        latlng: new kakao.maps.LatLng(37.58180066528546, 126.99971696690255),
        content:'일식라멘집. 가성비 괜찮다. 인스타에 찍어서 올리면,<br>음료수까지 주니, 그 가격까지 고려하면 가성비 나름 괜찮다.',
        type:'JMT'

    },
    {
        title:'파스타마켓',	
        latlng: new kakao.maps.LatLng(37.5820506848078, 127.00124251945296),
        content:'캐주얼하고 개성있는 메뉴와 아늑한 분위기까지, 연인과 오기를 추천한다고 함.',
        type:'데이트 무드'
    },
    {
	title:'들풀',	
        latlng: new kakao.maps.LatLng(37.58259579095251, 127.0005915454649),
        content:'자극적이지 않은 한정식집',
        type:'밥약'
    },
    {
        title:'다다미소바',	
        latlng: new kakao.maps.LatLng(37.58172182630028, 127.00075003691735),
        content:'돈부리와 우동이 맛있는 집',
        type:'JMT'
    },
    {
        title:'이스탄불',	
        latlng: new kakao.maps.LatLng(37.582309725782125, 127.00053493619653),
        content:'국내 최초 터키 요리 전문점답게 다양한 메뉴와 내공을 자랑한다.',
        type:'JMT'
    },
    {
        title:'구스타파스',	
        latlng: new kakao.maps.LatLng(37.58416802541081, 127.00032832878968),
        content:'스페인 음식과 와인이 있는 데이트를 원한다면 꼭 가야할 곳.',
        type:'데이트 무드'
    },
    {
        title:'피터팬스테이크',	
        latlng: new kakao.maps.LatLng(37.58416802541081, 127.00032832878968),
        content:'합리적인 가격에 맛있는 스테이크와 파스타가 있는 아기자기한 이탈리안 레스토랑.',
        type:'JMT'
    }

];

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        position: positions[i].LatLng,
        content: positions[i].content+'<br>'+'type: '+positions[i].type, // 인포윈도우에 표시할 내용
        
        
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}



/*
// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng; 
    
    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
    
    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';
    
    var resultDiv = document.getElementById('clickLatlng'); 
    resultDiv.innerHTML = message;
    
});
*/
