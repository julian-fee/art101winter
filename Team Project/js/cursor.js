document.getElementById('field').onmousemove = cursor.mouseMove;

cursor.mouseMove = function(mouseMovement) {
  const gavel = document.getElementById('gavel');
  let xPosition;
  let yPosition;
  if (mouseMovement){
    xPosition = mouseMovement.pageX;
    yPosition = mouseMovement.pagey;
    gavel.style.top = yPosition + 1 + 'px';
    gavel.style.left = xPosition + 'px';
  };
};
