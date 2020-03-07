const counters = document.querySelectorAll(".counter");
// gets us nodelist

const speed = 200;
// divide into target

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
      // after 1ms update the count
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
