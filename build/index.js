!function(){this.css="* { margin: 0px; padding: 0px;}body { font-family: Arial, Helvetica, sans-serif; box-sizing: border-box;}.layout-carousel { width: 700px; background-color: #222222; margin: 50px auto; min-height: 400px; border-top: 5px solid #e96833; border-radius: 5px; overflow: hidden;}.layout-carousel .carousel-title h1 { margin: 20px; color: #fff;}.layout-carousel .carousel-title h1 span { color: #e96833;}.layout-carousel .carousel-container { width: 100%; padding-left: 20px; position: relative;}.layout-carousel .carousel-container .track { width: 100%; display: flex; transition: all 0.5s;}.layout-carousel .carousel-container .track .card-container { flex-shrink: 0; width: 250px; height: 300px; padding-right: 20px; box-sizing: border-box; border-radius: 5px;}.layout-carousel .carousel-container .track .card-container .card { width: 100%; height: 100%;}.layout-carousel .carousel-container .track .card-container .card .card-img { width: 100%; height: 50%;}.layout-carousel .carousel-container .track .card-container .card .card-img img { width: 100%; height: 100%; object-fit: cover;}.layout-carousel .carousel-container .track .card-container .card .card-text { height: 50%; background-color: #fff;}.layout-carousel .carousel-container .track .card-container .card .card-text p { padding: 10px; color: #000; font-size: 18px; font-weight: 600;}.layout-carousel .carousel-container .controls .arrow { position: absolute; top: 50%; transform: translateY(-50%); cursor: pointer; color: #fff; background-color: #e96833;}.layout-carousel .carousel-container .controls .arrow.left { left: -10px; font-size: 30px; width: 50px; height: 50px; line-height: 50px; text-align: center; border: 1px solid #e96833; border-radius: 50%; display: none;}.layout-carousel .carousel-container .controls .arrow.right { top: 85px; right: 19px; font-size: 30px; width: 35px; height: 80px; line-height: 80px; text-align: center; border: 1px solid #e96833; border-radius: 5px 0 0 5px;}.layout-carousel .carousel-container .controls ul { position: absolute; top: -40px; right: 40px; list-style: none; display: flex;}.layout-carousel .carousel-container .controls ul li { width: 10px; height: 10px; background-color: #404040; border-radius: 50%; margin: 5px; cursor: pointer;}.layout-carousel .carousel-container .controls ul li.selected { background-color: #e96833;}/*# sourceMappingURL=styleCarousel.css.map */",this.html='<div class="layout-carousel"><div class="carousel-title"><h1 class="title-brand"><span>e</span>Magazine</h1></div><div class="content-carousel"><div class="carousel-container"><div class="track"><div class="card-container"><div class="card"><div class="card-img"><img src="https://kienthuctonghop.vn/wp-content/uploads/2021/04/timothee-Chalamet-la-ai.jpg" alt="1"></div><div class="card-text"><p>Vẫn mang phong cách đẹp, hiện đại, hoàn thiện tỉ mỉ như các chiếc máy tính Surface khác của Microsoft</p></div></div></div><div class="card-container"><div class="card"><div class="card-img"><img src="https://media-cdn.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg?w=720&crop=auto&scale=both" alt="1"></div><div class="card-text"><p>Việc sử dụng smartphone ngày nay không chỉ dừng lại ở nghe, gọi, xem, chơi nữa mà còn dùng nó như một</p></div></div></div><div class="card-container"><div class="card"><div class="card-img"><img src="https://kienthuctonghop.vn/wp-content/uploads/2021/04/timothee-Chalamet-la-ai.jpg" alt="1"></div><div class="card-text"><p>Bộ GTVT ban hành hướng dẫn tạm thời về việc đi lại của người dân, qua đó các địa phương chỉ cần làm xét nghiệm</p></div></div></div><div class="card-container"><div class="card"><div class="card-img"><img src="https://media-cdn.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg?w=720&crop=auto&scale=both" alt="1"></div><div class="card-text"><p>OPPO Reno6 Pro 5G tại Việt Nam là thiết bị cao cấp nhất thuộc dòng Reno thế hệ thứ 6. Được thiết kế cho</p></div></div></div><div class="card-container"><div class="card"><div class="card-img"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Timoth%C3%A9e_Chalamet_in_2018.jpg" alt="1"></div><div class="card-text"><p>Đây là review về Máy in Canon MF445Dw đa chức năng - Bá trong tầm giá của mình. Mình mua nó với giá 10</p></div></div></div><div class="card-container"><div class="card"><div class="card-img"><img src="https://media-cdn.laodong.vn/storage/newsportal/2021/8/27/947005/Ronaldo.jpg" alt="1"></div><div class="card-text"><p>Tin đồn trước sự kiện Apple về MacBook Pro mới: không có Touch Bar, 64GB RAM, MagSafe,...</p></div></div></div><div class="card-container"><div class="card"><div class="card-img"><img src="https://cdnimg.vietnamplus.vn/t870/uploaded/mzdic/2021_09_11/ronaldoghibanmu1.jpg" alt="1"></div><div class="card-text"><p>Tin đồn trước sự kiện Apple về MacBook Pro mới: không có Touch Bar, 64GB RAM, MagSafe,...</p></div></div></div></div><div class="controls"><span class="arrow left">&lt;</span><span class="arrow right">&gt;</span><ul></ul></div></div></div></div>',document.querySelector("body").innerHTML=`<style>${this.css}</style>${this.html}`}(),function(){const t=document.querySelector(".left"),a=document.querySelector(".right"),c=document.querySelector(".track"),e=document.querySelector(".card-container").offsetWidth;let o=0;const i=document.querySelectorAll(".track .card-container").length,r=document.querySelector(".carousel-container").offsetWidth,s=document.querySelector(".card-container").offsetWidth,n=Math.ceil(r/s),l=document.querySelector(".controls ul");function d(t){document.querySelector(".controls .selected").classList.remove("selected"),c.style.transform=`translateX(-${e*t}px)`}a.addEventListener("click",(()=>{o===i-n-1?(o=0,d(o),l.children[o].classList.add("selected")):(o+=1,d(o),l.children[o].classList.add("selected"))})),t.addEventListener("click",(()=>{0===o?(o=i-n-1,d(o),l.children[o].classList.add("selected")):(o-=1,d(o),l.children[o].classList.add("selected"))})),function(){for(let a=0;a<i-n;a++){var t=document.createElement("li");document.querySelector(".controls ul").appendChild(t)}document.querySelectorAll(".controls li")[0].classList.add("selected")}(),document.querySelectorAll(".controls li").forEach((function(t,a){t.addEventListener("click",(function(){document.querySelector(".controls .selected").classList.remove("selected"),c.style.transform=`translateX(-${e*a}px)`,t.classList.add("selected")}))})),setInterval((function(){o===i-n-1?(o=0,d(o),l.children[o].classList.add("selected")):(o+=1,d(o),l.children[o].classList.add("selected"))}),3e3)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkNBQUEsV0FHQ0EsS0FBS0MsSUFBSSxrMUVBQ1RELEtBQUtFLEtBQUssa21GQUNWQyxTQUFTQyxjQUFjLFFBQVFDLFVBQVksVUFBVUwsS0FBS0MsY0FBY0QsS0FBS0UsT0FFOUVJLEdBRUEsV0FDQyxNQUFNQyxFQUFPSixTQUFTQyxjQUFjLFNBQy9CSSxFQUFRTCxTQUFTQyxjQUFjLFVBRy9CSyxFQUFRTixTQUFTQyxjQUFjLFVBRS9CTSxFQUFZUCxTQUFTQyxjQUFjLG1CQUFtQk8sWUFFNUQsSUFBSUMsRUFBUSxFQUVaLE1BQU1DLEVBQWFWLFNBQVNXLGlCQUFpQiwwQkFBMEJDLE9BRWpFQyxFQUFlYixTQUFTQyxjQUFjLHVCQUF1Qk8sWUFDN0RNLEVBQWNkLFNBQVNDLGNBQWMsbUJBQW1CTyxZQUN4RE8sRUFBbUJDLEtBQUtDLEtBQUtKLEVBQWVDLEdBQzVDSSxFQUFtQmxCLFNBQVNDLGNBQWMsZ0JBRWhELFNBQVNrQixFQUFTQyxHQUNkcEIsU0FBU0MsY0FBYyx1QkFBdUJvQixVQUFVQyxPQUFPLFlBRS9EaEIsRUFBTWlCLE1BQU1DLFVBQVksZUFBZWpCLEVBQVlhLE9BR3ZEZixFQUFNb0IsaUJBQWlCLFNBQVMsS0FHeEJoQixJQUFVQyxFQUFhSyxFQUFtQixHQUMxQ04sRUFBUSxFQUNSVSxFQUFTVixHQUNUUyxFQUFpQlEsU0FBU2pCLEdBQU9ZLFVBQVVNLElBQUksY0FFL0NsQixHQUFTLEVBQ1RVLEVBQVNWLEdBQ1RTLEVBQWlCUSxTQUFTakIsR0FBT1ksVUFBVU0sSUFBSSxnQkFJdkR2QixFQUFLcUIsaUJBQWlCLFNBQVMsS0FFZCxJQUFWaEIsR0FDQ0EsRUFBUUMsRUFBYUssRUFBbUIsRUFDeENJLEVBQVNWLEdBQ1RTLEVBQWlCUSxTQUFTakIsR0FBT1ksVUFBVU0sSUFBSSxjQUUvQ2xCLEdBQVMsRUFDVFUsRUFBU1YsR0FDVFMsRUFBaUJRLFNBQVNqQixHQUFPWSxVQUFVTSxJQUFJLGdCQU12RCxXQUNJLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJbEIsRUFBYUssRUFBa0JhLElBQUssQ0FDcEQsSUFBSUMsRUFBSzdCLFNBQVM4QixjQUFjLE1BQ2hDOUIsU0FBU0MsY0FBYyxnQkFBZ0I4QixZQUFZRixHQUV2RDdCLFNBQVNXLGlCQUFpQixnQkFBZ0IsR0FBR1UsVUFBVU0sSUFBSSxZQUUvREssR0FHQWhDLFNBQVNXLGlCQUFpQixnQkFBZ0JzQixTQUFRLFNBQVVDLEVBQVdkLEdBQ25FYyxFQUFVVCxpQkFBaUIsU0FBUyxXQUNoQ3pCLFNBQVNDLGNBQWMsdUJBQXVCb0IsVUFBVUMsT0FBTyxZQUMvRGhCLEVBQU1pQixNQUFNQyxVQUFZLGVBQWVqQixFQUFZYSxPQUNuRGMsRUFBVWIsVUFBVU0sSUFBSSxrQkFnQmhDUSxhQVpBLFdBQ1ExQixJQUFVQyxFQUFhSyxFQUFtQixHQUMxQ04sRUFBUSxFQUNSVSxFQUFTVixHQUNUUyxFQUFpQlEsU0FBU2pCLEdBQU9ZLFVBQVVNLElBQUksY0FFL0NsQixHQUFTLEVBQ1RVLEVBQVNWLEdBQ1RTLEVBQWlCUSxTQUFTakIsR0FBT1ksVUFBVU0sSUFBSSxlQUk3QixLQUUxQlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlkZS1hbmltYXRpb24vLi9zcmMvdGVzdC9yZXBsYWNlRGF0YTIvcmVuZGVyLUNhcm91c2VsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlckNhcm91c2VsKCl7XHJcblx0dmFyIGltZzEgPSdodHRwczovL2tpZW50aHVjdG9uZ2hvcC52bi93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNC90aW1vdGhlZS1DaGFsYW1ldC1sYS1haS5qcGcnLCB0ZXh0MSA9J1bhuqtuIG1hbmcgcGhvbmcgY8OhY2ggxJHhurlwLCBoaeG7h24gxJHhuqFpLCBob8OgbiB0aGnhu4duIHThu4kgbeG7iSBuaMawIGPDoWMgY2hp4bq/YyBtw6F5IHTDrW5oIFN1cmZhY2Uga2jDoWMgY+G7p2EgTWljcm9zb2Z0JywgaW1nMiA9J2h0dHBzOi8vbWVkaWEtY2RuLmxhb2Rvbmcudm4vc3RvcmFnZS9uZXdzcG9ydGFsLzIwMjEvMy8yNC84OTI0ODYvUm9zZS1CbGFja3BpbmstU2luaC0uanBnP3c9NzIwJmNyb3A9YXV0byZzY2FsZT1ib3RoJywgdGV4dDI9ICdWaeG7h2Mgc+G7rSBk4bulbmcgc21hcnRwaG9uZSBuZ8OgeSBuYXkga2jDtG5nIGNo4buJIGThu6tuZyBs4bqhaSDhu58gbmdoZSwgZ+G7jWksIHhlbSwgY2jGoWkgbuG7r2EgbcOgIGPDsm4gZMO5bmcgbsOzIG5oxrAgbeG7mXQgJywgaW1nMyA9ICdodHRwczovL2tpZW50aHVjdG9uZ2hvcC52bi93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNC90aW1vdGhlZS1DaGFsYW1ldC1sYS1haS5qcGcnLHRleHQzID0nQuG7mSBHVFZUIGJhbiBow6BuaCBoxrDhu5tuZyBk4bqrbiB04bqhbSB0aOG7nWkgduG7gSB2aeG7h2MgxJFpIGzhuqFpIGPhu6dhIG5nxrDhu51pIGTDom4sIHF1YSDEkcOzIGPDoWMgxJHhu4thIHBoxrDGoW5nIGNo4buJIGPhuqduIGzDoG0geMOpdCBuZ2hp4buHbScsIGltZzQgPSAnaHR0cHM6Ly9tZWRpYS1jZG4ubGFvZG9uZy52bi9zdG9yYWdlL25ld3Nwb3J0YWwvMjAyMS8zLzI0Lzg5MjQ4Ni9Sb3NlLUJsYWNrcGluay1TaW5oLS5qcGc/dz03MjAmY3JvcD1hdXRvJnNjYWxlPWJvdGgnLCB0ZXh0ND0gJ09QUE8gUmVubzYgUHJvIDVHIHThuqFpIFZp4buHdCBOYW0gbMOgIHRoaeG6v3QgYuG7iyBjYW8gY+G6pXAgbmjhuqV0IHRodeG7mWMgZMOybmcgUmVubyB0aOG6vyBo4buHIHRo4bupIDYuIMSQxrDhu6NjIHRoaeG6v3Qga+G6vyBjaG8nLCBpbWc1ID0naHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy81LzVmL1RpbW90aCVDMyVBOWVfQ2hhbGFtZXRfaW5fMjAxOC5qcGcnLCB0ZXh0NT0gJ8SQw6J5IGzDoCByZXZpZXcgduG7gSBNw6F5IGluIENhbm9uIE1GNDQ1RHcgxJFhIGNo4bupYyBuxINuZyAtIELDoSB0cm9uZyB04bqnbSBnacOhIGPhu6dhIG3DrG5oLiBNw6xuaCBtdWEgbsOzIHbhu5tpIGdpw6EgMTAnLCBpbWc2PSAnaHR0cHM6Ly9tZWRpYS1jZG4ubGFvZG9uZy52bi9zdG9yYWdlL25ld3Nwb3J0YWwvMjAyMS84LzI3Lzk0NzAwNS9Sb25hbGRvLmpwZycsIHRleHQ2ID0gJ1RpbiDEkeG7k24gdHLGsOG7m2Mgc+G7sSBraeG7h24gQXBwbGUgduG7gSBNYWNCb29rIFBybyBt4bubaToga2jDtG5nIGPDsyBUb3VjaCBCYXIsIDY0R0IgUkFNLCBNYWdTYWZlLC4uLicsIGltZzcgPSAnaHR0cHM6Ly9jZG5pbWcudmlldG5hbXBsdXMudm4vdDg3MC91cGxvYWRlZC9temRpYy8yMDIxXzA5XzExL3JvbmFsZG9naGliYW5tdTEuanBnJywgdGV4dDc9ICdUaW4gxJHhu5NuIHRyxrDhu5tjIHPhu7Ega2nhu4duIEFwcGxlIHbhu4EgTWFjQm9vayBQcm8gbeG7m2k6IGtow7RuZyBjw7MgVG91Y2ggQmFyLCA2NEdCIFJBTSwgTWFnU2FmZSwuLi4nO1xyXG5cclxuXHR0aGlzLmNzcz1gKiB7IG1hcmdpbjogMHB4OyBwYWRkaW5nOiAwcHg7fWJvZHkgeyBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgYm94LXNpemluZzogYm9yZGVyLWJveDt9LmxheW91dC1jYXJvdXNlbCB7IHdpZHRoOiA3MDBweDsgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjsgbWFyZ2luOiA1MHB4IGF1dG87IG1pbi1oZWlnaHQ6IDQwMHB4OyBib3JkZXItdG9wOiA1cHggc29saWQgI2U5NjgzMzsgYm9yZGVyLXJhZGl1czogNXB4OyBvdmVyZmxvdzogaGlkZGVuO30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC10aXRsZSBoMSB7IG1hcmdpbjogMjBweDsgY29sb3I6ICNmZmY7fS5sYXlvdXQtY2Fyb3VzZWwgLmNhcm91c2VsLXRpdGxlIGgxIHNwYW4geyBjb2xvcjogI2U5NjgzMzt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIHsgd2lkdGg6IDEwMCU7IHBhZGRpbmctbGVmdDogMjBweDsgcG9zaXRpb246IHJlbGF0aXZlO30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC1jb250YWluZXIgLnRyYWNrIHsgd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IHRyYW5zaXRpb246IGFsbCAwLjVzO30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC1jb250YWluZXIgLnRyYWNrIC5jYXJkLWNvbnRhaW5lciB7IGZsZXgtc2hyaW5rOiAwOyB3aWR0aDogMjUwcHg7IGhlaWdodDogMzAwcHg7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJvcmRlci1yYWRpdXM6IDVweDt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIC50cmFjayAuY2FyZC1jb250YWluZXIgLmNhcmQgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC1jb250YWluZXIgLnRyYWNrIC5jYXJkLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1pbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MCU7fS5sYXlvdXQtY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRhaW5lciAudHJhY2sgLmNhcmQtY29udGFpbmVyIC5jYXJkIC5jYXJkLWltZyBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBvYmplY3QtZml0OiBjb3Zlcjt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIC50cmFjayAuY2FyZC1jb250YWluZXIgLmNhcmQgLmNhcmQtdGV4dCB7IGhlaWdodDogNTAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC1jb250YWluZXIgLnRyYWNrIC5jYXJkLWNvbnRhaW5lciAuY2FyZCAuY2FyZC10ZXh0IHAgeyBwYWRkaW5nOiAxMHB4OyBjb2xvcjogIzAwMDsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNjAwO30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC1jb250YWluZXIgLmNvbnRyb2xzIC5hcnJvdyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZC1jb2xvcjogI2U5NjgzMzt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIC5jb250cm9scyAuYXJyb3cubGVmdCB7IGxlZnQ6IC0xMHB4OyBmb250LXNpemU6IDMwcHg7IHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IGxpbmUtaGVpZ2h0OiA1MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkICNlOTY4MzM7IGJvcmRlci1yYWRpdXM6IDUwJTsgZGlzcGxheTogbm9uZTt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIC5jb250cm9scyAuYXJyb3cucmlnaHQgeyB0b3A6IDg1cHg7IHJpZ2h0OiAxOXB4OyBmb250LXNpemU6IDMwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDgwcHg7IGxpbmUtaGVpZ2h0OiA4MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkICNlOTY4MzM7IGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O30ubGF5b3V0LWNhcm91c2VsIC5jYXJvdXNlbC1jb250YWluZXIgLmNvbnRyb2xzIHVsIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC00MHB4OyByaWdodDogNDBweDsgbGlzdC1zdHlsZTogbm9uZTsgZGlzcGxheTogZmxleDt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIC5jb250cm9scyB1bCBsaSB7IHdpZHRoOiAxMHB4OyBoZWlnaHQ6IDEwcHg7IGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7IGJvcmRlci1yYWRpdXM6IDUwJTsgbWFyZ2luOiA1cHg7IGN1cnNvcjogcG9pbnRlcjt9LmxheW91dC1jYXJvdXNlbCAuY2Fyb3VzZWwtY29udGFpbmVyIC5jb250cm9scyB1bCBsaS5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6ICNlOTY4MzM7fS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlQ2Fyb3VzZWwuY3NzLm1hcCAqL2A7XHJcblx0dGhpcy5odG1sPWA8ZGl2IGNsYXNzPVwibGF5b3V0LWNhcm91c2VsXCI+PGRpdiBjbGFzcz1cImNhcm91c2VsLXRpdGxlXCI+PGgxIGNsYXNzPVwidGl0bGUtYnJhbmRcIj48c3Bhbj5lPC9zcGFuPk1hZ2F6aW5lPC9oMT48L2Rpdj48ZGl2IGNsYXNzPVwiY29udGVudC1jYXJvdXNlbFwiPjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwidHJhY2tcIj48ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiY2FyZFwiPjxkaXYgY2xhc3M9XCJjYXJkLWltZ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9raWVudGh1Y3Rvbmdob3Audm4vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvdGltb3RoZWUtQ2hhbGFtZXQtbGEtYWkuanBnXCIgYWx0PVwiMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj48cD5W4bqrbiBtYW5nIHBob25nIGPDoWNoIMSR4bq5cCwgaGnhu4duIMSR4bqhaSwgaG/DoG4gdGhp4buHbiB04buJIG3hu4kgbmjGsCBjw6FjIGNoaeG6v2MgbcOheSB0w61uaCBTdXJmYWNlIGtow6FjIGPhu6dhIE1pY3Jvc29mdDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiY2FyZFwiPjxkaXYgY2xhc3M9XCJjYXJkLWltZ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS1jZG4ubGFvZG9uZy52bi9zdG9yYWdlL25ld3Nwb3J0YWwvMjAyMS8zLzI0Lzg5MjQ4Ni9Sb3NlLUJsYWNrcGluay1TaW5oLS5qcGc/dz03MjAmY3JvcD1hdXRvJnNjYWxlPWJvdGhcIiBhbHQ9XCIxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPjxwPlZp4buHYyBz4butIGThu6VuZyBzbWFydHBob25lIG5nw6B5IG5heSBraMO0bmcgY2jhu4kgZOG7q25nIGzhuqFpIOG7nyBuZ2hlLCBn4buNaSwgeGVtLCBjaMahaSBu4buvYSBtw6AgY8OybiBkw7luZyBuw7MgbmjGsCBt4buZdDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiY2FyZFwiPjxkaXYgY2xhc3M9XCJjYXJkLWltZ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9raWVudGh1Y3Rvbmdob3Audm4vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvdGltb3RoZWUtQ2hhbGFtZXQtbGEtYWkuanBnXCIgYWx0PVwiMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj48cD5C4buZIEdUVlQgYmFuIGjDoG5oIGjGsOG7m25nIGThuqtuIHThuqFtIHRo4budaSB24buBIHZp4buHYyDEkWkgbOG6oWkgY+G7p2EgbmfGsOG7nWkgZMOibiwgcXVhIMSRw7MgY8OhYyDEkeG7i2EgcGjGsMahbmcgY2jhu4kgY+G6p24gbMOgbSB4w6l0IG5naGnhu4dtPC9wPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJjYXJkXCI+PGRpdiBjbGFzcz1cImNhcmQtaW1nXCI+PGltZyBzcmM9XCJodHRwczovL21lZGlhLWNkbi5sYW9kb25nLnZuL3N0b3JhZ2UvbmV3c3BvcnRhbC8yMDIxLzMvMjQvODkyNDg2L1Jvc2UtQmxhY2twaW5rLVNpbmgtLmpwZz93PTcyMCZjcm9wPWF1dG8mc2NhbGU9Ym90aFwiIGFsdD1cIjFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+PHA+T1BQTyBSZW5vNiBQcm8gNUcgdOG6oWkgVmnhu4d0IE5hbSBsw6AgdGhp4bq/dCBi4buLIGNhbyBj4bqlcCBuaOG6pXQgdGh14buZYyBkw7JuZyBSZW5vIHRo4bq/IGjhu4cgdGjhu6kgNi4gxJDGsOG7o2MgdGhp4bq/dCBr4bq/IGNobzwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiY2FyZFwiPjxkaXYgY2xhc3M9XCJjYXJkLWltZ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy81LzVmL1RpbW90aCVDMyVBOWVfQ2hhbGFtZXRfaW5fMjAxOC5qcGdcIiBhbHQ9XCIxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPjxwPsSQw6J5IGzDoCByZXZpZXcgduG7gSBNw6F5IGluIENhbm9uIE1GNDQ1RHcgxJFhIGNo4bupYyBuxINuZyAtIELDoSB0cm9uZyB04bqnbSBnacOhIGPhu6dhIG3DrG5oLiBNw6xuaCBtdWEgbsOzIHbhu5tpIGdpw6EgMTA8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImNhcmRcIj48ZGl2IGNsYXNzPVwiY2FyZC1pbWdcIj48aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEtY2RuLmxhb2Rvbmcudm4vc3RvcmFnZS9uZXdzcG9ydGFsLzIwMjEvOC8yNy85NDcwMDUvUm9uYWxkby5qcGdcIiBhbHQ9XCIxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPjxwPlRpbiDEkeG7k24gdHLGsOG7m2Mgc+G7sSBraeG7h24gQXBwbGUgduG7gSBNYWNCb29rIFBybyBt4bubaToga2jDtG5nIGPDsyBUb3VjaCBCYXIsIDY0R0IgUkFNLCBNYWdTYWZlLC4uLjwvcD48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiY2FyZFwiPjxkaXYgY2xhc3M9XCJjYXJkLWltZ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly9jZG5pbWcudmlldG5hbXBsdXMudm4vdDg3MC91cGxvYWRlZC9temRpYy8yMDIxXzA5XzExL3JvbmFsZG9naGliYW5tdTEuanBnXCIgYWx0PVwiMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj48cD5UaW4gxJHhu5NuIHRyxrDhu5tjIHPhu7Ega2nhu4duIEFwcGxlIHbhu4EgTWFjQm9vayBQcm8gbeG7m2k6IGtow7RuZyBjw7MgVG91Y2ggQmFyLCA2NEdCIFJBTSwgTWFnU2FmZSwuLi48L3A+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+PHNwYW4gY2xhc3M9XCJhcnJvdyBsZWZ0XCI+Jmx0Ozwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93IHJpZ2h0XCI+Jmd0Ozwvc3Bhbj48dWw+PC91bD48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj5gO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbm5lckhUTUwgPSBgPHN0eWxlPiR7dGhpcy5jc3N9PC9zdHlsZT4ke3RoaXMuaHRtbH1gO1xyXG59XHJcbnJlbmRlckNhcm91c2VsKClcclxuXHJcbmZ1bmN0aW9uIGpzQ2Fyb3VzZWwoKXtcclxuXHRjb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQnKTtcclxuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQnKTtcclxuXHJcblxyXG5jb25zdCB0cmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFjaycpO1xyXG5cclxuY29uc3QgY2FyZFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJykub2Zmc2V0V2lkdGg7XHJcblxyXG5sZXQgY291bnQgPSAwO1xyXG5cclxuY29uc3QgbnVtYmVySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFjayAuY2FyZC1jb250YWluZXInKS5sZW5ndGg7XHJcblxyXG5jb25zdCB3aWR0aEFsbEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY29udGFpbmVyJykub2Zmc2V0V2lkdGg7XHJcbmNvbnN0IHdpZHRoU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJykub2Zmc2V0V2lkdGhcclxuY29uc3QgbnVtYmVySXRlbVNjcmVlbiA9IE1hdGguY2VpbCh3aWR0aEFsbEl0ZW0gLyB3aWR0aFNjcmVlbik7XHJcbmNvbnN0IGluZGljYXRvclBhcmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMgdWwnKTtcclxuXHJcbmZ1bmN0aW9uIHNldEluZGV4KGluZGV4KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMgLnNlbGVjdGVkJykuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgIC8vIGluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgdHJhY2suc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Y2FyZFdpZHRoICogaW5kZXh9cHgpYDtcclxufVxyXG5cclxucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cclxuICAgIGlmIChjb3VudCA9PT0gbnVtYmVySXRlbSAtIG51bWJlckl0ZW1TY3JlZW4gLSAxKSB7XHJcbiAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIHNldEluZGV4KGNvdW50KTtcclxuICAgICAgICBpbmRpY2F0b3JQYXJlbnRzLmNoaWxkcmVuW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICBzZXRJbmRleChjb3VudCk7XHJcbiAgICAgICAgaW5kaWNhdG9yUGFyZW50cy5jaGlsZHJlbltjb3VudF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSlcclxuXHJcbmxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb3VudCA9IGNvdW50ID09PSAwID8gbnVtYmVySXRlbSAtIG51bWJlckl0ZW1TY3JlZW4gOiBjb3VudCAtPSAxO1xyXG4gICAgaWYoY291bnQgPT09IDApe1xyXG4gICAgICAgIGNvdW50ID0gbnVtYmVySXRlbSAtIG51bWJlckl0ZW1TY3JlZW4gLSAxO1xyXG4gICAgICAgIHNldEluZGV4KGNvdW50KTtcclxuICAgICAgICBpbmRpY2F0b3JQYXJlbnRzLmNoaWxkcmVuW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY291bnQgLT0gMTtcclxuICAgICAgICBzZXRJbmRleChjb3VudCk7XHJcbiAgICAgICAgaW5kaWNhdG9yUGFyZW50cy5jaGlsZHJlbltjb3VudF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTm9kZUNoaWxkZUxpKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJJdGVtIC0gbnVtYmVySXRlbVNjcmVlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scyB1bCcpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9scyBsaScpWzBdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbn1cclxuY3JlYXRlTm9kZUNoaWxkZUxpKCk7XHJcblxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRyb2xzIGxpJykuZm9yRWFjaChmdW5jdGlvbiAoaW5kaWNhdG9yLCBpbmRleCkge1xyXG4gICAgaW5kaWNhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scyAuc2VsZWN0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIHRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2NhcmRXaWR0aCAqIGluZGV4fXB4KWA7XHJcbiAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gdGltZUNhcm91c2VsKCl7XHJcbiAgICBpZiAoY291bnQgPT09IG51bWJlckl0ZW0gLSBudW1iZXJJdGVtU2NyZWVuIC0gMSkge1xyXG4gICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICBzZXRJbmRleChjb3VudCk7XHJcbiAgICAgICAgaW5kaWNhdG9yUGFyZW50cy5jaGlsZHJlbltjb3VudF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgc2V0SW5kZXgoY291bnQpO1xyXG4gICAgICAgIGluZGljYXRvclBhcmVudHMuY2hpbGRyZW5bY291bnRdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNldEludGVydmFsKHRpbWVDYXJvdXNlbCwgMzAwMCk7XHJcbn1cclxuanNDYXJvdXNlbCgpOyJdLCJuYW1lcyI6WyJ0aGlzIiwiY3NzIiwiaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJlbmRlckNhcm91c2VsIiwibGVmdCIsInJpZ2h0IiwidHJhY2siLCJjYXJkV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNvdW50IiwibnVtYmVySXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJ3aWR0aEFsbEl0ZW0iLCJ3aWR0aFNjcmVlbiIsIm51bWJlckl0ZW1TY3JlZW4iLCJNYXRoIiwiY2VpbCIsImluZGljYXRvclBhcmVudHMiLCJzZXRJbmRleCIsImluZGV4IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJhZGQiLCJpIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVOb2RlQ2hpbGRlTGkiLCJmb3JFYWNoIiwiaW5kaWNhdG9yIiwic2V0SW50ZXJ2YWwiLCJqc0Nhcm91c2VsIl0sInNvdXJjZVJvb3QiOiIifQ==