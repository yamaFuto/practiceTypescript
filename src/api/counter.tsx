type point = {
  data: number
}

const asyncCount = (count = 1) => {
  return new Promise<point>((resolve) =>
    setTimeout(() => resolve({ data: count }), Math.random() * 1000)
  );
};

export { asyncCount } ;