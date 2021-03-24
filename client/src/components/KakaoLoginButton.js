import KakaoLogin from "react-kakao-login";

function KakaoLoginButton() {
  return (
    <div>
      <KakaoLoginOuter
        // rest api 키가 아닌 js 키를 사용해야 합니다.
        jsKey={"37aee25725910fccaeffb2c6c1ba880b"}
        onSuccess={(res) => console.log(res)}
        onFailure={(res) => console.log(res)}
        
        // getPofile 속성을 주지 않으면 유저 정보를 받을 수 없습니다.
        getProfile={true}
      >
      </KakaoLoginOuter>
    </div>
  );
}