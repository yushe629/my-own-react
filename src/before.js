{
  const data = {
    hoge: 'hoooo',
    fuga: 'gaaaa',
    piyo: 'piiii'
  };

  const { hoge, ...other } = data;

  console.log(hoge, other);

}

const hoge = 'mumumu';
