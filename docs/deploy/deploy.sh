# deploy keycap docs
#
# sudo mkdir -p /data/keycap
# cd /data/keycap
# sudo git clone -b latest https://github.com/isxcode/react-keycap
# cd /data/keycap/react-keycap/ && bash docs/deploy/deploy.sh

# build and run docs image
docker build -t isxcode/keycap-docs:0.0.1 -f /data/keycap/react-keycap/docs/deploy/Dockerfile . && docker run --restart=always --name keycap-docs -p 30013:80 -d isxcode/keycap-docs:0.0.1