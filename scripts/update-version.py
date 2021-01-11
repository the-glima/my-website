import sys, json

print ('Updating Version in Manifest')

manifestFile = open('./manifest.json', 'r')	
manifestJson = json.load(manifestFile)	

if len(sys.argv) == 2:
  manifestJson['version'] = sys.argv[1]
  manifestFile.close()	
else:
  versionFile = open('./version.json', 'r')	
  versionJson = json.load(versionFile)	
  manifestJson['version'] = versionJson['version']
  manifestFile.close()	
  versionFile.close()	

manifestFile = open('./manifest.json', 'w')
json.dump(manifestJson, manifestFile)	
manifestFile.close()
