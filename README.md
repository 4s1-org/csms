# Charging Station Management System

## Docker

```bash
# Build
docker build -t csms .

# Start
docker run -it \
  -p 3000:3000 \
  -p 3001:3001 \
  -p 3002:3002 \
  --name csms \
  csms:latest

# Show into running container
docker exec -it csms sh
```
