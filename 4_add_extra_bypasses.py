import os

def generate_metadata_file(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    start_index = None
    end_index = None

    for i, line in enumerate(lines):
        if line.startswith("// ==UserScript=="):
            start_index = i
        elif line.startswith("// ==/UserScript=="):
            end_index = i
            break

    if start_index is not None and end_index is not None:
        metadata_lines = lines[start_index:end_index + 1]
        with open(output_file, 'w', encoding='utf-8') as f:
            f.writelines(metadata_lines)
        print("Metadata extracted successfully!")
    else:
        print("Could not find metadata in the input file.")


# Function to read and modify .js files
def process_js_files(folder_path, target_file):

    # Read the content of the target file
    with open(target_file, 'r', encoding='utf-8') as f:
        target_file_lines = f.readlines()

    # Initialize lists to store lines to be added
    grant_lines = []
    match_lines = []
    include_lines = []
    require_lines = []
    resource_lines = []
    after_user_script_lines = []

    # Traverse through the files in the folder
    for filename in sorted(os.listdir(folder_path)):
        if filename.endswith(".js"):
            with open(os.path.join(folder_path, filename), 'r', encoding='utf-8') as f:
                lines = f.readlines()

                # Find lines with "@match" or "@include" or "@require" or "@grant". Add them if they are not already in the target file.
                for line in lines:
                    if "@match" in line or "@include" in line or "@resource" in line or "@require" in line or "@grant" in line:
                        if line not in target_file_lines:
                            if line.startswith("// @grant"):
                                grant_lines.append(line)
                            elif line.startswith("// @match"):
                                match_lines.append(line)
                            elif line.startswith("// @include"):
                                include_lines.append(line)
                            elif line.startswith("// @require"):
                                require_lines.append(line)
                            elif line.startswith("// @resource"):
                                require_lines.append(line)

                # Find lines after "// ==/UserScript=="
                after_user_script = False
                for line in lines:
                    if after_user_script:
                        after_user_script_lines.append(line)
                    elif "// ==/UserScript==" in line:
                        after_user_script = True

    # Write gathered information to target_file
    with open(target_file, 'r+', encoding='utf-8') as f:
        content = f.readlines()
        exclude_index = next((i for i, line in enumerate(content) if "@exclude" in line), None)
        if exclude_index is not None:
            # Add match_lines and require_lines before the first @exclude line
            content = content[:exclude_index] + grant_lines + match_lines + include_lines + require_lines + resource_lines  + content[exclude_index:]
        # Add lines after "// ==/UserScript=="
        content.extend(after_user_script_lines)
        f.seek(0)
        f.writelines(content)


    # Clean match and include lines and add them to supported_sites.txt
    cleaned_lines = []
    for line in match_lines:
        cleaned_line = line.strip().replace("// @match", "").strip()
        cleaned_lines.append(cleaned_line)
    for line in include_lines:
        cleaned_line = line.strip().replace("// @include", "").strip()
        cleaned_lines.append(cleaned_line)
    with open("supported_sites.txt", 'a', encoding='utf-8') as f:
        for line in cleaned_lines:
            f.write(line + '\n')

def modify_script_OUJS(file_path, output_file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

            content = content.replace("Unlicense", "0BSD")
            # downloadURL
            content = content.replace("https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js", "https://openuserjs.org/install/gongchandang49/Bypass_All_Shortlinks_Debloated.user.js")
            # updateURL
            content = content.replace("https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js", "https://openuserjs.org/meta/gongchandang49/Bypass_All_Shortlinks_Debloated.meta.js")
            
            # icon size smfh
            content = content.replace("https://cdn-icons-png.flaticon.com/512/14025/14025295.png", "https://cdn-icons-png.flaticon.com/256/14025/14025295.png")

            if not content.endswith('\n'):
                content += '\n'

        with open(output_file_path, 'w', encoding='utf-8') as file:
            file.write(content)

        print("OUJS version exported successfully.")

    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


# Main function to execute the process
def main():
    fixes_folder = "./extra_bypasses"
    target_file = "Bypass_All_Shortlinks.user.js"
    process_js_files(fixes_folder, target_file)
    print("Modification complete.")
    generate_metadata_file("Bypass_All_Shortlinks.user.js", "Bypass_All_Shortlinks.meta.js")
    modify_script_OUJS("Bypass_All_Shortlinks.user.js", "share/BASD-OUJS.user.js")

if __name__ == "__main__":
    main()
