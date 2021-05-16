#  deploy keycap docs
# =======
#
# sudo mkdir -p /data/keycap
# cd /data/keycap
# git clone -b latest https://github.com/isxcode/react-keycap

# 打包镜像
docker build -t isxcode/keycap-docs:0.0.1 -f /data/keycap/react-keycap/docs/deploy/Dockerfile

# 运行镜像
docker run --restart=always --name keycap-docs -p 30013:80 -d isxcode/keycap-docs:0.0.1