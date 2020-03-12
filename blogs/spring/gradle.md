## gradle


### gradle 如何导入外部jar
flatDir { dirs 'lib' }

### 如何将maven项目gradle项目
// 添加repo  不然会报501
```xml
<repositories>
    <repository>
        <id>central</id>
        <url>https://repo.maven.apache.org/maven2/</url>
    </repository>
</repositories>
```

```shell script
gradle init
```

```
repositories {
    mavenLocal()
    maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
    flatDir { dirs 'lib' }
}
sourceCompatibility = JavaVersion.VERSION_11
```

```shell script
gradle build
```
