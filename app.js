const Replacer = require('./utils/Replacer')
const SaveJSON = require('./utils/SaveJSON')
const TextLoader = require('./utils/TextLoader')
const JSONLoader = require('./utils/JSONLoader')

module.exports = (sample_text, sample_data, result_path) => {
    const data = require(sample_data) //json file
    const sample_string = TextLoader(sample_text) //you are watching

	const reg = /"/g
    const processed_string = Replacer(sample_string, data).replace(reg, '\\\"');
    const save_path = __dirname + '/' + result_path
	
    SaveJSON(save_path, `{ "processed": "${ processed_string }" }`)

    const processed_json = JSONLoader(save_path)
    return processed_json
}
