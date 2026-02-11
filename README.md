# Prerequisites:
  You need
    Node installed
    Docker installed and open

# Install dependencies
  run: npm install

# Run Storybook
  run: npm run storybook

# Run the tests
  run: npm test

## Docker Build and Run

# Build the image
  run: docker build -t zack-deboer-ui-garden-image .

# Run the container
  run: docker run --name deboer_zack_coding_assignment_12 -p 8083:8083 zack-deboer-ui-garden-image

# Open the app in your browser
  Visit http://localhost:8083

# Stop the container
  run: docker stop deboer_zack_coding_assignment_12

# Remove the container
  run: docker rm deboer_zack_coding_assignment_12