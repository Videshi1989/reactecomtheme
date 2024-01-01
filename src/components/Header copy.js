import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import logo from './Images/logo.png'
import toparrow from './Images/top_arrow.png'
import userimg from './Images/userimage.png'
import closebtn from './Images/closebtn.png'
import emptycart from './Images/emptycart.png'
import grocery from './Images/grocery.png'
import mobile from './Images/mobile.png'
import fashion from './Images/fashion.png'
import electronincs from './Images/electronincs.png'
import furniture from './Images/furniture.png'
import appliences from './Images/appliences.png'
import beauty from './Images/beauty.png'
import toy from './Images/toy.png'
import desktop from './Images/desktop.png'
import laptop from './Images/laptop.png'
import offer from './Images/offer.png'
import bucket from './Images/bucket.png'
import smartwatch from './Images/smartwatch.png'
import officechair from './Images/officechair.png'
import bottle from './Images/bottle.png'
import printer from './Images/printer.png'
import fan from './Images/fan.png'
import helmet from './Images/helmet.png'
import bag from './Images/bag.png'
import books from './Images/books.png'
import bike from './Images/bike.png'
import product1 from './Images/product1.jpg'
import product2 from './Images/product2.jpg'
import ele1 from './Images/ele1.jpg'
import ele2 from './Images/ele2.jpg'
import laptop1 from './Images/laptop1.jpg'
import camera from './Images/camera.jpg'
import category from './Images/category.png'
import allcategory from './Images/allcategory.png'


import './css/index.scss'

 const Header = () => {
 
  ///////////// forgot div show and hide

const[showlogin,Setshowlogin] = useState(true);
function ShowForgotPassword()
{
  showlogin ? Setshowlogin(false) : Setshowlogin(true)
}

///////// fixed header
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

/////////showing menu for mobile
  

  function Showmenu()
  {
    //document.querySelector('html').classList.add('dark');
    document.getElementById('mobdnone').classList.remove('mobdnone');
    document.getElementById('showbar').classList.add('mobdnone');
    document.getElementById('showbar').classList.remove('toggle');
    
    document.getElementById('hidebar').classList.add('toggle');
    document.getElementById('hidebar').classList.remove('toggleclose');
  }

  function Hidemenu()
  {
    document.getElementById('mobdnone').classList.add('mobdnone');
    document.getElementById('showbar').classList.add('toggle');
    document.getElementById('showbar').classList.remove('mobdnone');
    
    document.getElementById('hidebar').classList.remove('toggle');
    document.getElementById('hidebar').classList.add('toggleclose');
  }
  function ShowSignIn()
  {
    document.getElementById('popupsignin').style='display:block';
    document.getElementById('popupsignup').style='display:none';
    document.getElementById('popupforgot').style='display:none';
  }
  function CloseSignIn()
  {
    document.getElementById('popupsignin').style='display:none';
  }
  function ShowSignUp()
  {
    document.getElementById('popupsignup').style='display:block';
    document.getElementById('popupsignin').style='display:none';
    document.getElementById('popupforgot').style='display:none';
  }
  function CloseSignUp()
  {
    document.getElementById('popupsignup').style='display:none';
  }
  function ShowForgot()
  {
    document.getElementById('popupforgot').style='display:block';
    document.getElementById('popupsignin').style='display:none';
    document.getElementById('popupsignup').style='display:none';
  }
  function CloseForgot()
  {
    document.getElementById('popupforgot').style='display:none';

  }
  function ShowCartDetails()
  {
    document.getElementById('popupcartdetails').style='display:block';
  }
  function CloseCartDetails()
  {
    document.getElementById('popupcartdetails').style='display:none';
  }
  function ShowCategory()
  {
    document.getElementById('popupcategory').style='display:block';
  }
  function CloseCategory()
  {
    document.getElementById('popupcategory').style='display:none';
  }


    return(
        <>
     
    

      <div id="popupsignin" className="overlay" style={{display:'none'}}>

        <div className="popup-signin animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User Image" className="usericon"/></div>
          <h4 className="heading">Sign in <i className="fa fa-pencil heading-icon" aria-hidden="true"></i></h4>
          <hr className="hrline" />
          <span onClick={CloseSignIn}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
  <div className="mb-3">
  <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
    <input type="email" autoComplete="nope"  className="form-control f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password </label>
    <input type="password" autoComplete="nope" className="form-control f-control" title="Enter your password"  placeholder="Enter your password"/>
    
  </div>
  <br/>
   <button type="button"  className="btn btn-success btn-bg w-100">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i></button><br/>
   <br/>
   <span title="Forgot Password" className="fgtpwd" onClick={ShowForgot} >Forgot Password</span>
   <span onClick={ShowSignUp} className="fgtpwd" style={{float:"left",textDecoration:"underline"}} >New user? Don't have an account</span>

</form>
        </div> 
       
      </div>

        <div id="popupforgot" className="overlay" style={{display:'none'}}>
        <div className="popup-forgot animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User Image" className="usericon"/></div>
          <h4 className="heading">Forgot Password <i className="fa fa-eye-slash" aria-hidden="true"></i></h4>
          <hr className="hrline" />
          <span onClick={CloseForgot}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
  <div className="mb-3">
    <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email </label>
    <input type="email" autoComplete="nope" className="form-control f-control" title="Enter your email"  placeholder="Enter your email" aria-describedby="emailHelp"/>
    
  </div>
 
  <br/>
   <button type="button" className="btn btn-success btn-bg w-100">Submit <img loading='lazy'  src={toparrow} alt='img' className="uparrow" /></button><br/>
   <br/><span title="Go to login" className="fgtpwd" onClick={ShowSignIn} >Sign in</span>

</form>
        </div>
        </div>


      <div id="popupsignup" className="overlay" style={{display:'none'}}>
        <div className="popup animate-zoom">
          <div className="parentuser"><img loading='lazy'  src={userimg} alt="User Image" className="usericon"/></div>
          <h4 className="heading">Sign up <i className="fa fa-pencil-square-o heading-icon" aria-hidden="true"></i></h4>
          <hr className="hrlinesignup " />
          <span onClick={CloseSignUp}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
          <form>
            <div className="container padd-0 signinscrollcontrol">
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-pencil" aria-hidden="true"></i> Full Name</label>
                      <input type="email" autoComplete="nope" placeholder="Enter your full name" className="form-control f-control"  aria-describedby="emailHelp"/>
                      
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                      <input type="password" autoComplete="nope" placeholder="Enter your email" className="form-control f-control" />
    
                  </div>
                </div>
             
              </div>
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-phone" aria-hidden="true"></i> Mobile No.</label>
                      <input type="email" autoComplete="nope"  placeholder="Enter mobile no." className="form-control f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div>
                      <label  className="form-label"><i className="fa fa-eye" aria-hidden="true"></i> OTP</label>
                      <input type="password" autoComplete="nope" placeholder="Enter otp" className="form-control f-control" />
    
                  </div>
                </div>
              
              </div>
              <div className="row">
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Password</label>
                      <input type="password" autoComplete="nope" placeholder="Enter password" className="form-control f-control"  aria-describedby="emailHelp"/>
    
                  </div>
                  </div>
                  <div className="col mobwidth100flxunsetadmin">
                  <div className="mb-3">
                      <label  className="form-label"><i className="fa fa-unlock-alt" aria-hidden="true"></i> Confirm Password</label>
                      <input type="password" autoComplete="nope" placeholder="Confirm password" className="form-control f-control" />
    
                  </div>
                </div>
                
              </div>
              
         
         
          
        

            </div>
 
 
  <br/>
   <button type="button" className="btn btn-success btn-bg w-100">Sign up <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></button><br/>
   <br/>
   <span onClick={ShowSignIn}  title="Go to login" className="fgtpwd" >Sign in</span>
   
</form>
        </div>
      </div>

      <div id="popupcartdetails" className="overlay" style={{display:'none'}}>
        <div className="popup-cart animate-zoom" >
              <span onClick={CloseCartDetails}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
              <div className="container" style={{display:"block"}}>
                <div className="cartheight" id="style-scroll">
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={product1} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                          <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={product2} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={ele1} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name"src={ele2} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={laptop1} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                  <div className="row comp-pro">
                    <div className="col-3">
                          <div className="parent-cart">
                          <img loading='lazy'  alt="img" title="product name" src={camera} className="img-fluid"/><br/>
                          
                          </div>
                      </div>
                      <div className="col-9">
                        <div className="cart-desc">
                      <div className="pro-name">Product Name Product NameProduct NameProduct</div>
                      <span className="cart-desc">Qty: <i className="fa fa-plus plus" aria-hidden="true"></i> 5 <i className="fa fa-minus minus" aria-hidden="true"></i></span><br/>
                      <span className="pro-price">Rs.500</span> <span><i title="Delete this item" className="fa fa-trash-o delete" aria-hidden="true"></i></span>
                          </div>
                      </div>
                      <hr className="pro-hr"/>
                  </div>
                 
                  </div>
                  <div className="row">
                    <div className="col">
                    <div className="parentsubtot">
                      <p className="subtot"><span><b>Sub Total : </b></span><span><b>Rs.5000</b></span></p>
                     
                  </div>
                    </div>
                  </div>
                  
             
              </div>

              <div className="container emptycart" >
                  <div className="row">
                      <div className="col">
                          <div className="blankcart" style={{display:"none"}}>
                            <img loading='lazy' alt='img'  src={emptycart} style={{width:"40%"}} />
                            <br/><br/>
                            <h6><b>Your cart is empty!!!</b></h6>
                            <small className="emptytext">Looks like you have not added any thing to you cart. Go ahead & explore top categories.</small>
                            
                          </div>
                      </div>
                  </div>
              </div>


        </div>
      </div>

      <div id="popupcategory" className="overlay" style={{display:'none'}}>
        <div className="popup-category animate-zoom">
          
          <h4 className="heading"><img loading='lazy'  src={allcategory} alt='img' className="allcatimg"/> All Category</h4>
          <hr className="hrline" />
          <span onClick={CloseCategory}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>

          <div className="container-fluid">
              <div className="row categorycontrol" id='category-scroll'>
             
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Grocery">
                        <Link to="/grocery"><img loading='lazy'  src={grocery} alt="grocery" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Grocery</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Appliences">
                        <Link to="/grocery"><img loading='lazy'  src={appliences} alt="appliences" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Appliences</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Laptop">
                        <Link to="/grocery"><img loading='lazy'  src={laptop} alt="laptop" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Laptop</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Beauty">
                        <Link to="/grocery"><img loading='lazy'  src={beauty} alt="beauty" className="img-fluid"/></Link>
                     </div>
                     <Link to="/grocery"><span>Beauty</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Mobile">
                        <Link to="/grocery"><img loading='lazy'  src={mobile} alt="mobile" className="img-fluid"/></Link>
                     </div>
                     <Link to="/grocery"><span>Mobile</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Fashion">
                        <Link to="/grocery"><img loading='lazy'  src={fashion} alt="fashion" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Fashion</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Electronincs">
                        <Link to="/grocery"><img loading='lazy'  src={electronincs} alt="electronincs" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Electronincs</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="furniture">
                        <Link to="/grocery"><img loading='lazy'  src={furniture} alt="furniture" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Furniture</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Toys">
                        <Link to="/grocery"><img loading='lazy'  src={toy} alt="toy" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Toys</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Offer">
                        <Link to="/grocery"><img loading='lazy'  src={offer} alt="offer" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Offer</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Bucket">
                        <Link to="/grocery"><img loading='lazy'  src={bucket} alt="bucket" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Bucket</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Smartwatch">
                        <Link to="/grocery"><img loading='lazy'  src={smartwatch} alt="smartwatch" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Smartwatch</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Officechair">
                        <Link to="/grocery"><img loading='lazy'  src={officechair} alt="officechair" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Officechair</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Bottle">
                        <Link to="/grocery"><img loading='lazy'  src={bottle} alt="bottle" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Bottle</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Printer">
                        <Link to="/grocery"><img loading='lazy'  src={printer} alt="printer" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Printer</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Fan">
                        <Link to="/grocery"><img loading='lazy'  src={fan} alt="fan" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Fan</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Helmet">
                        <Link to="/grocery"><img loading='lazy'  src={helmet} alt="helmet" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Helmet</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Bag">
                        <Link to="/grocery"><img loading='lazy'  src={bag} alt="bag" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Bag</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Books">
                        <Link to="/grocery"><img loading='lazy'  src={books} alt="books" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Books</span></Link>
                   </div>
              </div>
              <div className="col">
                  <div className="text-center category-image-popup">
                     <div title="Bike">
                        <Link to="/grocery"><img loading='lazy'  src={bike} alt="bike" className="img-fluid"/></Link>
                     </div>
                     <Link to="grocery"><span>Bike</span></Link>
                   </div>
              </div>
            
          </div>
          </div>

        </div>
      </div>
     
        <header className={`header ${scrollPosition > 200 ? "fixed slide-in" : ""}`}>
          <div className="header-div">
          <div className="container-fluid">
          <div className="row">
            <div className="col-2 mobwidth100">
                  <div>
                  <Link to="/home" style={{border:"none!important"}}>
                      <img loading='lazy'  src={logo} alt="Logo" className="header-logo" />
                  </Link>
                  <span onClick={Showmenu} id="showbar" className="toggle" style={{display:'none'}}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                  </span>
                  <span onClick={Hidemenu} id="hidebar" className="toggleclose" style={{display:'none'}}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                  </span>
                  </div>

            </div>
                 <div className="col-7 mobwidth100 padd-0">
                  <div className="search-area">
                                            <input type="text" className="form-control search-product f-control f-control-mob" autoComplete="none" placeholder="Search"   />
                         <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                         
                         
                  </div>
                       
                  </div>
                  <div className="col mobwidth100 mobpadding0"> 
                  <div className="mobdnone outermobilemenu animate-right" id="mobdnone">
                         <ul className="top-menu">
                         <li title="More" className="parent-li ">More <i className="fa fa-caret-down" aria-hidden="true"></i>
                                <ul className="category">
                                    <li title="Home"><Link to='/home'>Home</Link></li>
                                    <li title="About us"><Link to="/about">About us</Link></li>
                                    <li title="Contact us"><Link to="/contact">Contact us</Link></li>
                                </ul>
                              </li>  
                             <li  title="Sign in">
                             <span  onClick={ShowSignIn}>Sign in</span>
                             </li>   
                             <li  title="Sign up"><span  onClick={ShowSignUp}>Sign up</span></li> 
                           
                         </ul>
                         
                     </div>
                     <div  className="cart-div"><span onClick={ShowCartDetails} className="cart-anch"><i className="fa fa-shopping-cart fa-lg" aria-hidden="true" title="Cart Details"></i><span className="cart-span">1</span></span></div>
                     
                  </div>
           

             </div>


          </div>
         </div>

        <div className="category-parent">                    
        <div className="container-fluid">
           <div className="row">
               <div className="col">
                  <div className="text-center" >
                     <div className="show-all-cat" title="view all category">
                    
                     <span onClick={ShowCategory}><img loading='lazy'  className="mt-2" src={category} alt="category" /></span>
                    
                    
                     </div>
                     
                   </div>
                </div> 
                <div className="col">
                  <div className="category-image text-center">
                     <div title="Grocery">
                        <img loading='lazy'  src={grocery} alt="grocery" />
                     </div>
                     <span>Grocery</span>
                   </div>
                </div> 
                <div className="col">
                  <div className="category-image text-center">
                     <div title="Appliances">
                        <img loading='lazy'  src={appliences} alt="Appliances" />
                     </div>
                     <span>Appliances</span>
                   </div>
                </div> 
                <div className="col">
                  <div className="category-image text-center">
                     <div title="Laptops">
                        <img loading='lazy'  src={laptop} alt="Laptops" />
                     </div>
                     <span>Laptops</span>
                   </div>
                </div> 
                <div className="col">
                  <div className="category-image text-center">
                     <div title="Beauty">
                        <img loading='lazy'  src={beauty} alt="Beauty" />
                     </div>
                     <span>Beauty</span>
                   </div>
                </div> 
               <div className="col">
                  <div className="category-image text-center">
                     <div title="Mobiles">
                        <img loading='lazy'  src={mobile} alt="Mobiles" />
                     </div>
                     <span>Mobiles</span>
                   </div>
                </div> 
                <div className="col mobdnone">
                  <div className="category-image text-center">
                     <div title="Fashion">
                        <img loading='lazy'  src={fashion} alt="Fashion" />
                     </div>
                     <span>Fashion <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>
                </div>
                <div className="col mobdnone">
                  <div className="category-image text-center">
                     <div title="Electronics">
                        <img loading='lazy'  src={electronincs} alt="Electronics" />
                     </div>
                     <span>Electronics <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>
                </div> 
                <div className="col mobdnone">
                  <div className="category-image text-center">
                     <div title="Furniture">
                        <img loading='lazy'  src={furniture} alt="Furniture" />
                     </div>
                     <span>Furniture <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>
                </div> 
            
                <div className="col mobdnone">
                  <div className="category-image text-center">
                     <div title="Toys">
                        <img loading='lazy'  src={toy} alt="Toys" />
                     </div>
                     <span>Toys <i className="fa fa-caret-down" aria-hidden="true"></i></span>
                   </div>
                </div> 
                <div className="col mobdnone">
                  <div className="category-image text-center">
                     <div title="Computers">
                        <img loading='lazy'  src={desktop} alt="Computers" />
                     </div>
                     <span>Computers</span>
                   </div>
                </div> 
               
                <div className="col mobdnone">
                  <div className="category-image text-center">
                     <div title="Offers">
                        <img loading='lazy'  src={offer} alt="Offers" />
                     </div>
                     <span>Offers</span>
                   </div>
                </div> 
              </div>
        </div>  
        </div>

       
              
          </header>
        </>
    )
}

export default Header