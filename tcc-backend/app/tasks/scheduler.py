from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger
# Project Imports
from .metrics_job import get_metrics


# Start scheduler
scheduler = BackgroundScheduler()
scheduler.start()


# SCHEDULERS
# Get Stock Metrics
metrics_trigger = CronTrigger(
  year="*", month="*", day="*", hour="2", minute="0", second="0"
)
scheduler.add_job(get_metrics, metrics_trigger)
