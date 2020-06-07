var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


/*
var mapOptions = {
    center: new naver.maps.LatLng(37.582106, 127.001907),
    zoom: 16
};

var map = new naver.maps.Map('map', mapOptions);

//여기까지 지도를 띄우는 코드


var position={
    동아치 : new naver.maps.LatLng(37.584325, 127.000805),
    돌쇠아저씨 : new naver.maps.LatLng(37.582795, 127.001310),
};

var content = {
    동아치 : [
        '<div class="iw_inner">',
        '<p class = "name">동네 아저씨 치킨</p>',
        '</div>'
    ].join(''),
    돌쇠아저씨 : [
        '<div class="iw_inner">',
        '<p class = "name">돌쇠 아저씨</p>',
        '</div>'
    ].join('')
}

var marker = {
    동아치 : new naver.maps.Marker({
        map: map,
        position: position.동아치, 
    }),
    돌쇠아저씨 : new naver.maps.Marker({
        map: map,
        position: position.돌쇠아저씨, 
    }),
}

var infowindow = {
    동아치 : new naver.maps.InfoWindow({
        content: content.동아치,
    }),
    돌쇠아저씨 : new naver.maps.InfoWindow({
        content: content.돌쇠아저씨,
    }),
    
}

var event = {
    동아치 : naver.maps.Event.addListener(marker.동아치, "click", function(e) {
        if (infowindow.동아치.getMap()) {
            infowindow.동아치.close();
        } else {
            infowindow.동아치.open(map, marker.동아치);
        }
    }),
    돌쇠아저씨 : naver.maps.Event.addListener(marker.돌쇠아저씨, "click", function(e) {
        if (infowindow.돌쇠아저씨.getMap()) {
            infowindow.돌쇠아저씨.close();
        } else {
            infowindow.돌쇠아저씨.open(map, marker.돌쇠아저씨);
        }
    }),
}


/*
var 동아치 = {
    marker : new naver.maps.Marker({
        map: map,
        position: new naver.maps.LatLng(37.584319, 127.000837), 
    }),

    infowindow : new naver.maps.InfoWindow({
        content: [
            '<div class="iw_inner">',
            '<p>동네 아저씨 치킨</p>',
            '</div>'
        ].join(''),
    }),
};

var event = naver.maps.Event.addListener(동아치.marker, "click", function(e) {
    if (동아치.infowindow.getMap()) {
        동아치.infowindow.close();
    } else {
        동아치.infowindow.open(map, 동아치.marker);
    }
});
*/


