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
                        {{data}}
                      </div>
                  </div>
                  <div id="answer-wrapper">
                    <div class = "answer-content"><img class = "item2" :src="items[index].item2.src">{{items[index].item2.content}}</div>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>

export default {
  name: 'FinalPage',
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
      data : ''
    }
  },
  created(){
    this.setup(); 
  },
  methods: {
    setup(){
        this.data = this.$store.state.name
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
    opacity: 0.8; /* 투명도 조절. 0에 가까울수록 이미지가 연해집니다. */
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
    background-color: rgb(252, 245, 247);
    border-radius:15px;
}

#content > #content-wrapper > #question-wrapper {
    margin-bottom: 30px;
}

#content > #content-wrapper > #answer-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: whitesmoke;
    padding: 15px;
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



</style>
