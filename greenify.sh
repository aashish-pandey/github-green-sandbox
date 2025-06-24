#!/bin/bash

# Exit on error
set -e

# Ensure dates.txt exists
if [ ! -f dates.txt ]; then
  echo "❌ dates.txt not found. Please add your commit dates (YYYY-MM-DD) one per line."
  exit 1
fi

# Create placeholder file if not exists
touch activity.md

# Loop through each date
while read date; do
  # Format with time
  datetime="$date 12:00:00"

  echo "$datetime → committing"

  # Update the file (e.g., append a dummy line)
  echo "Commit on $date" >> activity.md

  # Add and commit with backdated timestamp
  GIT_AUTHOR_DATE="$datetime" GIT_COMMITTER_DATE="$datetime" git add activity.md
  GIT_AUTHOR_DATE="$datetime" GIT_COMMITTER_DATE="$datetime" git commit -m "Greenify $date"
done < dates.txt

echo "✅ All commits done. Push with:"
echo "   git push origin main"
