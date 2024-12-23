### website_scanner
port scanner all in one scanner..


##  Features 
one-step installation.
executes a multitude of security scanning tools, does other custom coded checks and prints the results spontaneously.
some of the tools include nmap, dnsrecon, wafw00f, uniscan, sslyze, fierce, lbd, theharvester, amass, nikto etc executes under one entity.
saves a lot of time, indeed a lot time!.
checks for same vulnerabilities with multiple tools to help you zero-in on false positives effectively.
extremely light-weight and not process intensive.
legends to help you understand which tests may take longer time, so you can Ctrl+C to skip if needed.
association with OWASP Top 10 & CWE 25 on the list of vulnerabilities discovered. (under development)
critical, high, medium, low and informational classification of vulnerabilities.
vulnerability definitions guides you what the vulnerability actually is and the threat it can pose.
remediation tells you how to plug/fix the found vulnerability.
executive summary gives you an overall context of the scan performed with critical, high, low and informational issues discovered.
artificial intelligence to deploy tools automatically depending upon the issues found. for eg; automates the launch of wpscan and plecost tools when a wordpress installation is found. (under development)
detailed comprehensive report in a portable document format (*.pdf) with complete details of the scans and tools used. (under development)
on the run metasploit auxilliary modules to discover more vulnerabilities. (under development)


## FYI:
program is still under development, works and currently supports 80 vulnerability tests.
parallel processing is not yet implemented, may be coded as more tests gets introduced.


## Vulnerability Checks##

✔️ DNS/HTTP Load Balancers & Web Application Firewalls.

✔️ Checks for Joomla, WordPress and Drupal

✔️ SSL related Vulnerabilities (HEARTBLEED, FREAK, POODLE, CCS Injection, LOGJAM, OCSP Stapling).

✔️ Commonly Opened Ports.

✔️ DNS Zone Transfers using multiple tools (Fierce, DNSWalk, DNSRecon, DNSEnum).

✔️ Sub-Domains Brute Forcing (DNSMap, amass, nikto).

✔️ Open Directory/File Brute Forcing.

✔️ Shallow XSS, SQLi and BSQLi Banners.

✔️ Slow-Loris DoS Attack, LFI (Local File Inclusion), RFI (Remote File Inclusion) & RCE (Remote Code Execution).
& more coming up...


## Requirements
Python 3
Kali OS (Preferred, as it is shipped with almost all the tools)
Tested with Parrot & Ubuntu Operating Systems.


## Installation
Alternatively, your can install the rapidscan python module with pip. This will create a link for rapidscan in your PATH.
```bash 
git clone https://github.com/Atharv787/website_scanner.git /opt/
cd /opt/rapidscan
python3 -m pip install .

```
Docker Support
Under development.

## Contribution

Create your feature branch: git checkout -b my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push to the branch: git push origin my-new-feature
Submit a pull request.
