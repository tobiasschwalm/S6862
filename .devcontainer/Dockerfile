FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# System-Werkzeuge, Java-Laufzeit für OpenFastTrace, Python mit pytest für die Übung produktsuche.
# pip3 und venv für eigene Pakete: Ubuntu lässt pip3 install nur in einer virtuellen Umgebung zu (python3 -m venv .venv)
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl ca-certificates jq git \
        openjdk-21-jre-headless python3 python3-pytest python3-pip python3-venv && \
    rm -rf /var/lib/apt/lists/*

# Node.js 22: OpenSpec 2.0.0 braucht 22.12 oder neuer, die Übungen nutzen node --test
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y --no-install-recommends nodejs && \
    rm -rf /var/lib/apt/lists/*

# OpenSpec in der Kursversion
ARG OPENSPEC_VERSION=2.0.0
RUN npm install -g @fission-ai/openspec@${OPENSPEC_VERSION}

# Keine Nutzungsdaten und keine Update-Abfrage von OpenSpec
ENV OPENSPEC_TELEMETRY=0 \
    OPENSPEC_NO_UPDATE_CHECK=1

# Claude Code als Agent im Terminal. Anmeldung beim ersten Start mit claude
ARG CLAUDE_CODE_VERSION=2.1.322
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}

# OpenFastTrace als JAR von Maven Central, mit Prüfsumme. Aufruf: java -jar "$OFT_JAR" trace ...
ARG OFT_VERSION=4.11.0
ARG OFT_SHA256=f094cd314f0fc4236f513f66fb39260a16f72e2320beb6b4fdeb7940b9b8cf87
RUN mkdir -p /opt/openfasttrace && \
    curl -fsSL -o /opt/openfasttrace/openfasttrace-${OFT_VERSION}.jar \
      https://repo1.maven.org/maven2/org/itsallcode/openfasttrace/openfasttrace/${OFT_VERSION}/openfasttrace-${OFT_VERSION}.jar && \
    echo "${OFT_SHA256}  /opt/openfasttrace/openfasttrace-${OFT_VERSION}.jar" | sha256sum -c -
ENV OFT_JAR=/opt/openfasttrace/openfasttrace-4.11.0.jar

# Ordner für Anmeldung und Einstellungen von Claude Code. Die devcontainer.json legt ein Volume darauf,
# damit die Anmeldung einen Neubau des Containers übersteht. Der Ordner gehört vscode, das Volume erbt das.
RUN mkdir -p /home/vscode/.claude && chown vscode:vscode /home/vscode/.claude
