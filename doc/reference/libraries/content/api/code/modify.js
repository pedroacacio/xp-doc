function editor(c) {
    c.displayName = 'Modified';
    c.data.a++;
    c.data.z = '99';

    c.x['other'] = {
        name: 'test'
    };

    return c;
}

var lib = require('/lib/xp/content');

var result = lib.modify({
    key: '/my/content',
    editor: editor
});

if (result) {
    log.info('Content modified. New title is ' + result.displayName);
} else {
    log.info('Content not found');
}