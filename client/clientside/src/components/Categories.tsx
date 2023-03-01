import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import React from "react";
import Card from "@mui/material/Card";
import '../css/categories.css';

const Categories = (props: any) => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Grid container spacing={2} style={{ marginTop: "0px" }}>
      <Grid item xs={12} sm={12} md={11} style={{ margin: "auto" }} >
      <div style={{ textAlign: "center" }} >
        <h2 > Our Top Categories </h2>
        {/* <hr className="centerDiamond" /> */}
        <Slider {...settings}>
          <div>
          <Card className="categoriesCard">
            <img src="https://thumbs.dreamstime.com/b/front-view-white-hoodie-mockup-template-young-guy-space-design-clothes-clothing-presentation-store-160433688.jpg"  style={{ width: "100%", objectFit: "contain" }} />
            
          </Card>
          <p>Mens Clothing</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://st3.depositphotos.com/1273429/12614/i/950/depositphotos_126142274-stock-photo-portrait-of-beautiful-girl-model.jpg"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Womens Clothing</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://media.istockphoto.com/id/486058484/photo/apple-watch.jpg?s=612x612&w=0&k=20&c=0foXF_J3ENYQ6ZcuP5YI9hsK5z2SNQ47J3suKYz9ook="  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Watches</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Shoes</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://i.imgur.com/mjDwxkA.jpg"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Perfumes</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://cdn.shopify.com/s/files/1/0650/6843/3638/products/apple-iphone-14-pro-max-5g-a2893-128gb256gb512gb1tb-gold-canadian-version-smartphone-981_1043x.jpg?v=1662654651"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Mobiles</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://consumer.huawei.com/content/dam/huawei-cbg-site/weu/ie/mkt/pdp/pc/matebook-x-pro-2021/grey.png"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Laptops</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="http://cdn.shopify.com/s/files/1/1676/7297/products/1MainImage3_grande.jpg?v=1620280054"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Earphones</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="https://sc04.alicdn.com/kf/Ha2135eb62b8642a9b2977dd5ee8dc74eG/221354685/Ha2135eb62b8642a9b2977dd5ee8dc74eG.png"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>Furnitures</p>
          </div>
          <div>
          <Card className="categoriesCard">
            <img src="data:image/jpeg;base64,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"  style={{ width: "100%", objectFit: "contain" }} />
          </Card>
          <p>TV</p>
          </div>
        </Slider>
      </div>
     </Grid>
     </Grid>
  );
};

export default Categories;
