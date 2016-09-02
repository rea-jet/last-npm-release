const Client = require('npm-registry-client');
import * as Promise from 'bluebird';

export default function(packageName: string, options: any = {}) {
  // options.client = options.client || {};
  // options.client.log = function(){};
  const client = new Client(options.client);

  return new Promise((resolve: Function, reject: Function) => {
    client.distTags.fetch(
      options.registry,
      {
        package: packageName,
        auth: options.auth
      },
      (err: any, tags: any) => err ? reject(err) : resolve(tags.latest)
    );
  });
}

