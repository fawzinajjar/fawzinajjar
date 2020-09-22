import React from "react";

export default function ImageSlide() {
  return (
    <div className="container">
      <img
        className="img"
        src="https://scontent.fiev25-2.fna.fbcdn.net/v/t1.0-9/61842026_2409737379091587_3396414615318429696_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=d-t7cGbz-EEAX_Gfrcz&_nc_ht=scontent.fiev25-2.fna&oh=a3203ec38afcc05ffdb360a976bfc9d1&oe=5F8E4D1B"
      />
      <style jsx="true">
        {`
          .img {
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            width: 30vw;
          }
        `}
      </style>
    </div>
  );
}
