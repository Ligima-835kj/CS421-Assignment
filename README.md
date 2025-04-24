# 🛠️ PostgreSQL Backup Scripts

A collection of Bash scripts for managing PostgreSQL backups.

---

## 💡 Script Descriptions

- **`full_backup.sh`**: Creates a full backup of the specified PostgreSQL database.
- **`incremental_backup.sh`**: Performs an incremental backup by copying WAL (Write-Ahead Logging) files.
- **`differential_backup.sh`**: Backs up only changes made since the last full backup.
- **`restore_backup.sh`**: Restores the database from a full, incremental, or differential backup.

---

## 💡 Backup Types

- **Full Backup**: A complete copy of the database at a point in time.
- **Incremental Backup**: Stores only changes since the last backup (usually using WAL files).
- **Differential Backup**: Stores changes since the last full backup, but not since the last differential.

---

## 💡 How to Run Scripts

1. Make the script executable:
   ```bash
   chmod +x script_name.sh
