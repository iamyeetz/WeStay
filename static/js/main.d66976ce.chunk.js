(this["webpackJsonpwestay-staycation-services"]=this["webpackJsonpwestay-staycation-services"]||[]).push([[0],{29:function(e,t,c){},40:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(10),o=c.n(n),r=(c(40),c(15)),i=c.n(r),l=c(26),j=c(13),d=(c.p,c(29),c(42),c(19)),b=c(14),h=c(11),m=c(22),u=c(2),x=function(){return Object(u.jsx)(m.a,{className:"NavTop",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(h.a,{md:2,sm:3,xs:12,children:Object(u.jsxs)("h2",{className:"logo",children:["we",Object(u.jsx)("span",{children:"Stay"})]})}),Object(u.jsx)(h.a,{children:Object(u.jsxs)(d.a,{className:"NavTop-NavItems",defaultActiveKey:"/home",as:"ul",children:[Object(u.jsx)(d.a.Item,{as:"li",children:Object(u.jsx)(d.a.Link,{href:"index.html",children:"Home"})}),Object(u.jsx)(d.a.Item,{as:"li",children:Object(u.jsx)(d.a.Link,{onClick:function(){document.querySelector("#Booking").scrollIntoView({behavior:"smooth"})},children:"Book a Room"})})]})})]})})},O=c.p+"static/media/Image2.08346bab.jpg",p=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"site-hero",src:O})})},f=c(20),g=c(24),v=c(18),y=c(33),N=c(34),k=c(35),w=c(32),C=c(16),S=function(e){var t=e.room,c=e.roomPhotos,a=e.addBooking,n=Object(s.useState)([]),o=Object(j.a)(n,2),r=o[0],i=o[1],l=Object(s.useState)(""),d=Object(j.a)(l,2),m=d[0],x=d[1],O=Object(s.useState)(""),p=Object(j.a)(O,2),S=p[0],B=p[1],D=Object(s.useState)(0),I=Object(j.a)(D,2),T=I[0],z=I[1],F=Object(s.useState)(!1),A=Object(j.a)(F,2),M=A[0],R=A[1],q=Object(s.useState)(!1),P=Object(j.a)(q,2),E=P[0],G=P[1],H=function(){return R(!1)},J=function(){var e=t.roomBookDates.map((function(e){var t=new Date(e.dateFrom),c="".concat(t.getFullYear(),"-").concat(L(t.getMonth()+1),"-").concat(L(t.getDate()));return console.log(c),{title:"Reserved",date:c}}));console.log(e),i(e)},L=function(e){return e<10?"0"+e:e};return Object(s.useEffect)((function(){J()}),[]),Object(u.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(u.jsx)(b.a,{children:Object(u.jsx)(h.a,{md:4,children:Object(u.jsxs)(f.a,{style:{width:"18rem",height:"32em"},children:[Object(u.jsx)(f.a.Img,{variant:"top",height:"300px",src:t.photos[0].fileName}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{children:t.title}),Object(u.jsx)(f.a.Text,{children:t.description}),Object(u.jsx)(g.a,{variant:"primary",onClick:function(){J(),R(!0)},children:"Book Now"})]})]})})}),Object(u.jsxs)(v.a,{size:"lg",show:M,onHide:H,children:[Object(u.jsx)(v.a.Header,{closeButton:!0,children:Object(u.jsx)(v.a.Title,{children:t.title})}),Object(u.jsxs)(v.a.Body,{children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();m&&S&&T?m.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?T>t.roomCapacity?alert("Guest should not more that the capacity of the room."):T<0?alert("Guest should not a negative number."):r.filter((function(e){var t=new Date(e.date),c=new Date(S);return"".concat(t.getFullYear(),"-").concat(t.getDate(),"-").concat(t.getUTCMonth())=="".concat(c.getFullYear(),"-").concat(c.getDate(),"-").concat(c.getUTCMonth())})).length>0?alert("Chosen date is already not available."):new Date(S)<new Date?alert("Chosen date is should not be in the past."):(a({email:m,bookDate:S,guest:T,room:t}),x(""),B(""),z(""),R(!1)):alert("You have entered an invalid email address!"):alert("Please fill out all the necessary information needed to proceed with your booking.")},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)(b.a,{children:c.map((function(e){return Object(u.jsxs)(h.a,{md:3,children:[Object(u.jsx)(w.a,{width:"100%",height:"70%",src:e.fileName,rounded:!0})," "]},e.id)}))}),Object(u.jsxs)(b.a,{children:[Object(u.jsx)(h.a,{md:6,children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Room Capacity (person): ",t.roomCapacity]}),Object(u.jsxs)("p",{children:["Rate per night : ",t.price]}),Object(u.jsxs)("p",{children:["Address : ",t.address]}),Object(u.jsx)("iframe",{title:"Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.767915271296!2d120.99335465096203!3d14.612292680656143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b60396426393%3A0x3725ac9885620008!2sCristobal%20St%2C%20Sampaloc%2C%20Manila%2C%201008%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1614135366908!5m2!1sen!2sph",width:"100%",height:"200",style:{border:0},allowfullscreen:"",loading:"lazy"})]})}),Object(u.jsxs)(h.a,{md:6,children:[Object(u.jsx)("h4",{children:"Amenities"}),Object(u.jsxs)("p",{children:[Object(u.jsx)(C.c,{size:"30px"}),Object(u.jsx)("span",{className:"amenities-desc",children:"free parking"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(C.e,{size:"30px"}),Object(u.jsx)("span",{className:"amenities-desc",children:"75 inches android TV"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(C.f,{size:"30px"}),Object(u.jsx)("span",{className:"amenities-desc",children:"Unlimited use of WIFI"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(C.b,{size:"30px"}),Object(u.jsx)("span",{className:"amenities-desc",children:"Dedicated Workspace"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(C.d,{size:"30px"}),Object(u.jsx)("span",{className:"amenities-desc",children:"Centralized Aircon"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)(C.a,{size:"30px"}),Object(u.jsx)("span",{className:"amenities-desc",children:"3 bedrooms "})]})]})]})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"form-label",children:"Email Address"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:m,onChange:function(e){return x(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"form-label",children:"No. Of Guest"}),Object(u.jsx)("input",{type:"number",className:"form-control",value:T,onChange:function(e){return z(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"form-label",children:"Date Of Stay"}),Object(u.jsx)("input",{type:"date",className:"form-control",value:S,onChange:function(e){return B(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("a",{className:"btn btn-info",id:"showCalendar",onClick:function(e){var t=document.querySelector("#showCalendar");console.log(e),t.innerHTML=E?"Show Calendar":"Close Calendar",G(!E)},children:"Show Calendar"}),E&&Object(u.jsx)(y.a,{contentHeight:"300px",plugins:[N.a,k.a],initialView:"dayGridMonth",events:r,eventColor:"red",eventBackgroundColor:"red",dateClick:function(e){B(e.dateStr)}})]}),Object(u.jsx)("input",{type:"submit",className:"btn btn-block btn-success",value:"Process Booking"})]})})]}),Object(u.jsx)(v.a.Footer,{children:Object(u.jsx)(g.a,{variant:"secondary",onClick:H,children:"Close"})})]})]})},B=function(e){var t=e.rooms,c=e.addBooking;return Object(u.jsx)(m.a,{children:Object(u.jsx)(b.a,{children:t.map((function(e){return Object(u.jsx)(h.a,{md:4,children:Object(u.jsx)(S,{room:e,roomPhotos:e.photos,addBooking:c})},e.id)}))})})},D=c.p+"static/media/efcore.421cc1b8.png",I=c.p+"static/media/reactjs.dda701e5.png",T=c.p+"static/media/netcore.3ac68d1d.png",z=c.p+"static/media/sqlserver.ae7aeffc.jpg",F=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("image",{src:""}),Object(u.jsxs)("blockquote",{className:"blockquote text-center",children:[Object(u.jsx)("p",{className:"mb-0",children:"Sometimes, you just need a break, to a place you love, to get away from everything"}),Object(u.jsxs)("footer",{className:"blockquote-footer",children:["Thankyou for the qoute, My bestfriend ",Object(u.jsx)("cite",{title:"Source Title",children:"Google"})]})]}),Object(u.jsx)("img",{className:"footerIcons",src:D,alt:"Entity Framework Core"}),Object(u.jsx)("img",{className:"footerIcons",src:I,atlt:"React Js"}),Object(u.jsx)("img",{className:"footerIcons",src:T,alt:".Net Core"}),Object(u.jsx)("img",{className:"footerIcons",src:z,alt:"Sql Server"}),Object(u.jsx)("p",{children:"powered by"})]})};var A=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,a(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var n=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://localhost:44323/api/Room/getAllRooms");case 2:return t=e.sent,c=t.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,s,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),c={EmailAddress:t.email,PeopleStaying:parseInt(t.guest),RoomId:t.room.id,DateFrom:t.bookDate},console.log(JSON.stringify(c)),e.next=5,fetch("https://localhost:44323/api/Booking/BookRoom",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 5:return s=e.sent,e.next=8,s.json();case 8:return o=e.sent,alert(o),e.next=12,n();case 12:r=e.sent,a(r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(x,{}),Object(u.jsx)(p,{}),Object(u.jsxs)("div",{id:"Booking",className:"booking",children:[Object(u.jsx)("h4",{className:"booking-header",children:"Book one of our rooms!"}),Object(u.jsx)(B,{rooms:c,addBooking:o})]}),Object(u.jsx)("div",{className:"contact-me",children:Object(u.jsx)(F,{})})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),s(e),a(e),n(e),o(e)}))};c(50);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),M()}},[[51,1,2]]]);
//# sourceMappingURL=main.d66976ce.chunk.js.map