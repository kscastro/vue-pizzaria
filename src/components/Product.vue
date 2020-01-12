<template>
  <div class="wapper__product">
    <div class="product__img">
      <div class="container__img">
        <img
          src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="wapper__product__info">
      <h2 class="product__info__title">Calabresa a moda da casa</h2>
      <h4 class="product__info__sub_title">
        Um delicioso e saboroso com tudo feito na hora
      </h4>
      <p class="product__info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
        mollitia, omnis cum dolor impedit facilis ipsum inventore, recusandae,
        laudantium nobis quos rem fuga quasi!
      </p>
      <div class="wapper__btn">
        <button class="less"> - </button>
        <span class="value">1</span>
        <button class="more"> + </button>
      </div>
      <span>preço: 15</span>
      <button>Adicionar</button> 
    </div>
    <!-- https://dribbble.com/shots/5059613-Web-Food-Delivery-Platform-Food-Search/attachments -->
  </div>
</template>
<script>
export default {
  name: "ProductComponent"
};
</script>
<style lang="stylus">
font-color = #3b3a55;
b-width = 100%;
.wapper__product{
  width: b-width;
  height 100vh;
  padding: 20px;
  display: flex;
  background: #fcfbfe;
  // background : #acadc4;
  justify-content: space-between;
  .product__img {
    width: b-width;
    display flex;
    justify-content: center;
    .container__img {
      width: b-width;
      img {
        width: b-width;
        max-width: 100%;
        border: none;
        border-radius: 4px;
      }
    }
  }
  .wapper__product__info {
    padding-left: 20px;
    padding-right : 20px;
      .product__info__title {
      font-size: 3rem;
      line-height 16px;
      font-weight: 700;
      color: font-color;
     }
    .product__info__sub_title{
      color: font-color;
      line-height 16px;
      font-font-weight :100;
    }
    .product__info__description {
      font-size: 1rem;
      color: font-color;
    }
  }
  .wapper__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 0 9px 3px rgba(0, 0, 0, 0.2);

  &  > .less {
    color: font-color;
    background: #fff;
    font-size: 1rem;
    border: none;
    padding: 11px 20px 11px 20px;
    border-radius : 20px 0 0 20px;
    
  }
  & > .value {
    display: flex;
    justify-content : center;
    align-items : center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  & > .more {
    border-radius : 0 20px 20px 0;
    padding : 11px 20px 11px 20px;
    border: none;
    font-size: 1rem;
    background: #fff;
  }
  
  }
}
</style>
