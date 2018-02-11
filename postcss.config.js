
const autoprefixer = require('autoprefixer')

// 后处理css，即css已经编译完成了(styl-> css, 再优化)
module.exports = {
    plugins:[
        autoprefixer()
    ]
}