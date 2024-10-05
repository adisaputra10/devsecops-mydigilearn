# Devsecops-mydigilearn running in Linux and  Docker

1. Clone Repo
```
git clone https://github.com/adisaputra10/devsecops-mydigilearn
```
2. run Sonarqube
```
docker run -d --name sonarqube \
  -p 9000:9000 \
  -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true \
  sonarqube
```
3. Scan Sonarqube
```
docker run --rm -e SONAR_HOST_URL="http://localhost:9000" \
  -e SONAR_LOGIN="your_sonarqube_token" \
  -v "$(pwd):/usr/src" \
  sonarsource/sonar-scanner-cli
```

