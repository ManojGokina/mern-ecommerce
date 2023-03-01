import React from "react";
import { Grid, Card, CardMedia, Button } from "@mui/material";
import Slider from "react-slick";
import "../css/headcomp.css";

function HeadComp(props: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Grid container spacing={2} style={{ marginTop: "0px" }}>
      <Grid item xs={12} sm={12} md={6}>
        <Card style={{ height: "530px" }}>
          <Slider {...settings}>
            <div>
              <img
                src="https://media.news.de/images/857767080/images/54/e7/d56389e6d3cbbb61f5e24ea0fadb/nopic/no_pic/1200/675/1/1/-/4/1024/576/-/-/bis-oktober-gibts-glamour-shopping-week-rabatte-symbolfoto_857767080_1200x675_29aff29a845d07e9ad9d1f71223a5130.jpg"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src="https://image.gala.de/22183258/t/zR/v7/w1440/r1.5/-/teaser-gala-xmas-shopping.jpg"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src="https://lilastylehouse.com/wp-content/uploads/2018/09/Girls-Shopping.jpg"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src="https://essenceofqatar.com/wp-content/uploads/2020/07/TFS_Article_2019_970x643.jpg"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </div>
          </Slider>
        </Card>
      </Grid>
      <Grid
        container
        spacing={1}
        item
        xs={12}
        sm={12}
        md={6}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: "260px" }}>
            <div className="textOnImage">
              <h5 className="bestOffers">Best Offers On Mobiles</h5>
              <Button variant="contained" color="primary" size="small">
                Buy Now
              </Button>
            </div>
            <img
              src="https://www.smartprix.com/bytes/wp-content/uploads/2022/12/oneplus11.jpg"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: "260px" }}>
            <div className="textOnImage">
              <h5 className="bestOffers">Summer Collection</h5>
              <Button variant="contained" color="primary" size="small">
                Buy Now
              </Button>
            </div>
            <img
              src="https://t3.ftcdn.net/jpg/03/48/86/46/360_F_348864678_kgTAF6Xqgnd4OeeOXyWfbkh4zfyQwCtW.jpg"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: "260px" }}>
            <div className="textOnImage">
              <h5 className="bestOffers">Grab Your Watches</h5>
              <Button variant="contained" color="primary" size="small">
                Buy Now
              </Button>
            </div>
            <img
              src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.slideshow-xlarge_2x.jpg"
              style={{ width: "100%", objectFit: "contain", marginLeft: '60px', marginTop: '25px' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card style={{ height: "260px" }}>
            <div className="textOnImage">
              <h5 className="bestOffers">Best Offers On Shoes</h5>
              <Button variant="contained" color="primary" size="small">
                Buy Now
              </Button>
            </div>
            <img
              src="https://thumbs.dreamstime.com/b/white-sneakers-flying-laces-female-white-leather-shoes-laces-pink-background-pair-stylish-sneakers-comfortable-214827374.jpg"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeadComp;
