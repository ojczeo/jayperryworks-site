import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import generatePictureList from '../../utils/generatePictureList.js'

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify(
    generatePictureList('content/pictures')
  ))
}
