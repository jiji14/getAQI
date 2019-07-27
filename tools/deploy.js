import push from 'git-push';

const remote = {
  name: 'getAQI',
  url: 'https://jiji14.github.io/getAQI/',
  branch: 'master'
};

export default async () => {
  //await build();
  await require('./build')();
  await new Promise(resolve => push('./build', remote, resolve));

};