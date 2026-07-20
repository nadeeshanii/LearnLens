import re

dashboard_path = "d:/My Project/Learn_Lens/frontend/src/pages/Dashboard.jsx"
with open(dashboard_path, "r", encoding="utf-8") as f:
    content = f.read()

old = '        </div>\n\n      <div className="grid gap-6 md:grid-cols-4">'
new = '        </div>\n      </div>\n\n      <div className="grid gap-6 md:grid-cols-4">'

content = content.replace(old, new)

with open(dashboard_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed Dashboard.jsx")

students_path = "d:/My Project/Learn_Lens/frontend/src/pages/Students.jsx"
with open(students_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix: Add missing closing </div> for the modal wrapper divs
old = '            </form>\n          </div>\n      ) : null}'
new = '            </form>\n          </div>\n        </div>\n      ) : null}'

content = content.replace(old, new)

with open(students_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed Students.jsx")
