<template>
    <div class = "body">
        <header>
              <div id="header-wrapper">
                  <div id="site-title">
                      밸런스 게임
                  </div>
              </div>
          </header>
        <label for="checkbox">
            <input type="checkbox" id="checkbox" hidden>
            <svg t="1689815540548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2271"><path d="M742.4 101.12A249.6 249.6 0 0 0 512 256a249.6 249.6 0 0 0-230.72-154.88C143.68 101.12 32 238.4 32 376.32c0 301.44 416 546.56 480 546.56s480-245.12 480-546.56c0-137.92-111.68-275.2-249.6-275.2z" fill="#231F20" p-id="2272" id="heart"></path></svg>
        </label>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isChecked: false
    };
  },
  mounted() {
    const heart = document.getElementById('heart');
    heart.addEventListener('animationend', this.animationEndHandler);
  },
  methods: {
    animationEndHandler() {
        setTimeout(() => {
        this.$router.push({ name: 'balance-game' }); // 페이지 이동 로직
        }, 800); // 0.8초 후에 페이지 이동
    }
  }
};
</script>
<style>
@font-face {
  font-family: 'dohyeon';
  src: url('../../public/fonts/BMDOHYEON_ttf.ttf');
}

.body{
    background-color: rgb(255,192,203);
    /*100% 창 높이*/
    height: 100vh;
    /*배치 center*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*사용자정의: var 함수로 핸들링*/
    --c: #ff6b81;
}
header > #header-wrapper > #site-title {
    font-size: 35px;
    font-family: 'dohyeon';
    margin-bottom: 20px;
    color: rgba(245, 245, 245, 1);
}
svg{
    width: 200px;
    /*상대포지션*/
    position: relative;
    /*z-index: 10;*/
}
#heart{
    /*색 보충*/
    fill: #eee;

    /*stroke속성은 선, 문자, 원소등의 테두리에대해서 디자인 가능*/
    stroke: var(--c);
    /*선의 넓이*/
    stroke-width: 40px;
    /*선을 점선으로 설정, 점선의 길이 설정*/
    stroke-dasharray: 3000;
    /*displacement of line*/
    stroke-dashoffset: 3000;
    /*끝점은 둥글게*/
    stroke-linecap: round;

    
}

span{
    font-family: 'dohyeon';
    display: block;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-radius: 50%;
    /*절대적 포지션: center*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    /*각 방향의 쉐도우 설정*/
    /*var함수로 쉐도우 컬러 설정*/
    box-shadow: 0 -160px 0 var(--c),
    0 160px 0 var(--c),
    -160px 0 0 var(--c),
    160px 0 0 var(--c),
    -120px -120px 0 var(--c),
    120px -120px 0 var(--c),
    120px 120px 0 var(--c),
    -120px 120px 0 var(--c);
}

/*checkbox를 클릭할 경우 애니메이션 실행*/
#checkbox:checked + svg #heart{
    /*애니메이션실행: 애니메이션이름, 실행시간, 선형 마지막 정지한 프레임*/
    animation: drawHeart 1s linear forwards;
}

#checkbox:checked ~ span{
    /*애니메이션실행: 애니메이션이름, 실행시간, 선형 마지막 정지한 프레임*/
    animation: blink 0.5s ease-in-out forwards;
    /*애니메이션 딜레이*/
    animation-delay: 0.8s ;
}

#checkbox:checked + svg{
     /*애니메이션실행: 애니메이션이름, 실행시간, 선형 마지막 정지한 프레임*/
    animation: beat 1s linear forwards;;
}
label{
    /*마우스 heart로 이동시 마우스 커서변동*/
    cursor: pointer;
}

/*애니메이션 효과 설정*/
/*heart 애니메이션*/
@keyframes drawHeart{
    0%{
        stroke-dashoffset: 2600;
    }
    80%{
        fill: #eee;
        stroke-dashoffset: 0;
    }
    100%{
        fill: var(--c);
        stroke-dashoffset: 0;
    }

}
/*점 애니메이션*/
@keyframes blink{
    0%{
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0.8;
    }
    80%{
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100%{
        transform: translate(-50%, -50%) scale(1.1);
        opacity: 0;
    }
}

/*두근두근 애니메이션*/
@keyframes beat {
    0%{
        transform: scale(1);
    }
    70%{
        transform: scale(1);
    }
    80%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
}
</style>