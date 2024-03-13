<template>
    <div id = "balance-game">
        <header>
              <div id="header-wrapper">
                  <div id="site-title">
                      밸런스 게임
                  </div>
              </div>
          </header>
          <div id="content">
              <div id="content-wrapper">
                  <div id="question-wrapper">
                      <div id="question">
                          횡단보도 초록불이 깜빡거린다. 이때 당신은
                      </div>
                  </div>
                  <div id="answer-wrapper">
                      <div class="answer bg-red"> <div class = "answer-content"><img class = "item1" :src="items[index].item1.src" @click = "imageClick(index, 1)">{{items[index].item1.content}}</div></div>
                      <div class="answer bg-blue"><div class = "answer-content"><img class = "item2" :src="items[index].item2.src" @click = "imageClick(index, 2)">{{items[index].item2.content}}</div></div>
                  </div>
              </div>
              <div id = "">
                <button type="button" class="button" :disabled="index === 0" @click = "moveToPrev">이전</button>
                <button type="button" class="button" :disabled="!buttonEnabled" @click = "moveToNext">다음</button>
              </div>
          </div>
      </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data(){
    return {
      items : [
        {
          item1 : {content : "hello1", src : require('@/assets/logo.png')},
          item2 : {content : "hello4", src : require('@/assets/logo.png')}
        },
        {
          item1 : {content : "hello2", src : require('@/assets/logo.png')},
          item2 : {content : "hello5", src : require('@/assets/logo.png')}
        }, 
        {
          item1 : {content : "hello3", src : require('@/assets/logo.png')},
          item2 : {content : "hello6", src : require('@/assets/logo.png')}
        }
        ], 
      index : 0, 
      selectedItem : '', 
      buttonEnabled : false
    }
  },
  created(){
    this.init(); 
  },
  methods: {
      init(){
        this.index = 0; 
      },
      moveToNext(){
        this.$store.commit("addItem", this.selectedItem);
        if (this.index == this.items.length -1) {
          this.$router.push({name : 'balance-game-end'})
          return; 
        }
        this.index ++; 
        this.buttonEnabled = false; 
      },
      moveToPrev(){
        if(this.index === 0){
          return; 
        }
        this.$store.commit("removeItem", this.selectedItem); 
        this.index --;
        this.selectedItem = ''
        this.buttonEnabled = false; 
      }, 
      imageClick(index, i){
        this.selectedItem = i === 1 ? this.items[index].item1.content : this.items[index].item2.content;
        this.buttonEnabled = true;
      }

  }
}
</script>
<style scoped>

@font-face {
  font-family: 'jua';
  src: url('../../public/fonts/BMJUA_ttf.ttf');
}

#balance-game{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/heart.jpeg');
    opacity: 0.75; /* 투명도 조절. 0에 가까울수록 이미지가 연해집니다. */
}
/**
 header, content width
 */
header, #content {
    display: flex;
    justify-content: center;
}

/**
 header
 */
header {
    color: rgba(255, 255, 255, 1);
    margin-bottom: 30px;
}

header > #header-wrapper {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header > #header-wrapper > #site-title {
    font-size: 35px;
    font-family: 'jua';
}

header > #header-wrapper > #menu-wrapper {
    display: flex;
}

header > #header-wrapper > #menu-wrapper > *:not(last-child) {
    margin-right: 20px;
}

/**
 content
 */
#content {
    flex-direction: column;
    align-items: center;
}

#content > #content-wrapper {
    flex-direction: column;
    margin: 50px 0;
    font-size: 20px;
    font-family: 'jua';
}

#content > #content-wrapper > #question-wrapper {
    margin-bottom: 30px;
}

#content > #content-wrapper > #answer-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: whitesmoke;
}

#content > #content-wrapper > #answer-wrapper > .answer {
    width: calc(50% - 40px);
    padding: 15px;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.answer-content { 
  display : flex; 
  flex-direction: column;
  align-items : center; 
}
.answer-content img { 
  width : 100%; 
  height : auto; 
  display : block; 
  margin : 0 auto; 
}

.bg-red {
    background-color: rgba(135,206,235, 1);
    overflow: hidden;
    border-radius:10px;
    opacity: 1; /* 투명도 조절. 0에 가까울수록 이미지가 연해집니다. */
}

.bg-blue {
    background-color: rgba(144, 238, 144, 1);
    overflow: hidden;
    border-radius:10px;
    opacity: 1; /* 투명도 조절. 0에 가까울수록 이미지가 연해집니다. */
}
.button {
  background-color : rgba(255, 240, 245, 1);
  color:black; 
  border:none;
  border-radius:10px;
  padding:15px;
  min-height:30px; 
  min-width: 120px; 
  margin-right: 10px; 
  font-family: 'jua';
}
.button:disabled {
  background-color: rgba(255, 240, 245, 0.5); /* 예시로 회색 투명 배경을 지정 */
  color: gray; /* 텍스트 색상 변경 */
  cursor: not-allowed; /* 비활성화된 상태에서는 마우스 커서를 보통 커서 대신 not-allowed로 변경 */
}

</style>
