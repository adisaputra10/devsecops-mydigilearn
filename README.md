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
3. Scan Gitleak
```
docker --rm -v $PWD:$PWD -w $PWD playcourt/jenkins:gitleaks  detect -v --no-git  --source $PWD
```
4. Scan Trivy
```
docker run --rm -v $PWD:$PWD -v /var/run/docker.sock:/var/run/docker.sock  -w $PWD aquasec/trivy:latest image --format json --output trivy-scan.json test:latest
```
4. Scan Depedency check
```
docker run --rm \
  -v $(pwd):/src \
  -v $(pwd)/odc-reports:/report \
  owasp/dependency-check \
  --scan /src \
  --format "ALL" \
  --project "My Node.js App" \
  --out /report

```
