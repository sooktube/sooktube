# SOOKTUBE

### 숙명여자대학교 2020-2학기 소프트웨어학부 졸업작품

다 같이 만들어나가는 재생목록을 사용하는 동영상 공유 웹 플랫폼🎞


# 기획 의도

# 주요 기능

* 동영상 업로드 기능(Google Cloud Platform Stroage Bucket 사용)

* 재생목록 기능

   * 사용자는 자신이 원하는 주제의 재생목록을 생성할 수 있다.
   * 재생목록 생성 시, 해당 재생목록의 공개 여부를 설정할 수 있다.(공개 여부 설정은 재생목록 수정 시에 변경 가능.)
      * 재생목록을 "공개" 설정할 경우
         > 재생목록 생성자가 아닌 다른 사용자들도 해당 재생목록에 다른 동영상들을 추가할 수 있다.
         
         > "공개" 설정된 재생목록에 재생목록 최초 생성자가 아닌 다른 사람이 동영상을 추가하였을 경우, 해당 동영상이 다른 이용자들로부터 받은 추천 수(동영상이 현재 포함된 재생목록의 주제에 적합한지)가 **5** 이상이 되어야만 실제로 재생목록에 포함될 수 있다.
         
         > 재생목록의 최초 생성자는 해당 재생목록에 포함된 영상을 삭제할 수 있는 권한을 가진다.
         
      * 재생목록을 "비공개" 설정할 경우
         > 재생목록 최초 생성자 이외에는 재생목록에 새로운 동영상을 추가할 수 없다.
                  
         > 재생목록의 최초 생성자는 해당 재생목록에 포함된 영상을 삭제할 수 있는 권한을 가진다.

<img width="960" alt="1  메인 화면" src="https://user-images.githubusercontent.com/36043024/97172795-e5bef480-17d2-11eb-962e-b40e664b8015.PNG">
<img width="960" alt="6  재생목록" src="https://user-images.githubusercontent.com/36043024/97172815-ee172f80-17d2-11eb-931d-5f49706709d3.PNG">
<img width="960" alt="7  재생목록 추천 영상" src="https://user-images.githubusercontent.com/36043024/97172834-f7a09780-17d2-11eb-9052-879beca64b93.PNG">
<img width="960" alt="10  동영상" src="https://user-images.githubusercontent.com/36043024/97172853-fd967880-17d2-11eb-87ec-ce84807b6632.PNG">

# 사용 기술

1. FRONTEND - react

2. BACKEND - spring

3. DB/Server - AWS rds/Google Cloud Platform App Engine Standard
